import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import api from '../../services/movies-api.js';
import { ReviewList } from './Reviews.styles.js';
import Loader from 'components/Loader';
import ReviewItem from 'components/ReviewItem';

let source;

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    source = axios.CancelToken.source();
    const config = { cancelToken: source.token };

    async function getReviews() {
      try {
        setIsLoading(true);
        const response = await api.getReviews(movieId, config);
        setReviews(response);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();

    return () => {
      if (source) {
        source.cancel('Landing Component got unmounted');
      }
    };
  }, [movieId]);

  const reviewsElements = useMemo(() => {
    if (!reviews) {
      return;
    }

    return reviews.map(({ id, author, content }) => (
      <ReviewItem key={id} name={author} review={content} />
    ));
  }, [reviews]);

  return (
    <>
      {isLoading && <Loader />}
      <ReviewList>{reviewsElements}</ReviewList>
    </>
  );
}
