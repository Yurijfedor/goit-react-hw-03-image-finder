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
