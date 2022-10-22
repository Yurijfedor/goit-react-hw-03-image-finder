import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Searchbar } from './imageGallery/searchbar';
import { ImageGallery } from './imageGallery/imageGallery';
import { Button } from './imageGallery/button';
import { Loader } from './imageGallery/loader';
import { Modal } from './imageGallery/modal';
import { fetchPictures } from './services/pixabayApiService';
import { Box } from 'constans';

const INITIAL_STATE = {
  query: '',
  items: [],
  isLoader: false,
  page: 1,
  largeImageUrl: '',
  showModal: false,
  totalImages: 1,
};
export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    const prevQuery = prevState.query;
    const nextQuery = query;

    if (prevQuery !== nextQuery || prevState.page !== page) {
      fetchPictures(query, page)
        .then(response => {
          if (response.data.hits.length === 0) {
            this.toglleLoader();
            return Notify.failure(
              `Sorry, we couldn't find anything else! Try another query!`
            );
          }
          this.toglleLoader();
          const collectionOfImages = response.data.hits;
          this.setState(prevState => ({
            items: [...prevState.items, ...collectionOfImages],
            totalImages: response.data.total,
          }));
        })
        .finally(this.toglleLoader());
    }
  }

  handleSubmit = value => {
    this.clearGallery();
    const query = value.toLowerCase();
    value.trim() !== ''
      ? this.setState({ query: query })
      : Notify.failure('Please, enter your query!');
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
    this.state.query &&
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
    const { showModal, largeImageUrl, items, isLoader, totalImages } =
      this.state;
    return (
      <Box display={'grid'} gridTemplateColumns={'1fr'} gridGap={4} pb={4}>
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageUrl={largeImageUrl} />
        )}
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery images={items} onClick={this.changeLargeImage} />
        {isLoader && <Loader />}
        {items.length !== totalImages && items.length !== 0 && (
          <Button onClick={this.loadMore} />
        )}
      </Box>
    );
  }
}
