import { Component } from 'react';
import { Searchbar } from './imageGallery/searchbar';
import { ImageGallery } from './imageGallery/imageGallery';
import { Button } from './imageGallery/button';
import { Loader } from './imageGallery/loader';
import PixabayApiService from './services/pixabayApiService';

const pixabayApiService = new PixabayApiService();
const INITIAL_STATE = {
  query: '',
  items: [],
  isLoader: false,
};
export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      pixabayApiService
        .fetchPictures()
        .then(response => {
          this.toglleLoader();
          const collectionOfImages = response.data.hits;
          this.setState(prevState => ({
            items: [...collectionOfImages, ...prevState.items],
          }));
        })
        .finally(this.toglleLoader());
    }
    pixabayApiService.incrementPage();
  }

  handleSubmit = value => {
    this.clearGallery();
    const query = value.toLowerCase();
    value.trim() !== ''
      ? this.setState({ query: query })
      : alert('Please, enter your query!');
    pixabayApiService.query = query;
    pixabayApiService.resetPage();
  };

  toglleLoader() {
    this.setState(prevState =>
      prevState.isLoader ? { isLoader: false } : { isLoader: true }
    );
  }

  clearGallery() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <Loader showingLoader={this.state.isLoader} />
        <ImageGallery images={this.state.items} />
        <Button />
      </>
    );
  }
}
