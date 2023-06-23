import axios from "axios";

const NASA_API_KEY = "KwoR30rHhgWOQxkbC98jleesuBKILlYMRQiLOoMD";

/* API Test */
export const API_Test = (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
};

/* Get Weather Data from NASA */
export const getWeather = async (req, res) => {
  const response = await axios
    .get(
      `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`
    )
    .then((resp) => {
      res.send(resp.data);
    });
};

/* Get Image on Sol */
export const getImageOnSol = async (req, res) => {
  const { sol } = req.params;
  const response = await axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )
    .then((resp) => {
      res.send(resp.data);
    });
};
