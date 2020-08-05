# Explanation of `muiTypeStrings`

The theme creator uses a third party code editor package, [Monaco](https://microsoft.github.io/monaco-editor/), the code editor that powers [VS Code](https://code.visualstudio.com/), and includes Intellisense

To help the user autofill and get context about the theme options, Intellisense can be given type data about the [Material-UI type `ThemeOptions`](https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/styles/createMuiTheme.d.ts).

However

The type data, as far as I can tell, cannot be loaded directly from `.d.ts` files. Two issues stand in the way:

1. The `.addExtraLib()` method on `monaco.languages.typescript.javascriptDefaults` (used to add the type data) only accepts strings with interface/type declarations, not files.
2. Converting the mui types directly into strings is difficult due to the need to traverse imports. (also of note, "export interface ..." is not valid, "export" needs to be stripped from files)

As such, the easier solution right now is just to manually construct a file with these type declarations, so if there are changes to the `ThemeOptions`, this will need to be updated accordingly.

Because of this, the monaco `compilerOptions` is set with the property `suppressExcessPropertyErrors: true`, so that it won't consider non defined properties as errors.

---

If anyone wants to submit a PR with a way to automate this process from the material-ui `.d.ts` files, you will are a **rockstar**.
