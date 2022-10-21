import PropTypes from 'prop-types';

import { Component } from 'react';
import { Header, Form, FormButton, Input } from './imageGallery.styled';

export class Searchbar extends Component {
  getQueryValue = evt => {
    evt.preventDefault();
    const value = evt.target.query.value;
    this.props.onSubmit(value);
    evt.target.reset();
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.getQueryValue}>
          <FormButton type="submit"></FormButton>

          <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
