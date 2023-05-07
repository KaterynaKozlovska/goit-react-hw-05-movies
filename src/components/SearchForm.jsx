import { useState } from 'react';

import { Form, Input, FormBtn } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Enter your movie"
      />
      <FormBtn type="submit">Search</FormBtn>
    </Form>
  );
};
