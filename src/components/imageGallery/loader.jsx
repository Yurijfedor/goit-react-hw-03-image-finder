import { RotatingLines } from 'react-loader-spinner';
import { Box } from 'constans';

export const Loader = () => {
  return (
    <Box mr={'auto'} ml={'auto'}>
      <RotatingLines
        strokeColor="gray"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
};
