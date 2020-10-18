#!/usr/bin/env node

const App = require( "../lib/app" );

App.runCli();

const app = new App();

app.run().then( res => {
    if ( !res.ok ) process.exit( 1 );
} );
