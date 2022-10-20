import { ImageGalleryItem } from './imageGalleryItem';
export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            url={image.webformatURL}
            alt={image.tags}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};
