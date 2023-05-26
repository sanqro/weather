import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import fetch from "node-fetch";
import { WeatherData } from "../interfaces/interfaces";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const router = express.Router();

router.get("/get/:longitude/:latitude", async (req, res) => {
  try {
    const { longitude, latitude } = req.params;

    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${longitude},${latitude}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data.");
    }

    const data: WeatherData = await response.json();

    res.status(200).json({
      location: data.location.name,
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
