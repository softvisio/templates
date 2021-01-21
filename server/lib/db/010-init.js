const sql = require( "@softvisio/core/sql" );

module.exports = {
    "sql": sql`
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";

        CREATE EXTENSION IF NOT EXISTS "timescaledb" CASCADE;

        -- CREATE EXTENSION IF NOT EXISTS "pg_hashids";

        -- TYPES
        -- CREATE DOMAIN "currency" AS decimal(12, 4) NULL DEFAULT 0
    `,
    "types": {

        // "currency": {
        //     "decode": buffer => Number( buffer ),
        // },
    },
};
