import { CircularProgress, Box } from '@mui/material';

function Loader() {
  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
