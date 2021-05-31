import mixins from "#core/mixins";
import Base from "#core/app/mixins/base";
import ApiCallLog from "#core/app/mixins/admin/api-call-log";

export default class extends mixins( ApiCallLog, Base ) {}
