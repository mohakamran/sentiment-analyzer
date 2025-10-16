import { TextField, Button, Box } from '@mui/material';

function TextInput({ text, setText, handleAnalyze, loading }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={3}>
      <TextField
        label="Enter text"
        multiline
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAnalyze}
        disabled={!text || loading}
      >
        {loading ? 'Analyzing...' : 'Analyze Sentiment'}
      </Button>
    </Box>
  );
}

export default TextInput;
