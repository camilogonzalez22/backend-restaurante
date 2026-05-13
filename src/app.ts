import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import v1Routes from "./api/v1/index";
import { errorMiddleware } from "./middlewares/error.middleware";
import { openApiSpec } from "./config/openapi";
import SwaggerUi from 'swagger-ui-express';                                               



export const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(compression());
app.use(express.json());

app.use('/api/v1/docs', SwaggerUi.serve, SwaggerUi.setup(openApiSpec));

app.use('/api/v1', v1Routes);

app.use(errorMiddleware);

