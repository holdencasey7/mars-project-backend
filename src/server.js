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

/* Get Images JSON on Sol */
app.get("/api/images/json/:sol", api.getImagesJsonOnSol);

/* Get Just Image Links on Sol From NASA Image API */
app.get("/api/images/link/:sol", api.getImagesLinksOnSol);

/* Get Specific Image JSON on Sol From NASA Image API */
app.get("/api/images/json/:sol/:num", api.getSpecificImageJsonOnSol);

/* Get Specific Image Link on Sol From NASA Image API */
app.get("/api/images/link/:sol/:num", api.getSpecificImageLinkOnSol);
