import Test from "./test.js";

export default Super =>
    class extends Super {

        // protected
        async _install () {
            return new Test( this.app, this.config );
        }

        async _init () {
            return this.instance.init();
        }

        async _start () {
            return this.instance.start();
        }

        async _destroy () {
            return this.instance.destroy();
        }
    };
