export const ImageGalleryItem = ({
  imageData: { webformatURL, tags, largeImageURL },
  onClick,
}) => {
  return (
    <li>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
};
