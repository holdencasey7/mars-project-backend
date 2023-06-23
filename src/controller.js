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
    })
    .catch((e) => {
      console.error(`getWeather: ${e}`);
      res.send(`ERROR: getWeather: ${e}`);
    });
};

/* Get Images JSON on Sol From NASA Image API */
export const getImagesJsonOnSol = async (req, res) => {
  const { sol } = req.params;
  const response = await axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )
    .then((resp) => {
      res.send(resp.data.photos);
    })
    .catch((e) => {
      console.error(`getImagesJsonOnSol: ${e}`);
      res.send(`ERROR: getImagesJsonOnSol: ${e}`);
    });
};

/* Get Just Image Links on Sol From NASA Image API */
export const getImagesLinksOnSol = async (req, res) => {
  const { sol } = req.params;
  const response = await axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )
    .then((resp) => {
      const imagesArray = resp.data.photos;
      const imagesLinksArray = [];
      for (let imageJsonObject of imagesArray) {
        imagesLinksArray.push(imageJsonObject.img_src);
      }
      res.send(imagesLinksArray);
    })
    .catch((e) => {
      console.error(`getImagesLinksOnSol: ${e}`);
      res.send(`ERROR: getImagesLinksOnSol: ${e}`);
    });
};

/* Get Specific Image JSON on Sol From NASA Image API */
export const getSpecificImageJsonOnSol = async (req, res) => {
  const { sol, num } = req.params;
  const response = await axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )
    .then((resp) => {
      const imagesArray = resp.data.photos;
      res.send(imagesArray[num]);
    })
    .catch((e) => {
      console.error(`getSpecificImageJsonOnSol: ${e}`);
      res.send(`ERROR: getSpecificImageJsonOnSol: ${e}`);
    });
};
