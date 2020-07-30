# SETUP DEVELOPMENT ENVIRONMENT

1. Clone templates and use `app-vue` subdirectory as template for the new project:

    ```
    git clone https://bitbucket.org/softvisio/templates.git
    ```

    - Remove trailing "\_\_" from the `package.json__` and `.gitignore__` files.

    - Set package `name` in `package.json`.

    - Edit `.env` and `.env.development` files, set `VUE_APP_TITLE` and `VUE_APP_API_URL` variables.

2. Install `@softvisio/cli` globally:

    ```
    npm i -g @softvisio/cli
    ```

3. Install git pre-commit hook locally for the new project. Git pre-commit hook will lint all changed files on commit. If linter will report errors - commit will be rejected, all found errors will be added to the end of the files as comments.

    Run following command from the new project root folder:

    ```
    softvisio-cli git install-hooks --local
    ```

# CODE REQUIREMENTS

-   Command `softvisio-cli lint` should not report errors.

-   Commands `npm run serve` and `npm run build` should build project without errors.

-   All dependencies should be added as **development** dependencies.

# API

API class instance is accessible from the views and the stores objects as `this.$api` property. Example:

```
const res = await this.$api.call( "method/name", param1, param2, ... );

// request is successful
if ( res.ok ) {
    // res.data contains response data
}

// request failed
else {
    // res.status, res.reason contains response status code and error message
}
```

For particular project API refer to the project backend documentation.

# VUEX STORE

`Vuex` store instance is accesible from the views methods as `this.$store` property. Example:

```
var res = await this.$store.dispatch( "session/signout" );
```

## API SESSION STORE

This project template provides `session` store that implements interface to the API session.

### GETTERS

-   isAuthenticated - `boolean`, session is authenticated.

    ```
    const isAuthenticated = this.$store.getters["session/isAuthenticated"]
    ```

-   userId - `null` or `number`. If session is authenticated - returns authenticated user id.

    ```
    const userId = this.$store.getters["session/userId"]
    ```

-   username - `null` or `string`. If session is authenticated - returns authenticated user name.

    ```
    const username = this.$store.getters["session/username"]
    ```

-   avatar - `null` or `string`. If session is authenticated - returns authenticated user avatar url.

    ```
    const avatarUrl = this.$store.getters["session/avatar"]
    ```

-   hasPermissions( permissions ) - `boolean`. Checks, if current user has permissions. `permisisons` argument is `Array` of `strings`. Returns `true` if user has one of enumerated permissions.

    ```
    const userIsAdmin = this.$store.getters["session/hasPermissions", ["admin"]]
    ```

### MUTATIONS

### ACTIONS
