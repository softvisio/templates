import WebpackComponent from "@softvisio/vue-ext/webpack-components/main";

export default class extends WebpackComponent {

    // properties
    get schemas () {
        return [

            //
            ...super.schemas,
            new URL( "env.schema.yaml", import.meta.url ),
        ];
    }
}