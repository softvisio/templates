import Store from "#softvisio/store";

// import CONST from "@/const";
import UserModel from "@/models/user";

export default class extends Store {
    state () {
        return {
            "userStore": Ext.create( "Ext.data.Store", {
                "model": UserModel,
                "autoLoad": false,
                "pageSize": 50,
            } ),
        };
    }

    getters () {
        return {};
    }

    mutations () {
        return {};
    }

    actions () {
        return {};
    }

    modules () {
        return {};
    }
}
