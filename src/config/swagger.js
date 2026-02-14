import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CI/CD Node.js App API',
            version: '1.0.0',
            description: 'API documentation for the CI/CD Node.js Application',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./src/app.js'],
};

export const specs = swaggerJsdoc(options);
