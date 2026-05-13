import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "API Restaurante",
      version: "1.0.0",
      description: "Documentacion de endpoints de la API del restaurante",
    },

    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Servidor local",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Ingresa el token JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["./src/modules/**/*.routes.ts"],
};

export const openApiSpec = swaggerJsdoc(options);