import Store from "#softvisio/store/main";
import SettingsStore from "./settings";

// import CONST from "@/const";

export default class extends Store {
    settings = SettingsStore;
}
