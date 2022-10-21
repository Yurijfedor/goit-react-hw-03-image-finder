import PropTypes from 'prop-types';

import { GalleryItem, GalleryImage } from './imageGallery.styled';
export const ImageGalleryItem = ({
  imageData: { webformatURL, tags, largeImageURL },
  onClick,
}) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  imageData: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
