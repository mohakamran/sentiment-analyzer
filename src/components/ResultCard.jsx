import { Card, CardContent, Typography } from '@mui/material';

function ResultCard({ sentiment, confidence }) {
  const color = sentiment === 'POSITIVE' ? 'green' : sentiment === 'NEGATIVE' ? 'red' : 'grey';

  return (
    <Card sx={{ mt: 3, maxWidth: 500, margin: 'auto', border: `2px solid ${color}` }}>
      <CardContent>
        <Typography variant="h6">
          Sentiment: <span style={{ color }}>{sentiment}</span>
        </Typography>
        <Typography variant="body1">Confidence: {confidence.toFixed(2)}</Typography>
      </CardContent>
    </Card>
  );
}

export default ResultCard;
