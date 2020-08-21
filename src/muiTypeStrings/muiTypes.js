// @ts-nocheck
/* eslint-disable */
import muiComponentPropTypes from "./muiComponentPropTypes"
import muiComponentOverrideTypes from "./muiComponentOverrideTypes"
export const content = `
import * as CSS from "cssTypes"
${muiComponentPropTypes}

export type SpacingArgument = number | string

export interface Spacing {
  (): number
  (value: number): number
  (topBottom: SpacingArgument, rightLeft: SpacingArgument): string
  (
    top: SpacingArgument,
    rightLeft: SpacingArgument,
    bottom: SpacingArgument
  ): string
  (
    top: SpacingArgument,
    right: SpacingArgument,
    bottom: SpacingArgument,
    left: SpacingArgument
  ): string
}

export type SpacingOptions =
  | number
  | ((factor: number) => string | number)
  | number[]

export type JSSFontface = CSS.FontFace & { fallbacks?: CSS.FontFace[] }

export interface BaseCSSProperties extends CSS.Properties<number | string> {
  "@font-face"?: JSSFontface | JSSFontface[]
}

export interface CSSProperties extends BaseCSSProperties {
  // Allow pseudo selectors and media queries
  // \`unknown\` is used since TS does not allow assigning an interface without
  // an index signature to one with an index signature. This is to allow type safe
  // module augmentation.
  // Technically we want any key not typed in \`BaseCSSProperties\` to be of type
  // \`CSSProperties\` but this doesn't work. The index signature needs to cover
  // BaseCSSProperties as well. Usually you would use \`BaseCSSProperties[keyof BaseCSSProperties]\`
  // but this would not allow assigning React.CSSProperties to CSSProperties
  [k: string]: unknown | CSSProperties
}

export interface Mixins {
  gutters: (styles?: CSSProperties) => CSSProperties
  toolbar: CSSProperties
  // ... use interface declaration merging to add custom mixins
}

export interface MixinsOptions extends Partial<Mixins> {
  // ... use interface declaration merging to add custom mixin options
}

export type Breakpoint = Record<"xs" | "sm" | "md" | "lg" | "xl", true>
export type BreakpointValues = { [key in Breakpoint]: number }

export interface Breakpoints {
  keys: Breakpoint[]
  values: BreakpointValues
  up: (key: Breakpoint | number) => string
  down: (key: Breakpoint | number) => string
  between: (start: Breakpoint | number, end: Breakpoint | number) => string
  only: (key: Breakpoint) => string
  width: (key: Breakpoint) => number
}

export type BreakpointsOptions = Partial<
  {
    unit: string
    step: number
  } & Breakpoints
>

export type PaletteType = "light" | "dark"
export interface Color {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  A100: string
  A200: string
  A400: string
  A700: string
}
// use standalone interface over typeof colors/commons
// to enable module augmentation
export interface CommonColors {
  black: string
  white: string
}

export type ColorPartial = Partial<Color>

export interface TypeText {
  primary: string
  secondary: string
  disabled: string
  hint: string
}

export interface TypeAction {
  active: string
  hover: string
  hoverOpacity: number
  selected: string
  selectedOpacity: number
  disabled: string
  disabledOpacity: number
  disabledBackground: string
  focus: string
  focusOpacity: number
  activatedOpacity: number
}

export interface TypeBackground {
  default: string
  paper: string
}

export type TypeDivider = string

export type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial

export interface SimplePaletteColorOptions {
  light?: string
  main: string
  dark?: string
  contrastText?: string
}

export interface PaletteColor {
  light: string
  main: string
  dark: string
  contrastText: string
}

export interface TypeObject {
  text: TypeText
  action: TypeAction
  divider: TypeDivider
  background: TypeBackground
}

export type PaletteTonalOffset =
  | number
  | {
      light: number
      dark: number
    }

export interface Palette {
  common: CommonColors
  type: PaletteType
  contrastThreshold: number
  tonalOffset: PaletteTonalOffset
  primary: PaletteColor
  secondary: PaletteColor
  error: PaletteColor
  warning: PaletteColor
  info: PaletteColor
  success: PaletteColor
  grey: Color
  text: TypeText
  divider: TypeDivider
  action: TypeAction
  background: TypeBackground
  getContrastText: (background: string) => string
  augmentColor: {
    (
      color: ColorPartial,
      mainShade?: number | string,
      lightShade?: number | string,
      darkShade?: number | string
    ): PaletteColor
    (color: PaletteColorOptions): PaletteColor
  }
}

export type PartialTypeObject = {
  [P in keyof TypeObject]?: Partial<TypeObject[P]>
}

export interface PaletteOptions {
  primary?: PaletteColorOptions
  secondary?: PaletteColorOptions
  error?: PaletteColorOptions
  warning?: PaletteColorOptions
  info?: PaletteColorOptions
  success?: PaletteColorOptions
  type?: PaletteType
  tonalOffset?: PaletteTonalOffset
  contrastThreshold?: number
  common?: Partial<CommonColors>
  grey?: ColorPartial
  text?: Partial<TypeText>
  divider?: string
  action?: Partial<TypeAction>
  background?: Partial<TypeBackground>
  getContrastText?: (background: string) => string
}

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"

export interface FontStyle
  extends Required<{
    fontFamily: CSSProperties["fontFamily"]
    fontSize: number
    fontWeightLight: CSSProperties["fontWeight"]
    fontWeightRegular: CSSProperties["fontWeight"]
    fontWeightMedium: CSSProperties["fontWeight"]
    fontWeightBold: CSSProperties["fontWeight"]
  }> {}

export interface FontStyleOptions extends Partial<FontStyle> {
  htmlFontSize?: number
  allVariants?: CSSProperties
}

export type TypographyStyle = CSSProperties
export interface TypographyStyleOptions extends TypographyStyle {}

export interface TypographyOptions
  extends Partial<Record<Variant, TypographyStyleOptions> & FontStyleOptions> {}

export type Shadows = [
  "none",
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

export interface Shape {
  borderRadius: number
}

export type ShapeOptions = Partial<Shape>

export interface Easing {
  easeInOut: string
  easeOut: string
  easeIn: string
  sharp: string
}

export interface Duration {
  shortest: number
  shorter: number
  short: number
  standard: number
  complex: number
  enteringScreen: number
  leavingScreen: number
}

export interface Transitions {
  easing: Easing
  duration: Duration
  create(
    props: string | string[],
    options?: Partial<{
      duration: number | string
      easing: string
      delay: number | string
    }>
  ): string
  getAutoHeightDuration(height: number): number
}

export interface TransitionsOptions {
  easing?: Partial<Easing>
  duration?: Partial<Duration>
  create?: (
    props: string | string[],
    options?: Partial<{
      duration: number | string
      easing: string
      delay: number | string
    }>
  ) => string
  getAutoHeightDuration?: (height: number) => number
}

export interface ZIndex {
  mobileStepper: number
  speedDial: number
  appBar: number
  drawer: number
  modal: number
  snackbar: number
  tooltip: number
}

export type ZIndexOptions = Partial<ZIndex>

export type Direction = "ltr" | "rtl"

${muiComponentOverrideTypes}

export interface ThemeOptions {
  shape?: ShapeOptions
  breakpoints?: BreakpointsOptions
  direction?: Direction
  mixins?: MixinsOptions
  overrides?: Overrides // don't want to deal with these imports
  palette?: PaletteOptions
  props?: MuiComponentProps
  shadows?: Shadows
  spacing?: SpacingOptions
  transitions?: TransitionsOptions
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions)
  zIndex?: ZIndexOptions
  unstable_strictMode?: boolean
}

export interface Theme {
  shape: Shape;
  breakpoints: Breakpoints;
  direction: Direction;
  mixins: Mixins;
  overrides?: Overrides;
  palette: Palette;
  props?: ComponentsProps;
  shadows: Shadows;
  spacing: Spacing;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
  unstable_strictMode?: boolean;
}

export function createMuiTheme(options?: ThemeOptions, ...args: object[]): Theme;
`
