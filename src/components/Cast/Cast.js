import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import api from '../../services/movies-api.js';
import { ActorList } from './Cast.styles.js';
import Loader from 'components/Loader';
import CastItem from '../CastItem';

let source;

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    source = axios.CancelToken.source();
    const config = { cancelToken: source.token };

    async function getMoviesCast() {
      try {
        setIsLoading(true);
        const response = await api.getMoviesCast(movieId, config);
        setCast(response);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesCast();

    return () => {
      if (source) {
        source.cancel('Landing Component got unmounted');
      }
    };
  }, [movieId]);

  const actorsElements = useMemo(() => {
    if (!cast) return;

    return cast.map(({ id, src, name, character }) => (
      <CastItem key={id} src={src} name={name} character={character} />
    ));
  }, [cast]);

  return (
    <>
      {isLoading && <Loader />}
      <ActorList>{actorsElements}</ActorList>
    </>
  );
}
