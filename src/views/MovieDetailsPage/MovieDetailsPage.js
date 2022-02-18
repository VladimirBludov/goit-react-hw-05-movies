import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import api from '../../services/movies-api.js';
import {
  BackButton,
  Image,
  Text,
  Title,
  WrapperMovie,
} from './MovieDetailsPage.styles.js';
import Loader from 'components/Loader';
import AdditionalInfo from 'components/AdditionalInfo';

let source;

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  const prevPage = useRef(location.state?.prevPath);

  useEffect(() => {
    source = axios.CancelToken.source();
    const config = { cancelToken: source.token };

    async function getMovie() {
      try {
        setIsLoading(true);
        const response = await api.getMoviesById(movieId, config);
        setMovie({ ...response });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();

    return () => {
      if (source) {
        source.cancel('Landing Component got unmounted');
      }
    };
  }, [movieId]);

  const goBack = () => {
    if (prevPage.current) {
      navigate(prevPage.current);
      return;
    }

    navigate('/');
  };

  return (
    <>
      <BackButton type="button" onClick={goBack}>
        Go back
      </BackButton>
      {isLoading && <Loader />}
      <WrapperMovie>
        <Image src={movie.src} alt={movie.title} />
        <div>
          <Title>{movie.title}</Title>
          <Text>User Score: {movie.userScore}</Text>
          <Title>Overview</Title>
          <Text>{movie.overview}</Text>
          <Title>Genres</Title>
          <Text>{movie.genres}</Text>
        </div>
      </WrapperMovie>
      <AdditionalInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
