import express from "express";
import weather from "./routes/weather";
import cors from "cors";

const app = express();

app.use(cors());

app.use("/weather", weather);
// Get / endpoint
app.get("/", (req, res) =>
  res.status(200).json({
    msg: "Root endpoint of: https://github.com/sanqro/weather"
  })
);

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});

module.exports = app;
