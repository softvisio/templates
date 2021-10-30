import sql from "#core/sql";

export default sql`

-- extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto;
-- CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;

-- currency
-- DO $$ BEGIN
--     IF to_regtype( 'int53' ) IS NULL THEN
--         CREATE DOMAIN currency AS decimal ( 12, 4 ) NOT NULL DEFAULT 0;
--     END IF;
-- END $$;

`;

// export const types = {
//     "currency": { "decode": Number },
// };
