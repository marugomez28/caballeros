import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Caballeros del Zodiaco",
      version: "2.0.0",
      description: "Documentación de la API para consultar caballeros del zodiaco",
    },
    servers: [
      {
        url: "caballeros-production.up.railway.app",
        description: "Servidor local",
      },
    ],
  },
  apis: ["./routes/*.js"], // donde estarán los comentarios Swagger
};

const swaggerSpec = swaggerJsDoc(options);

export { swaggerUi, swaggerSpec };
