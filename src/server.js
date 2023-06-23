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

/* Get Image on Sol */
app.get("/api/image/:sol", api.getImageOnSol);
