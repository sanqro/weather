import express from "express";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const router = express.Router();

router.get("/get/:location", async (req, res) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${req.params.location}`
    );
    const data = await response.json();

    res.status(201).json({
      location: data.location,
      temperature: data.current.temp_c,
      feelsLike: data.current.feelslike_c,
      humidity: data.current.humidity,
      success: true
    });
  } catch (err) {
    res.status(503).json({ error: err.message });
  }
});

export default router;
