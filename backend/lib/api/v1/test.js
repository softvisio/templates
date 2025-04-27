export default Super =>
    class extends Super {
        async [ "API_test" ] ( ctx ) {
            return result( 200, new Date() );
        }
    };
