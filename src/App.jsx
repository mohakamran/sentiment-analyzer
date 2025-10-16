import React, { useState } from "react";
import { analyzeSentiment } from "./services/api";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Fade,
  Stack,
} from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(async () => {
      const res = await analyzeSentiment(text);
      setResult(res);
      setLoading(false);
    }, 300);
  };

  const handleClear = () => {
    setText("");
    setResult(null);
  };

  const getEmoji = (label) => {
    switch (label) {
      case "POSITIVE":
        return <SentimentSatisfiedAltIcon sx={{ fontSize: 80, color: "green" }} />;
      case "NEGATIVE":
        return <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80, color: "red" }} />;
      default:
        return <SentimentNeutralIcon sx={{ fontSize: 80, color: "gray" }} />;
    }
  };

  const getColor = (label) => {
    switch (label) {
      case "POSITIVE":
        return "#4ade80"; // green
      case "NEGATIVE":
        return "#f87171"; // red
      default:
        return "#9ca3af"; // gray
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #c7d2fe, #fbcfe8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 550,
          width: "100%",
          p: 4,
          boxShadow: 6,
          borderRadius: 4,
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255,255,255,0.7)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight={700}
            sx={{ color: "#1e293b" }}
          >
            Sentiment Analyzer 💬
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Type something here..."
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ mb: 3, mt: 1 }}
          />

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              onClick={handleAnalyze}
              disabled={loading || !text.trim()}
              sx={{ background: "#4f46e5" }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Analyze"}
            </Button>

            <Button variant="outlined" color="secondary" onClick={handleClear}>
              Clear
            </Button>
          </Stack>

          <Fade in={Boolean(result)} timeout={700}>
            <Box textAlign="center" mt={4}>
              {result && getEmoji(result.label)}
              {result && (
                <>
                  <Typography
                    variant="h5"
                    mt={1}
                    fontWeight={600}
                    sx={{ color: getColor(result.label) }}
                  >
                    {result.label}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 0.5, color: "#334155" }}>
                    Sentiment Score: {result.score}
                  </Typography>
                </>
              )}
            </Box>
          </Fade>
        </CardContent>
      </Card>
    </Box>
  );
}
