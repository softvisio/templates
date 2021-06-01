import Prototype from "#core/app/prototype";

export default class extends Prototype {
    async API_test ( ctx ) {
        return result( 200, new Date() );
    }
}
