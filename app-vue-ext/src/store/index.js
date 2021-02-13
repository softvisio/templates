import Store from "#softvisio/store";
import SettingsStore from "./settings";

// import CONST from "@/const";

export default class extends Store {
    settings = SettingsStore;
}
