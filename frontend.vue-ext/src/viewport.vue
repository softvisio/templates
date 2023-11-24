<script>
import Viewport from "#vue/viewport";

export default {
    "extends": Viewport,

    created () {
        this.publicView = () => import( /* webpackChunkName: "public" */ "@/views/public.vue" );
        this.privateView = () => import( /* webpackChunkName: "private" */ "@/views/private.vue" );
    },

    "methods": {
        async _route () {
            return Viewport.methods._route.call( this );
        },
    },
};
</script>
