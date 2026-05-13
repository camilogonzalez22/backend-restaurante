import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { openApiSpec } from "./config/openapi";

import v1Routes from "./api/v1/index";
import { errorMiddleware } from "./middlewares/error.middleware";

export const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(compression());
app.use(express.json());
console.log(openApiSpec);
// SWAGGER
app.use(
  "/api/v1/docs",
  swaggerUi.serve,
  swaggerUi.setup(openApiSpec)
);

// RUTAS API
app.use("/api/v1", v1Routes);

// ERRORES
app.use(errorMiddleware);