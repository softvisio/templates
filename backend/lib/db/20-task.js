import sql from "#core/sql";

export default sql`

CREATE TABLE task (
    id int8 PRIMARY KEY DEFAULT gen_acl_id( 'task-type' )
);

CREATE TRIGGER task_after_delete AFTER DELETE ON task FOR EACH ROW EXECUTE FUNCTION acl_object_after_delete_trigger();

`;
