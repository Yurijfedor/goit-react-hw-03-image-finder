import { Component } from 'react';
import { Searchbar } from './imageGallery/searchbar';
import { ImageGallery } from './imageGallery/imageGallery';
import { Button } from './imageGallery/button';
import { Loader } from './imageGallery/loader';
import { Modal } from './imageGallery/modal';
import PixabayApiService from './services/pixabayApiService';

const pixabayApiService = new PixabayApiService();
const INITIAL_STATE = {
  query: '',
  items: [],
  isLoader: false,
  page: 1,
  largeImageUrl: '',
  showModal: false,
};
export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery || prevState.page !== this.state.page) {
      pixabayApiService
        .fetchPictures()
        .then(response => {
          this.toglleLoader();
          const collectionOfImages = response.data.hits;
          this.setState(prevState => ({
            items: [...prevState.items, ...collectionOfImages],
          }));
          pixabayApiService.incrementPage();
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
    console.log(this.state.page);
  };

  toglleLoader() {
    this.setState(prevState =>
      prevState.isLoader ? { isLoader: false } : { isLoader: true }
    );
  }

  clearGallery() {
    this.setState({ ...INITIAL_STATE });
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  changeLargeImage = url => {
    this.setState({ largeImageUrl: url });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageUrl={this.state.largeImageUrl}
          />
        )}
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery
          images={this.state.items}
          onClick={this.changeLargeImage}
        />
        <Loader showingLoader={this.state.isLoader} />
        <Button onClick={this.loadMore} />
      </>
    );
  }
}
