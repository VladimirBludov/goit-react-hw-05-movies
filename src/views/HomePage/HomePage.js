import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import MoviesList from 'components/MoviesList';
import api from '../../services/movies-api';
import { Wrapper } from './HomePage.styles';
import Loader from 'components/Loader';
import { useLocation } from 'react-router-dom';

let source;

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (trendingMovies.length) {
      return;
    }

    source = axios.CancelToken.source();
    const config = { cancelToken: source.token };

    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);

        const movies = await api.getTrending(config);
        setTrendingMovies(movies);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();

    return () => {
      if (source) {
        source.cancel('Landing Component got unmounted');
      }
    };
  }, [setTrendingMovies, trendingMovies]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <MoviesList movies={trendingMovies} from={location.pathname} />
    </Wrapper>
  );
}
