import PropTypes from 'prop-types';
import { ImageGalleryItem } from './imageGalleryItem';
import { GalleryList } from './imageGallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <GalleryList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            imageData={image}
            onClick={onClick}
          ></ImageGalleryItem>
        );
      })}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
