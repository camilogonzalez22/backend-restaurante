import SwaggerJsdoc from 'swagger-jsdoc';

export const openApiSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Restaurante',
      version: '1.0.0',
      description: 'Documentacion de endpoints de la API del restaurante',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
      description: 'Documentacion de endpoints de la API del restaurante',
    },
  ],
  apis: ['./src/modules/**/*.routes.ts'],
};