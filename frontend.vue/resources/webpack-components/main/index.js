import WebpackComponent from "@softvisio/vue/webpack-components/main";

export default class extends WebpackComponent {

    // static
    static get schemas () {
        return [

            //
            ...super.schemas,
            new URL( "env.schema.yaml", import.meta.url ),
        ];
    }
}
