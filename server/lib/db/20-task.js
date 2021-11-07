import sql from "#core/sql";
import CONST from "#lib/const";

export default sql`

CREATE SEQUENCE task_id_seq AS int8 MAXVALUE 36028797018963967;

CREATE TABLE task (
    id int8 PRIMARY KEY NOT NULL DEFAULT gen_object_id( ${CONST.objects.task.id}, 'task_id_seq' ),
);

CREATE FUNCTION task_after_delete_trigger() RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM object_user WHERE object_id = OLD.id;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER task_after_delete AFTER DELETE ON task FOR EACH ROW EXECUTE PROCEDURE task_after_delete_trigger();

`;
