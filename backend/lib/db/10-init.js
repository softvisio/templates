import sql from "#core/sql";

export default sql`

-- extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS softvisio_types;
CREATE EXTENSION IF NOT EXISTS softvisio_locks;

`;
