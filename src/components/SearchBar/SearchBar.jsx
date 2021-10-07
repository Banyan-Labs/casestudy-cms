/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, } from './style';

const SearchBar = ({ updateInput }) => {
  <Container>
    <Input
      type='search'
      placeholder={'Search for a case study'}
      onChange={({ target: { value } }) => updateInput(value)}
    />
  </Container>
}
SearchBar.propTypes = {
  updateInput: PropTypes.string,
}
export default SearchBar;
