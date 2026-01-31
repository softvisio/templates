import WebpackComponent from "@corejslib/vue/webpack-components/firebase-messaging-worker";

export default class extends WebpackComponent {

    // public
    validateEnv ( env ) {
        return super.validateEnv( env ) || this._validateEnv( env, import.meta.url );
    }
}
