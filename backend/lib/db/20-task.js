import sql from "#core/sql";
import constrants from "#lib/app.config";

export default sql`

CREATE SEQUENCE task_id_seq AS int8 MAXVALUE 36028797018963967;

CREATE TABLE task (
    id int8 PRIMARY KEY DEFAULT gen_object_id( ${constrants.objects.task.id}, 'task_id_seq' )
);

CREATE TRIGGER task_after_delete AFTER DELETE ON task FOR EACH ROW EXECUTE PROCEDURE object_after_delete_trigger();

`;
