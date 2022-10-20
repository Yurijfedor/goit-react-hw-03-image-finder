import { ImageGalleryItem } from './imageGalleryItem';
export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            imageData={image}
            onClick={onClick}
            // url={image.webformatURL}
            // alt={image.tags}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};
