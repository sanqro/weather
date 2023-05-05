import express from "express";

const app = express();

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
