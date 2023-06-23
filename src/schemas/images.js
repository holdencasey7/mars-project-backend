import Joi from "joi";

const S_NASA_Image_API_Response = Joi.object({
  photos: Joi.array().items(
    Joi.object({
      id: Joi.number(),
      sol: Joi.number(),
      camera: Joi.object({
        id: Joi.number(),
        name: Joi.string(),
        rover_id: Joi.number(),
        full_name: Joi.string(),
      }),
      img_src: Joi.string(),
      earth_date: Joi.string(),
      rover: Joi.object({
        id: Joi.number(),
        name: Joi.string(),
        landing_date: Joi.string(),
        launch_date: Joi.string(),
        status: Joi.string(),
      }),
    })
  ),
});
