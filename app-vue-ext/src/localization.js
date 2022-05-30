import Localization from "#vue/localization";

class Local extends Localization {

    // protected
    async _loadLocale ( locale ) {
        return import( "#resources/locales/" + locale );
    }
}

await Local.new();
