import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { ButtonSearch, Form, Input } from './SearchForm.styles';

SearchForm.propTypes = {
  getQuery: PropTypes.func.isRequired,
};

export default function SearchForm({ getQuery }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const normalizedSearchQuery = searchQuery.toLowerCase().trim();

    if (!normalizedSearchQuery) {
      toast.error('Please enter search parameters.');
      return;
    }

    getQuery(normalizedSearchQuery);
    setSearchQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={searchQuery} onChange={handleChange} />
      <ButtonSearch type="submit">Search</ButtonSearch>
    </Form>
  );
}
