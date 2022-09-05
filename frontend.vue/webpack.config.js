export * from "#vue/resources/webpack/default.config.js";

import { Main as Super } from "#vue/resources/webpack/default.config.js";

export class Main extends Super {
    constructor ( options ) {
        super( options );

        this.addSchema( "#resources/schemas/app.env.schema.yaml", import.meta.url );
    }
}
