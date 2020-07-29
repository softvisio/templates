<script>
import Viewport from "#softvisio/viewport";

export default {
    "extends": Viewport,

    "data": () => {
        return {
            "publicView": () => import( "@/views/public.vue" ),
            "privateView": () => import( "@/views/private.vue" ),
        };
    },

    "methods": {
        async onRoute ( route ) {
            Viewport.methods.onRoute.call( this, route );
        },
    },
};
</script>
