# SETUP DEVELOPMENT ENVIRONMENT

1. Clone templates and use `app-vue` subdirectory as template of the new project:

    ```
    git clone https://bitbucket.org/softvisio/templates.git
    ```

2. Install `@softvisio/cli` globally:

    ```
    npm i -g @softvisio/cli
    ```

3. Install git pre-commit hook locally for the new project. Git pre-commit hook will lint all changed files on commit. If linter will report errors - commit will be rejected, all found errors will be added to the end of file as comments. Run following command from the new project root folder:

    ```
    softvisio-cli git install-hooks --local
    ```

# CODE REQUIREMENTS

-   Command `softvisio-cli lint` should not report errors.

-   Commands `npm run serve` and `npm run build` should build project without errors.

-   All dependencies should be added as development dependencies.
