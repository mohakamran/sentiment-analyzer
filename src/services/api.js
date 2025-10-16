import Sentiment from "sentiment";

const sentiment = new Sentiment();

export const analyzeSentiment = async (text) => {
  const result = sentiment.analyze(text);

  let label = "NEUTRAL";
  if (result.score > 1) label = "POSITIVE";
  else if (result.score < -1) label = "NEGATIVE";

  return {
    label,
    score: result.score,
  };
};
