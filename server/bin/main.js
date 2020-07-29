#!/usr/bin/env node

const App = require( "../lib/app" );

App.runCli();

App.loadEnv( process.cli.options.devel );

const app = new App( {
    "devel": process.cli.options.devel,
} );

app.run().then( res => {
    if ( !res.ok ) process.exit( 1 );
} );
