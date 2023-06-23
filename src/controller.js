import axios from "axios";

const NASA_API_KEY = "KwoR30rHhgWOQxkbC98jleesuBKILlYMRQiLOoMD";

/* API Test */
export const API_Test = (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
};

/* Get Weather Data from NASA */
export const getWeather = async (req, res) => {
  console.log(`getWeather :: Called`);

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
  console.log(`getImagesJsonOnSol :: Called`);

  const { sol } = req.params;
  console.log(`getImagesJsonOnSol :: Sol: ${sol}`);

  const response = await axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )
    .then((resp) => {
      const imagesArray = resp.data.photos;
      if (!imagesArray || imagesArray === []) {
        console.error(`getImagesJsonOnSol :: No Such Images Exist`);
        res.send([{}]);
        return;
      }
      res.send(imagesArray);
    })
    .catch((e) => {
      console.error(`getImagesJsonOnSol: ${e}`);
      res.send(`ERROR: getImagesJsonOnSol: ${e}`);
    });
};

/* Get Just Image Links on Sol From NASA Image API */
export const getImagesLinksOnSol = async (req, res) => {
  console.log(`getImagesLinksOnSol :: Called`);

  const { sol } = req.params;
  console.log(`getImagesLinksOnSol :: Sol: ${sol}`);

  const response = await axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )
    .then((resp) => {
      const imagesArray = resp.data.photos;
      if (!imagesArray || imagesArray === []) {
        console.error(`getImagesLinksOnSol :: No Such Images Exist`);
        res.send([""]);
        return;
      }
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
  console.log(`getSpecificImageJsonOnSol :: Called`);

  const { sol, num } = req.params;
  console.log(`getSpecificImageJsonOnSol :: Sol: ${sol} || Num: ${num}`);

  const response = await axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )
    .then((resp) => {
      const imagesArray = resp.data.photos;
      const imageJsonObject = imagesArray[num];
      if (!imageJsonObject) {
        console.error(`getSpecificImageJsonOnSol :: No Such Image Exists`);
        res.send("");
        return;
      }
      res.send(imageJsonObject);
      console.log(`getSpecificImageJsonOnSol :: Response: ${imagesArray[num]}`);
    })
    .catch((e) => {
      console.error(`getSpecificImageJsonOnSol: ${e}`);
      res.send(`ERROR: getSpecificImageJsonOnSol: ${e}`);
    });
};

/* Get Specific Image Link on Sol From NASA Image API */
export const getSpecificImageLinkOnSol = async (req, res) => {
  console.log(`getSpecificImageLinkOnSol :: Called`);

  const { sol, num } = req.params;
  console.log(`getSpecificImageLinkOnSol :: Sol: ${sol} || Num: ${num}`);

  const response = await axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )
    .then((resp) => {
      const imagesArray = resp.data.photos;
      const imageJsonObject = imagesArray[num];
      if (!imageJsonObject) {
        console.error(`getSpecificImageLinkOnSol :: No Such Image Exists`);
        res.send("");
        return;
      }
      res.send(imageJsonObject.img_src);
      console.log(
        `getSpecificImageLinkOnSol :: Response: ${imageJsonObject.img_src}`
      );
    })
    .catch((e) => {
      console.error(`getSpecificImageLinkOnSol: ${e}`);
      res.send(`ERROR: getSpecificImageLinkOnSol: ${e}`);
    });
};
