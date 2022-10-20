export const ImageGalleryItem = ({ url, alt }) => {
  return (
    <li>
      <img src={url} alt={alt} />
    </li>
  );
};
