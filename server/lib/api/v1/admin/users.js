import mixins from "#core/mixins";
import Base from "#core/app/mixins/base";
import Users from "#core/app/mixins/admin/users";

export default class extends mixins( Users, Base ) {}
