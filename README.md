<p align="center">
  <a href="#">
    <img alt="Material-Ui Theme Creator" src="/src/images/mui_theme_creator_logo.webp?raw=true" width="120" />
  </a>
</p>
<h1 align="center">
  Material-UI Theme Creator
  
</h1>
<h3 align="center">Supported MUI Version: ^5.0.0</h3>

Material-UI Theme Creator provides an interface to help create a [Material-UI](https://material-ui.com/) `ThemeOptions` object, which styles components in the library.

[Use the app here](https://zenoo.github.io/mui-theme-creator/)

## Features

The app has a few developer-friendly features:

- Site templates to preview the theme on
- A code editor with code completion and suggestions based off `ThemeOptions` type data
- Dynamic loading of Google Fonts
- Detailed snippets that take advantage of the `ThemeOptions.props` and `ThemeOptions.overrides` options

## Legacy

This tool can be used with MUI Version ^5.0.0. only, as v5 included changes to the `ThemeOptions` object.

To use this tool with MUI v4: [MUI Theme Creator v4](https://bareynol.github.io/mui-theme-creator/)
Instructions for migrating from v4 to v5: [MUI Migration to v5](https://mui.com/material-ui/guides/migration-v4/)

## Motivations

The purpose of this project is to help expose the power of the Material-UI Theme styling solution, specifically relating to setting default `props` for components and default styles through `overrides`.

By customizing default props and styles of components at the theme level, developers can easily tweak the look and feel of the app, and cut out the need for specifying common styling patterns within component code.

Future work on this project should be done with the goal of adding example previews that help accomplish this, useful snippets that take advantage of the Material-UI theme capabilities, and providing the user with better knowledge of the theme utilities in general.

_Have feature ideas, useful snippets, or bugs? Fantastic! Any help is appreciated, open an issue or submit a pull request!_

## 🚀 Quick start

```shell
yarn install
yarn start # or use gatsby develop
```

## Acknowledgements

This project is forked from [MUI Theme Creator v4](https://bareynol.github.io/mui-theme-creator/) by [@bareynol](https://github.com/bareynol).
