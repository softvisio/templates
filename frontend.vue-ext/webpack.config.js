import config from "#vue/resources/webpack/default.config.js";

config.get( "main" ).addSchema( "#resources/schemas/app.env.schema.yaml", import.meta.url );

export default config;
