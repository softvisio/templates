import sql from "#core/sql";

export default sql`

-- extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto;
-- CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;

-- int53
-- DO $$ BEGIN
--     IF to_regtype( 'int53' ) IS NULL THEN
--         CREATE DOMAIN IF NOT EXISTS int53 AS int8 CHECK ( VALUE >= -9007199254740991 AND VALUE <= 9007199254740991 );
--     END IF;
-- END $$;

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
