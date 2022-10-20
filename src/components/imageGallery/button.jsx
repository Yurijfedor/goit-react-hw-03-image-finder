import PropTypes from 'prop-types';
export const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      ...Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
