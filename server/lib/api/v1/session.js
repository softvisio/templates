import mixins from "#core/mixins";
import Base from "#core/app/mixins/base";
import Session from "#core/app/mixins/session";

export default class extends mixins( Session, Base ) {}
