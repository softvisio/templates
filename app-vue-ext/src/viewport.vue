<script>
import Viewport from "#softvisio/viewport";

export default {
    "extends": Viewport,

    created () {
        this.publicView = () => import( "@/views/public.vue" );
        this.privateView = () => import( "@/views/private.vue" );
    },

    "methods": {
        async onRoute ( route ) {
            Viewport.methods.onRoute.call( this, route );
        },
    },
};
</script>
