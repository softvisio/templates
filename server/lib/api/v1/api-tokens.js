import mixins from "#core/mixins";
import Base from "#core/app/mixins/base";
import ApiTokens from "#core/app/mixins/api-tokens";

export default class extends mixins( ApiTokens, Base ) {}
