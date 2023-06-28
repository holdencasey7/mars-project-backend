import express from "express";
import * as api from "./controller.js";

const app = express();
app.use(express.json());

/* Server Listen Port 8000 */
app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

/* Test API function */
app.get("/api/:name", api.API_Test);

/* Get Weather Data from NASA */
app.get("/api/weather/", api.getWeather);

/* Get Curiosity Images JSON on Sol */
app.get("/api/images/curiosity/json/:sol", api.getCuriosityImagesJsonOnSol);

/* Get Curiosity Just Image Links on Sol From NASA Image API */
app.get("/api/images/curiosity/link/:sol", api.getCuriosityImagesLinksOnSol);

/* Get Curiosity Specific Image JSON on Sol From NASA Image API */
app.get(
  "/api/images/curiosity/json/:sol/:num",
  api.getCuriositySpecificImageJsonOnSol
);

/* Get Curiosity Specific Image Link on Sol From NASA Image API */
app.get(
  "/api/images/curiosity/link/:sol/:num",
  api.getCuriositySpecificImageLinkOnSol
);

/* Get All Rover Images JSON on Earth Date */
app.get("/api/images/all/json/:earthDate", api.getAllImagesJsonOnEarthDate);
