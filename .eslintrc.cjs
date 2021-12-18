module.exports = {
    root: true,
    ignorePatterns: ["node_modules", "dist", "e2e", "*.d.ts", "gulpfile.js"],
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        "eol-last": ["warn", "always"],
        "no-trailing-spaces": "warn",
        "no-multi-spaces": "warn",
        eqeqeq: ["warn", "smart"],
        indent: ["warn", 4, {
            SwitchCase: 1,
            VariableDeclarator: "first",
            FunctionExpression: {parameters: "first"},
            FunctionDeclaration: {parameters: "first"},
            ImportDeclaration: 1
        }],
        semi: ["warn", "always"],
        quotes: ["warn", "double", {"allowTemplateLiterals": true}],
        "comma-spacing": ["warn", {"before": false, "after": true}],
        "no-multiple-empty-lines": "warn",
        "space-in-parens": ["warn", "never"],
        "object-curly-spacing": ["warn", "never"],
        "computed-property-spacing": ["warn", "never"],
        "array-bracket-spacing": ["warn", "never"],
        // "func-call-spacing": ["warn", "never"],
        "arrow-spacing": "warn",
        "space-before-function-paren": ["warn", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        "keyword-spacing": "warn"
    },
    overrides: [
        {
            files: ["*.js"],
            parserOptions: {
                ecmaVersion: 8,
                sourceType: "module"
            },
            rules: {
                "spaced-comment": ["warn", "always"],
            }
        },
        {
            files: ["*.ts"],
            parserOptions: {
                project: [
                    "service-portal/tsconfig.json",
                    "service-portal/src/tsconfig.app.json",
                    "service-portal/src/tsconfig.spec.json",
                    "integration-test/tsconfig.json",
                ]
            },
            extends: [
                "plugin:@typescript-eslint/base",
                "plugin:@angular-eslint/base"
            ],
            rules: {
                "function-paren-newline": ["warn", "consistent"],
                "function-call-argument-newline": ["warn", "consistent"],
                "no-var": "error",
                "newline-per-chained-call": "warn",
                "yoda": ["warn", "never", {"exceptRange": true}],
                "no-lonely-if": "warn",
                "prefer-const": "warn",
                "spaced-comment": ["warn", "always"],
                "@typescript-eslint/no-useless-constructor": "warn",
            }
        },
        {
            plugins: ["@html-eslint"],
            files: ["*.html"],
            parser: "@html-eslint/parser",
            extends: [
                "plugin:@angular-eslint/template/base",
            ],
            rules: {
                "@html-eslint/no-obsolete-tags": "warn",
                "@html-eslint/quotes": ["warn", "double"],
                "@html-eslint/no-multiple-empty-lines": "warn",
            },
        },
    ],
};
