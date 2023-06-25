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
      throw new Error(e);
    });
};

/* Get Images JSON on Sol From NASA Image API */
export const getImagesJsonOnSol = async (req, res) => {
  console.log(`getImagesJsonOnSol :: Called`);

  const { sol } = req.params;
  console.log(`getImagesJsonOnSol :: Sol: ${sol}`);

  const response = await axios
    // Use NASA API
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )

    .then((resp) => {
      const imagesArray = resp.data.photos;

      // Error if no images returned from NASA API
      if (!imagesArray || imagesArray === []) {
        console.error(`getImagesJsonOnSol :: No Such Images Exist`);
        const error = {
          status: 404,
          error: "Resource Not Found",
          message: "No images available",
        };
        const response = {
          image_json_array: [],
          errors: [error],
        };
        res.send(response);
        return;
      }

      // Otherwise return image JSON array
      const response = {
        image_json_array: imagesArray,
        errors: [],
      };
      res.send(response);
      console.log(`getImagesJsonOnSol :: Response: ${response}`);
    })

    // Handle other errors
    .catch((e) => {
      console.error(`getImagesJsonOnSol: ${e}`);
      throw new Error(e);
    });
};

/* Get Just Image Links on Sol From NASA Image API */
export const getImagesLinksOnSol = async (req, res) => {
  console.log(`getImagesLinksOnSol :: Called`);

  const { sol } = req.params;
  console.log(`getImagesLinksOnSol :: Sol: ${sol}`);

  const response = await axios
    // Use NASA API
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )

    .then((resp) => {
      const imagesArray = resp.data.photos;

      // Error if no images returned from NASA API
      if (!imagesArray || imagesArray === []) {
        console.error(`getImagesLinksOnSol :: No Such Images Exist`);
        const error = {
          status: 404,
          error: "Resource Not Found",
          message: "No images available",
        };
        const response = {
          image_link_array: [],
          errors: [error],
        };
        res.send(response);
        return;
      }

      // Otherwise return image links array
      const imagesLinksArray = [];
      for (let imageJsonObject of imagesArray) {
        imagesLinksArray.push(imageJsonObject.img_src);
      }
      const response = {
        image_link_array: imagesLinksArray,
        errors: [],
      };
      res.send(response);
      console.log(`getImagesLinksOnSol :: Response: ${response}`);
    })

    // Handle other errors
    .catch((e) => {
      console.error(`getImagesLinksOnSol: ${e}`);
      throw new Error(e);
    });
};

/* Get Specific Image JSON on Sol From NASA Image API */
export const getSpecificImageJsonOnSol = async (req, res) => {
  console.log(`getSpecificImageJsonOnSol :: Called`);

  const { sol, num } = req.params;
  console.log(`getSpecificImageJsonOnSol :: Sol: ${sol} || Num: ${num}`);

  const response = await axios
    // Use NASA API
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )

    .then((resp) => {
      const imagesArray = resp.data.photos;
      const imageJsonObject = imagesArray[num];

      // Error if no image returned from NASA API
      if (!imageJsonObject) {
        console.error(`getSpecificImageJsonOnSol :: No Such Image Exists`);
        const error = {
          status: 404,
          error: "Resource Not Found",
          message: "No image available",
        };
        const response = {
          image_json: {},
          errors: [error],
        };
        res.send(response);
        return;
      }

      // Otherwise return image JSON
      const response = {
        image_json: imageJsonObject,
        errors: [],
      };
      res.send(response);
      console.log(`getSpecificImageJsonOnSol :: Response: ${response}`);
    })

    // Handle other errors
    .catch((e) => {
      console.error(`getSpecificImageJsonOnSol: ${e}`);
      throw new Error(e);
    });
};

/* Get Specific Image Link on Sol From NASA Image API */
export const getSpecificImageLinkOnSol = async (req, res) => {
  console.log(`getSpecificImageLinkOnSol :: Called`);

  const { sol, num } = req.params;
  console.log(`getSpecificImageLinkOnSol :: Sol: ${sol} || Num: ${num}`);

  const response = await axios
    // Use NASA API
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    )

    .then((resp) => {
      const imagesArray = resp.data.photos;
      const imageJsonObject = imagesArray[num];

      // Error if no image returned from NASA API
      if (!imageJsonObject) {
        console.error(`getSpecificImageLinkOnSol :: No Such Image Exists`);
        const error = {
          status: 404,
          error: "Resource Not Found",
          message: "No image available",
        };
        const response = {
          image_link: "",
          errors: [error],
        };
        res.send(response);
        return;
      }

      // Otherwise return image link
      const response = {
        image_link: imageJsonObject.img_src,
        errors: [],
      };
      res.send(response);
      console.log(`getSpecificImageLinkOnSol :: Response: ${response}`);
    })

    // Handle other errors
    .catch((e) => {
      console.error(`getSpecificImageLinkOnSol: ${e}`);
      throw new Error(e);
    });
};
