import Base from "#app/prototypes/base";

export default class extends Base {
    async API_test ( ctx ) {
        return result( 200, new Date() );
    }
}
