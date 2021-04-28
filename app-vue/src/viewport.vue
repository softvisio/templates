<script>
import Viewport from ":softvisio/viewport";

export default {
    "extends": Viewport,

    "methods": {
        async ready () {
            await Viewport.methods.ready.call( this );

            alert( "App initialized" );
        },

        async onAppInitFailure () {
            alert( `Server connection error. Press "OK" to try again.` );
        },

        onAuthChange () {},

        async signin ( username, password ) {
            var res = await this.$store.session.signin( { username, password } );

            if ( !res.ok ) {
                alert( `Auth problem: ${res.toString()}` );
            }
        },

        signout () {
            this.$store.session.signout();
        },
    },
};
</script>
