import config from "#vue/resources/webpack/default.config.js";

config.main.schemas.push( new URL( "./resources/schemas/app.env.schema.yaml", import.meta.url ) );

export default config;
