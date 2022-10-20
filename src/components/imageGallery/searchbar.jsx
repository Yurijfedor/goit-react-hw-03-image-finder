import { Component } from 'react';

export class Searchbar extends Component {
  getQueryValue = evt => {
    evt.preventDefault();
    const value = evt.target.query.value;
    this.props.onSubmit(value);
    evt.target.reset();
  };

  render() {
    return (
      <header>
        <form onSubmit={this.getQueryValue}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
