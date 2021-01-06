#!/usr/bin/env node

const App = require( "../lib/app" );

App.runCli();

const app = new App();

( async () => {
    const res = await app.run();

    if ( !res.ok ) process.exit( 1 );
} )();
