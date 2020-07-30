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

API class instance is accessible from views and stores as `this.$api` property. Example:

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
