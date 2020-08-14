export default `
export interface MuiComponentProps {
  /** allow props of any type to be specified to avoid errors from this file being stale */
  [x: string]: any
  /**
   *
   * Demos:
   *
   * - [Accordion](https://material-ui.com/components/accordion/)
   *
   * API:
   *
   * - [Accordion API](https://material-ui.com/api/accordion/)
   * - inherits [Paper API](https://material-ui.com/api/paper/)
   */
  MuiAccordion?: {
    /**
     * If true, expands the accordion by default.
     */
    defaultExpanded?: boolean
    /**
     * If true, the accordion will be displayed in a disabled state.
     */
    disabled?: boolean
    square?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Accordion](https://material-ui.com/components/accordion/)
   *
   * API:
   *
   * - [AccordionActions API](https://material-ui.com/api/accordion-actions/)
   */
  MuiAccordionActions?: {
    /**
     * If true, the actions do not have additional margin.
     */
    disableSpacing?: boolean
  }
  MuiAlert?: {
    closeText?: string
    role?: string
    severity?: "error" | "info" | "success" | "warning"
    variant?: "filled" | "outlined" | "standard"
  }
  /**
   *
   * Demos:
   *
   * - [App Bar](https://material-ui.com/components/app-bar/)
   *
   * API:
   *
   * - [AppBar API](https://material-ui.com/api/app-bar/)
   * - inherits [Paper API](https://material-ui.com/api/paper/)
   */
  MuiAppBar?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "default" | "inherit" | "primary" | "secondary" | "transparent"
    /**
     * The positioning type. The behavior of the different options is described
     * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
     * Note: sticky is not universally supported and will fall back to static when unavailable.
     */
    position?: "absolute" | "fixed" | "relative" | "static" | "sticky"
  }
  MuiAutocomplete?: {
    freeSolo?: boolean
    fullWidth?: boolean
    size?: "medium" | "small"
  }
  /**
   *
   * Demos:
   *
   * - [Avatars](https://material-ui.com/components/avatars/)
   *
   * API:
   *
   * - [Avatar API](https://material-ui.com/api/avatar/)
   */
  MuiAvatar?: {
    /**
     * The shape of the avatar.
     */
    variant?: "circle" | "rounded" | "square"
  }
  MuiAvatarGroup?: {
    max?: number
    spacing?: "medium" | "small" | number
  }
  /**
   *
   * Demos:
   *
   * - [Backdrop](https://material-ui.com/components/backdrop/)
   *
   * API:
   *
   * - [Backdrop API](https://material-ui.com/api/backdrop/)
   * - inherits [Fade API](https://material-ui.com/api/fade/)
   */
  MuiBackdrop?: {
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration?:
      | number
      | { appear?: number; enter?: number; exit?: number }
  }
  /**
   *
   * Demos:
   *
   * - [Avatars](https://material-ui.com/components/avatars/)
   * - [Badges](https://material-ui.com/components/badges/)
   *
   * API:
   *
   * - [Badge API](https://material-ui.com/api/badge/)
   */
  MuiBadge?: {
    /**
     * The anchor of the badge.
     */
    anchorOrigin?: {
      horizontal: "left" | "right"
      vertical: "bottom" | "top"
    }
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary" | "default" | "error"
    component?: "string"
    /**
     * Max count to show.
     */
    max?: number
    /**
     * Wrapped shape the badge should overlap.
     */
    overlap?: "rectangle" | "circle"
    /**
     * Controls whether the badge is hidden when badgeContent is zero.
     */
    showZero?: boolean
    /**
     * The variant to use.
     */
    variant?: "standard" | "dot"
  }
  /**
   *
   * Demos:
   *
   * - [Bottom Navigation](https://material-ui.com/components/bottom-navigation/)
   *
   * API:
   *
   * - [BottomNavigation API](https://material-ui.com/api/bottom-navigation/)
   */
  MuiBottomNavigation?: {
    /**
     * If true, all BottomNavigationActions will show their labels.
     * By default, only the selected BottomNavigationAction will show its label.
     */
    showLabels?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Breadcrumbs](https://material-ui.com/components/breadcrumbs/)
   *
   * API:
   *
   * - [Breadcrumbs API](https://material-ui.com/api/breadcrumbs/)
   */
  MuiBreadcrumbs?: {
    /**
     * Override the default label for the expand button.
     *
     * For localization purposes, you can use the provided [translations](/guides/localization/).
     */
    expandText?: string
    /**
     * If max items is exceeded, the number of items to show after the ellipsis.
     */
    itemsAfterCollapse?: number
    /**
     * If max items is exceeded, the number of items to show before the ellipsis.
     */
    itemsBeforeCollapse?: number
    /**
     * Specifies the maximum number of breadcrumbs to display. When there are more
     * than the maximum number, only the first itemsBeforeCollapse and last itemsAfterCollapse
     * will be shown, with an ellipsis in between.
     */
    maxItems?: number
  }
  /**
   *
   * Demos:
   *
   * - [Button Group](https://material-ui.com/components/button-group/)
   * - [Buttons](https://material-ui.com/components/buttons/)
   *
   * API:
   *
   * - [Button API](https://material-ui.com/api/button/)
   * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
   */
  MuiButton?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "default" | "inherit" | "primary" | "secondary"
    /**
     * If true, no elevation is used.
     */
    disableElevation?: boolean
    /**
     * If true, the  keyboard focus ripple will be disabled.
     */
    disableFocusRipple?: boolean
    /**
     * If true, the button will take up the full width of its container.
     */
    fullWidth?: boolean
    /**
     * The size of the button.
     * small is equivalent to the dense button styling.
     */
    size?: "small" | "medium" | "large"
    /**
     * The variant to use.
     */
    variant?: "text" | "outlined" | "contained"
  }
  /**
   * ButtonBase contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   * Demos:
   *
   * - [Buttons](https://material-ui.com/components/buttons/)
   *
   * API:
   *
   * - [ButtonBase API](https://material-ui.com/api/button-base/)
   */
  MuiButtonBase?: {
    /**
     * If true, the ripples will be centered.
     * They won't start at the cursor interaction position.
     */
    centerRipple?: boolean
    /**
     * If true, the ripple effect will be disabled.
     *
     * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
     * to highlight the element by applying separate styles with the focusVisibleClassName.
     */
    disableRipple?: boolean
    /**
     * If true, the touch ripple effect will be disabled.
     */
    disableTouchRipple?: boolean
    /**
     * If true, the base button will have a keyboard focus ripple.
     */
    focusRipple?: boolean
    /**
     * This prop can help a person know which element has the keyboard focus.
     * The class name will be applied when the element gain the focus through a keyboard interaction.
     * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
     * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
     * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a focus-visible class to other components
     * if needed.
     */
    focusVisibleClassName?: string
  }
  /**
   *
   * Demos:
   *
   * - [Button Group](https://material-ui.com/components/button-group/)
   *
   * API:
   *
   * - [ButtonGroup API](https://material-ui.com/api/button-group/)
   */
  MuiButtonGroup?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "default" | "inherit" | "primary" | "secondary"
    /**
     * If true, no elevation is used.
     */
    disableElevation?: boolean
    /**
     * If true, the button keyboard focus ripple will be disabled.
     */
    disableFocusRipple?: boolean
    /**
     * If true, the button ripple effect will be disabled.
     */
    disableRipple?: boolean
    /**
     * If true, the buttons will take up the full width of its container.
     */
    fullWidth?: boolean
    /**
     * The group orientation (layout flow direction).
     */
    orientation?: "vertical" | "horizontal"
    /**
     * The size of the button.
     * small is equivalent to the dense button styling.
     */
    size?: "small" | "medium" | "large"
    /**
     * The variant to use.
     */
    variant?: "text" | "outlined" | "contained"
  }
  /**
   *
   * Demos:
   *
   * - [Cards](https://material-ui.com/components/cards/)
   *
   * API:
   *
   * - [Card API](https://material-ui.com/api/card/)
   * - inherits [Paper API](https://material-ui.com/api/paper/)
   */
  MuiCard?: {
    /**
     * If true, the card will use raised styling.
     */
    raised?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Cards](https://material-ui.com/components/cards/)
   *
   * API:
   *
   * - [CardActions API](https://material-ui.com/api/card-actions/)
   */
  MuiCardActions?: {
    /**
     * If true, the actions do not have additional margin.
     */
    disableSpacing?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Checkboxes](https://material-ui.com/components/checkboxes/)
   * - [Transfer List](https://material-ui.com/components/transfer-list/)
   *
   * API:
   *
   * - [Checkbox API](https://material-ui.com/api/checkbox/)
   * - inherits [IconButton API](https://material-ui.com/api/icon-button/)
   */
  MuiCheckbox?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary" | "default"
    /**
     * If true, the ripple effect will be disabled.
     */
    disableRipple?: boolean
    /**
     * The size of the checkbox.
     * small is equivalent to the dense checkbox styling.
     */
    size?: "small" | "medium"
  }
  /**
   * Chips represent complex entities in small blocks, such as a contact.
   * Demos:
   *
   * - [Chips](https://material-ui.com/components/chips/)
   *
   * API:
   *
   * - [Chip API](https://material-ui.com/api/chip/)
   */
  MuiChip?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "default" | "primary" | "secondary"
    /**
     * The size of the chip.
     */
    size?: "small" | "medium"
    /**
     * The variant to use.
     */
    variant?: "default" | "outlined"
  }
  /**
   * ## ARIA
   *
   * If the progress bar is describing the loading progress of a particular region of a page,
   * you should use aria-describedby to point to the progress bar, and set the aria-busy
   * attribute to true on that region until it has finished loading.
   * Demos:
   *
   * - [Progress](https://material-ui.com/components/progress/)
   *
   * API:
   *
   * - [CircularProgress API](https://material-ui.com/api/circular-progress/)
   */
  MuiCircularProgress?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary" | "inherit"
    /**
     * If true, the shrink animation is disabled.
     * This only works if variant is indeterminate.
     */
    disableShrink?: boolean
    /**
     * The size of the circle.
     * If using a number, the pixel unit is assumed.
     * If using a string, you need to provide the CSS unit, e.g '3rem'.
     */
    size?: number | string
    /**
     * The thickness of the circle.
     */
    thickness?: number
    /**
     * The variant to use.
     * Use indeterminate when there is no progress value.
     */
    variant?: "determinate" | "indeterminate" | "static"
  }
  /**
   * The Collapse transition is used by the
   * [Vertical Stepper](https://material-ui.com/components/steppers/#vertical-stepper) StepContent component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   * Demos:
   *
   * - [Cards](https://material-ui.com/components/cards/)
   * - [Lists](https://material-ui.com/components/lists/)
   * - [Transitions](https://material-ui.com/components/transitions/)
   *
   * API:
   *
   * - [Collapse API](https://material-ui.com/api/collapse/)
   * - inherits [Transition API](https://reactcommunity.org/react-transition-group/transition#Transition-props)
   */
  MuiCollapse?: {
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    timeout?:
      | "auto"
      | number
      | { appear?: number; enter?: number; exit?: number }
  }
  /**
   *
   * Demos:
   *
   * - [Container](https://material-ui.com/components/container/)
   *
   * API:
   *
   * - [Container API](https://material-ui.com/api/container/)
   */
  MuiContainer?: {
    /**
     * If true, the left and right padding is removed.
     */
    disableGutters?: boolean
    /**
     * Set the max-width to match the min-width of the current breakpoint.
     * This is useful if you'd prefer to design for a fixed set of sizes
     * instead of trying to accommodate a fully fluid viewport.
     * It's fluid by default.
     */
    fixed?: boolean
    /**
     * Determine the max-width of the container.
     * The container width grows with the size of the screen.
     * Set to false to disable maxWidth.
     */
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false
  }
  /**
   * Dialogs are overlaid modal paper based components with a backdrop.
   * Demos:
   *
   * - [Dialogs](https://material-ui.com/components/dialogs/)
   *
   * API:
   *
   * - [Dialog API](https://material-ui.com/api/dialog/)
   * - inherits [Modal API](https://material-ui.com/api/modal/)
   */
  MuiDialog?: {
    /**
     * If true, clicking the backdrop will not fire the onClose callback.
     */
    disableBackdropClick?: boolean
    /**
     * If true, hitting escape will not fire the onClose callback.
     */
    disableEscapeKeyDown?: boolean
    /**
     * If true, the dialog will be full-screen
     */
    fullScreen?: boolean
    /**
     * If true, the dialog stretches to maxWidth.
     *
     * Notice that the dialog width grow is limited by the default margin.
     */
    fullWidth?: boolean
    /**
     * Determine the max-width of the dialog.
     * The dialog width grows with the size of the screen.
     * Set to false to disable maxWidth.
     */
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration?:
      | number
      | { appear?: number; enter?: number; exit?: number }
  }
  /**
   *
   * Demos:
   *
   * - [Dialogs](https://material-ui.com/components/dialogs/)
   *
   * API:
   *
   * - [DialogActions API](https://material-ui.com/api/dialog-actions/)
   */
  MuiDialogActions?: {
    /**
     * If true, the actions do not have additional margin.
     */
    disableSpacing?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Dialogs](https://material-ui.com/components/dialogs/)
   *
   * API:
   *
   * - [DialogContent API](https://material-ui.com/api/dialog-content/)
   */
  MuiDialogContent?: {
    /**
     * Display the top and bottom dividers.
     */
    dividers?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Dialogs](https://material-ui.com/components/dialogs/)
   *
   * API:
   *
   * - [DialogTitle API](https://material-ui.com/api/dialog-title/)
   */
  MuiDialogTitle?: {
    /**
     * If true, the children won't be wrapped by a typography component.
     * For instance, this can be useful to render an h4 instead of the default h2.
     */
    disableTypography?: boolean
  }
  /**
   * The props of the [Modal](https://material-ui.com/api/modal/) component are available
   * when variant="temporary" is set.
   * Demos:
   *
   * - [Drawers](https://material-ui.com/components/drawers/)
   *
   * API:
   *
   * - [Drawer API](https://material-ui.com/api/drawer/)
   */
  MuiDrawer?: {
    /**
     * Side from which the drawer will appear.
     */
    anchor?: "left" | "top" | "right" | "bottom"
    /**
     * The elevation of the drawer.
     */
    elevation?: number
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration?:
      | number
      | { appear?: number; enter?: number; exit?: number }
    /**
     * The variant to use.
     */
    variant?: "permanent" | "persistent" | "temporary"
  }
  /**
   *
   * Demos:
   *
   * - [Floating Action Button](https://material-ui.com/components/floating-action-button/)
   *
   * API:
   *
   * - [Fab API](https://material-ui.com/api/fab/)
   * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
   */
  MuiFab?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "default" | "inherit" | "primary" | "secondary"
    /**
     * If true, the  keyboard focus ripple will be disabled.
     */
    disableFocusRipple?: boolean
    /**
     * If true, the ripple effect will be disabled.
     */
    disableRipple?: boolean
    /**
     * The size of the button.
     * small is equivalent to the dense button styling.
     */
    size?: "small" | "medium" | "large"
    /**
     * The variant to use.
     */
    variant?: "round" | "extended"
  }
  /**
   * The Fade transition is used by the [Modal](https://material-ui.com/components/modal/) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   * Demos:
   *
   * - [Transitions](https://material-ui.com/components/transitions/)
   *
   * API:
   *
   * - [Fade API](https://material-ui.com/api/fade/)
   * - inherits [Transition API](https://reactcommunity.org/react-transition-group/transition#Transition-props)
   */
  MuiFade?: {
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    timeout?: number | { appear?: number; enter?: number; exit?: number }
  }
  /**
   *
   * Demos:
   *
   * - [Text Fields](https://material-ui.com/components/text-fields/)
   *
   * API:
   *
   * - [FilledInput API](https://material-ui.com/api/filled-input/)
   * - inherits [InputBase API](https://material-ui.com/api/input-base/)
   */
  MuiFilledInput?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary"
    /**
     * If true, the input will not have an underline.
     */
    disableUnderline?: boolean
    /**
     * If true, the dialog stretches to maxWidth.
     *
     * Notice that the dialog width grow is limited by the default margin.
     */
    fullWidth?: boolean
  }
  /**
   * Provides context such as filled/focused/error/required for form inputs.
   * Relying on the context provides high flexibility and ensures that the state always stays
   * consistent across the children of the FormControl.
   * This context is used by the following components:
   *
   * -   FormLabel
   * -   FormHelperText
   * -   Input
   * -   InputLabel
   *
   * You can find one composition example below and more going to [the demos](https://material-ui.com/components/text-fields/#components).
   *
   * \`\`\`jsx
   * <FormControl>
   *   <InputLabel htmlFor="my-input">Email address</InputLabel>
   *   <Input id="my-input" aria-describedby="my-helper-text" />
   *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
   * </FormControl>
   * \`\`\`
   *
   * ⚠️Only one input can be used within a FormControl.
   * Demos:
   *
   * - [Checkboxes](https://material-ui.com/components/checkboxes/)
   * - [Radio Buttons](https://material-ui.com/components/radio-buttons/)
   * - [Switches](https://material-ui.com/components/switches/)
   * - [Text Fields](https://material-ui.com/components/text-fields/)
   *
   * API:
   *
   * - [FormControl API](https://material-ui.com/api/form-control/)
   */
  MuiFormControl?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary"
    /**
     * If true, the component will take up the full width of its container.
     */
    fullWidth?: boolean
    /**
     * If dense or normal, will adjust vertical spacing of this and contained components.
     */
    margin?: "dense" | "none" | "normal"
    /**
     * The size of the text field.
     */
    size?: "small" | "medium"
    /**
     * The variant to use.
     */
    variant?: "standard" | "outlined" | "filled"
  }
  /**
   * Drop in replacement of the Radio, Switch and Checkbox component.
   * Use this component if you want to display an extra label.
   * Demos:
   *
   * - [Checkboxes](https://material-ui.com/components/checkboxes/)
   * - [Radio Buttons](https://material-ui.com/components/radio-buttons/)
   * - [Switches](https://material-ui.com/components/switches/)
   *
   * API:
   *
   * - [FormControlLabel API](https://material-ui.com/api/form-control-label/)
   */
  MuiFormControlLabel?: {
    /**
     * The position of the label.
     */
    labelPlacement?: "end" | "start" | "top" | "bottom"
  }
  /**
   *
   * Demos:
   *
   * - [Text Fields](https://material-ui.com/components/text-fields/)
   *
   * API:
   *
   * - [FormHelperText API](https://material-ui.com/api/form-helper-text/)
   */
  MuiFormHelperText?: {
    /**
     * If dense, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin?: "dense"
    /**
     * The variant to use.
     */
    variant?: "standard" | "outlined" | "filled"
  }
  /**
   *
   * Demos:
   *
   * - [Checkboxes](https://material-ui.com/components/checkboxes/)
   * - [Radio Buttons](https://material-ui.com/components/radio-buttons/)
   * - [Switches](https://material-ui.com/components/switches/)
   *
   * API:
   *
   * - [FormLabel API](https://material-ui.com/api/form-label/)
   */
  MuiFormLabel?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary"
  }
  /**
   *
   * Demos:
   *
   * - [Grid](https://material-ui.com/components/grid/)
   *
   * API:
   *
   * - [Grid API](https://material-ui.com/api/grid/)
   */
  MuiGrid?: {
    /**
     * Defines the align-content style property. It's applied for all screen sizes.
     */
    alignContent?:
      | "stretch"
      | "center"
      | "flex-start"
      | "flex-end"
      | "space-between"
      | "space-around"
    /**
     * Defines the align-items style property. It's applied for all screen sizes.
     */
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline"
    /**
     * Defines the flex-direction style property. It is applied for all screen sizes.
     */
    direction?: "row" | "row-reverse" | "column" | "column-reverse"
    /**
     * Defines the justify-content style property. It is applied for all screen sizes.
     */
    justify?:
      | "flex-start"
      | "center"
      | "flex-end"
      | "space-between"
      | "space-around"
      | "space-evenly"
    /**
     * Defines the flex-wrap style property. It's applied for all screen sizes.
     */
    wrap?: "nowrap" | "wrap" | "wrap-reverse"
  }
  /**
   *
   * Demos:
   *
   * - [Grid List](https://material-ui.com/components/grid-list/)
   *
   * API:
   *
   * - [GridList API](https://material-ui.com/api/grid-list/)
   */
  MuiGridList?: {
    /**
     * Number of px for one cell height. You can set 'auto' if you want to let the children determine the height.
     */
    cellHeight?: number | "auto"
    /**
     * Number of columns.
     */
    cols?: number
    /**
     * Number of px for the spacing between tiles.
     */
    spacing?: number
  }
  /**
   *
   * Demos:
   *
   * - [Grid List](https://material-ui.com/components/grid-list/)
   *
   * API:
   *
   * - [GridListTile API](https://material-ui.com/api/grid-list-tile/)
   */
  MuiGridListTile?: {
    /**
     * Width of the tile in number of grid cells.
     */
    cols?: number
    /**
     * Height of the tile in number of grid cells.
     */
    rows?: number
  }
  /**
   *
   * Demos:
   *
   * - [Grid List](https://material-ui.com/components/grid-list/)
   *
   * API:
   *
   * - [GridListTileBar API](https://material-ui.com/api/grid-list-tile-bar/)
   */
  MuiGridListTileBar?: {
    /**
     * Position of secondary action IconButton.
     */
    actionPosition?: "left" | "right"
    /**
     * Position of the title bar.
     */
    titlePosition?: "top" | "bottom"
  }
  /**
   * The Grow transition is used by the [Tooltip](https://material-ui.com/components/tooltips/) and
   * [Popover](https://material-ui.com/components/popover/) components.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   * Demos:
   *
   * - [Popover](https://material-ui.com/components/popover/)
   * - [Transitions](https://material-ui.com/components/transitions/)
   *
   * API:
   *
   * - [Grow API](https://material-ui.com/api/grow/)
   * - inherits [Transition API](https://reactcommunity.org/react-transition-group/transition#Transition-props)
   */
  MuiGrow?: {
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    timeout?:
      | "auto"
      | number
      | { appear?: number; enter?: number; exit?: number }
  }
  /**
   *
   * Demos:
   *
   * - [Icons](https://material-ui.com/components/icons/)
   * - [Material Icons](https://material-ui.com/components/material-icons/)
   *
   * API:
   *
   * - [Icon API](https://material-ui.com/api/icon/)
   */
  MuiIcon?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?:
      | "inherit"
      | "primary"
      | "secondary"
      | "action"
      | "error"
      | "disabled"
    /**
     * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
     */
    fontSize?: "inherit" | "default" | "small" | "large"
  }
  /**
   * Refer to the [Icons](https://material-ui.com/components/icons/) section of the documentation
   * regarding the available icon options.
   * Demos:
   *
   * - [Buttons](https://material-ui.com/components/buttons/)
   * - [Grid List](https://material-ui.com/components/grid-list/)
   *
   * API:
   *
   * - [IconButton API](https://material-ui.com/api/icon-button/)
   * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
   */
  MuiIconButton?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "default" | "inherit" | "primary" | "secondary"
    /**
     * If true, the keyboard focus ripple will be disabled.
     */
    disableFocusRipple?: boolean
    /**
     * If given, uses a negative margin to counteract the padding on one
     * side (this is often helpful for aligning the left or right
     * side of the icon with content above or below, without ruining the border
     * size and shape).
     */
    edge?: "start" | "end" | false
    /**
     * The size of the button. small is equivalent to the dense button styling.
     */
    size?: "small" | "medium"
  }
  /**
   *
   * Demos:
   *
   * - [Text Fields](https://material-ui.com/components/text-fields/)
   *
   * API:
   *
   * - [Input API](https://material-ui.com/api/input/)
   * - inherits [InputBase API](https://material-ui.com/api/input-base/)
   */
  MuiInput?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary"
    /**
     * If true, the input will take up the full width of its container.
     */
    fullWidth?: boolean
    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax?: number | string
  }
  /**
   *
   * Demos:
   *
   * - [Text Fields](https://material-ui.com/components/text-fields/)
   *
   * API:
   *
   * - [InputAdornment API](https://material-ui.com/api/input-adornment/)
   */
  MuiInputAdornment?: {
    /**
     * The variant to use. Note: If you are using the TextField component or the FormControl component you do not have to set this manually.
     */
    variant?: "standard" | "outlined" | "filled"
  }
  /**
   * InputBase contains as few styles as possible.
   * It aims to be a simple building block for creating an input.
   * It contains a load of style reset and some state logic.
   * Demos:
   *
   * - [Text Fields](https://material-ui.com/components/text-fields/)
   *
   * API:
   *
   * - [InputBase API](https://material-ui.com/api/input-base/)
   */
  MuiInputBase?: {
    /**
     * This prop helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
     */
    autoComplete?: string
    /**
     * If true, the input element will be focused during the first mount.
     */
    autoFocus?: boolean
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary"
    /**
     * If true, the input will take up the full width of its container.
     */
    fullWidth?: boolean
    /**
     * If dense, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin?: "dense" | "none"
    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows?: string | number
    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax?: string | number
    /**
     * Minimum number of rows to display when multiline option is set to true.
     */
    rowsMin?: string | number
  }
  /**
   *
   * Demos:
   *
   * - [Text Fields](https://material-ui.com/components/text-fields/)
   *
   * API:
   *
   * - [InputLabel API](https://material-ui.com/api/input-label/)
   * - inherits [FormLabel API](https://material-ui.com/api/form-label/)
   */
  MuiInputLabel?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary"
    /**
     * If true, the transition animation is disabled.
     */
    disableAnimation?: boolean
    /**
     * If dense, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin?: "dense"
    /**
     * If true, the label is shrunk.
     */
    shrink?: boolean
    /**
     * The variant to use.
     */
    variant?: "standard" | "outlined" | "filled"
  }
  /**
   * ## ARIA
   *
   * If the progress bar is describing the loading progress of a particular region of a page,
   * you should use aria-describedby to point to the progress bar, and set the aria-busy
   * attribute to true on that region until it has finished loading.
   * Demos:
   *
   * - [Progress](https://material-ui.com/components/progress/)
   *
   * API:
   *
   * - [LinearProgress API](https://material-ui.com/api/linear-progress/)
   */
  MuiLinearProgress?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary"
  }
  /**
   *
   * Demos:
   *
   * - [Breadcrumbs](https://material-ui.com/components/breadcrumbs/)
   * - [Links](https://material-ui.com/components/links/)
   *
   * API:
   *
   * - [Link API](https://material-ui.com/api/link/)
   * - inherits [Typography API](https://material-ui.com/api/typography/)
   */
  MuiLink?: {
    /**
     * The color of the link.
     */
    color?:
      | "initial"
      | "inherit"
      | "primary"
      | "secondary"
      | "textPrimary"
      | "textSecondary"
      | "error"
    /**
     * Controls when the link should have an underline
     */
    underline?: "none" | "hover" | "always"
  }
  /**
   *
   * Demos:
   *
   * - [Lists](https://material-ui.com/components/lists/)
   * - [Transfer List](https://material-ui.com/components/transfer-list/)
   *
   * API:
   *
   * - [List API](https://material-ui.com/api/list/)
   */
  MuiList?: {
    /**
     * If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. The prop is available to descendant components as the dense context.
     */
    dense?: boolean
    /**
     * If true, vertical padding will be removed from the list.
     */
    disablePadding?: boolean
  }
  /**
   * Uses an additional container component if ListItemSecondaryAction is the last child.
   * Demos:
   *
   * - [Lists](https://material-ui.com/components/lists/)
   * - [Transfer List](https://material-ui.com/components/transfer-list/)
   *
   * API:
   *
   * - [ListItem API](https://material-ui.com/api/list-item/)
   */
  MuiListItem?: {
    /**
     * Defines the align-items style property.
     */
    alignItems?: "flex-start" | "center"
    /**
     * If true, the list item will be a button (using ButtonBase). Props intended for ButtonBase can then be applied to ListItem.
     */
    button?: boolean
    /**
     * If true, compact vertical padding designed for keyboard and mouse input will be used.
     */
    dense?: boolean
    /**
     * If true, the left and right padding is removed.
     */
    disableGutters?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Lists](https://material-ui.com/components/lists/)
   *
   * API:
   *
   * - [ListItemText API](https://material-ui.com/api/list-item-text/)
   */
  MuiListItemText?: {
    /**
     * If true, the children won't be wrapped by a Typography component.
     * This can be useful to render an alternative Typography variant by wrapping
     * the children (or primary) text, and optional secondary text
     * with the Typography component.
     */
    disableTypography?: boolean
    /**
     * If true, the children will be indented.
     * This should be used if there is no left avatar or left icon.
     */
    inset?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Grid List](https://material-ui.com/components/grid-list/)
   * - [Lists](https://material-ui.com/components/lists/)
   *
   * API:
   *
   * - [ListSubheader API](https://material-ui.com/api/list-subheader/)
   */
  MuiListSubheader?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "default" | "primary" | "inherit"
    /**
     * If true, the List Subheader will not have gutters.
     */
    disableGutters?: boolean
    /**
     * If true, the List Subheader will not stick to the top during scroll.
     */
    disableSticky?: boolean
    /**
     * If true, the List Subheader will be indented.
     */
    inset?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [App Bar](https://material-ui.com/components/app-bar/)
   * - [Menus](https://material-ui.com/components/menus/)
   *
   * API:
   *
   * - [Menu API](https://material-ui.com/api/menu/)
   * - inherits [Popover API](https://material-ui.com/api/popover/)
   */
  MuiMenu?: {
    /**
     * The length of the transition in ms, or 'auto'
     */
    transitionDuration?:
      | "auto"
      | number
      | { appear?: number; enter?: number; exit?: number }
    /**
     * The variant to use. Use menu to prevent selected items from impacting the initial focus
     * and the vertical alignment relative to the anchor element.
     */
    variant?: "menu" | "selectedMenu"
  }
  /**
   *
   * Demos:
   *
   * - [Menus](https://material-ui.com/components/menus/)
   *
   * API:
   *
   * - [MenuItem API](https://material-ui.com/api/menu-item/)
   * - inherits [ListItem API](https://material-ui.com/api/list-item/)
   */
  MuiMenuItem?: {
    /**
     * If true, compact vertical padding designed for keyboard and mouse input will be used.
     */
    dense?: boolean
    /**
     * If true, the left and right padding is removed.
     */
    disableGutters?: boolean
  }
  /**
   * A permanently displayed menu following <https://www.w3.org/TR/wai-aria-practices/#menubutton>.
   * It's exposed to help customization of the [Menu](https://material-ui.com/api/menu/) component. If you
   * use it separately you need to move focus into the component manually. Once
   * the focus is placed inside the component it is fully keyboard accessible.
   * Demos:
   *
   * - [Menus](https://material-ui.com/components/menus/)
   *
   * API:
   *
   * - [MenuList API](https://material-ui.com/api/menu-list/)
   * - inherits [List API](https://material-ui.com/api/list/)
   */
  MuiMenuList?: {
    /**
     * If true, will focus the [role="menu"] container and move into tab order.
     */
    autoFocus?: boolean
    /**
     * If true, will focus the first menuitem if variant="menu" or selected item
     * if variant="selectedMenu".
     */
    autoFocusItem?: boolean
    /**
     * If true, will allow focus on disabled items.
     */
    disabledItemsFocusable?: boolean
    /**
     * If true, the menu items will not wrap focus.
     */
    disableListWrap?: boolean
    /**
     * The variant to use. Use menu to prevent selected items from impacting the initial focus
     * and the vertical alignment relative to the anchor element.
     */
    variant?: "menu" | "selectedMenu"
  }
  /**
   *
   * Demos:
   *
   * - [Steppers](https://material-ui.com/components/steppers/)
   *
   * API:
   *
   * - [MobileStepper API](https://material-ui.com/api/mobile-stepper/)
   * - inherits [Paper API](https://material-ui.com/api/paper/)
   */
  MuiMobileStepper?: {
    /**
     * Set the positioning type.
     */
    position?: "bottom" | "top" | "static"
    /**
     * The variant to use.
     */
    variant?: "text" | "dots" | "progress"
  }
  /**
   *
   * Demos:
   *
   * - [Text Fields](https://material-ui.com/components/text-fields/)
   *
   * API:
   *
   * - [OutlinedInput API](https://material-ui.com/api/outlined-input/)
   * - inherits [InputBase API](https://material-ui.com/api/input-base/)
   */
  MuiOutlinedInput?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary"
    /**
     * If true, the dialog stretches to maxWidth.
     *
     * Notice that the dialog width grow is limited by the default margin.
     */
    fullWidth?: boolean
    /**
     * If dense, will adjust vertical spacing. This is normally obtained via context from FormControl.
     */
    margin?: "dense" | "none"
    /**
     * The width of the label. Is ignored if label is provided. Prefer label
     * if the input label appears with a strike through.
     */
    labelWidth?: number
    /**
     * If true, the outline is notched to accommodate the label.
     */
    notched?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Cards](https://material-ui.com/components/cards/)
   * - [Paper](https://material-ui.com/components/paper/)
   *
   * API:
   *
   * - [Paper API](https://material-ui.com/api/paper/)
   */
  MuiPaper?: {
    /**
     * Shadow depth, corresponds to dp in the spec.
     * It accepts values between 0 and 24 inclusive.
     */
    elevation?: number
    /**
     * If true, rounded corners are disabled.
     */
    square?: boolean
    /**
     * The variant to use.
     */
    variant?: "elevation" | "outlined"
  }
  /**
   *
   * Demos:
   *
   * - [Menus](https://material-ui.com/components/menus/)
   * - [Popover](https://material-ui.com/components/popover/)
   *
   * API:
   *
   * - [Popover API](https://material-ui.com/api/popover/)
   * - inherits [Modal API](https://material-ui.com/api/modal/)
   */
  MuiPopover?: {
    /**
     * This is the point on the anchor where the popover's
     * anchorEl will attach to. This is not used when the
     * anchorReference is 'anchorPosition'.
     *
     * Options:
     * vertical: [top, center, bottom];
     * horizontal: [left, center, right].
     */
    anchorOrigin?: {
      horizontal: "center" | "left" | "right" | number
      vertical: "bottom" | "center" | "top" | number
    }
    /**
     * This is the position that may be used
     * to set the position of the popover.
     * The coordinates are relative to
     * the application's client area.
     */
    anchorPosition?: { left: number; top: number }
    /**
     * This determines which anchor prop to refer to to set
     * the position of the popover.
     */
    anchorReference?: "anchorEl" | "anchorPosition" | "none"
    /**
     * The elevation of the popover.
     */
    elevation?: number
    /**
     * Specifies how close to the edge of the window the popover can appear.
     */
    marginThreshold?: number
    /**
     * This is the point on the popover which
     * will attach to the anchor's origin.
     *
     * Options:
     * vertical: [top, center, bottom, x(px)];
     * horizontal: [left, center, right, x(px)].
     */
    transformOrigin?: {
      horizontal: "center" | "left" | "right" | number
      vertical: "bottom" | "center" | "top" | number
    }
    /**
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    transitionDuration?:
      | "auto"
      | number
      | { appear?: number; enter?: number; exit?: number }
  }
  /**
   *
   * Demos:
   *
   * - [Radio Buttons](https://material-ui.com/components/radio-buttons/)
   *
   * API:
   *
   * - [Radio API](https://material-ui.com/api/radio/)
   * - inherits [IconButton API](https://material-ui.com/api/icon-button/)
   */
  MuiRadio?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary" | "default"
    /**
     * The size of the radio.
     * small is equivalent to the dense radio styling.
     */
    size?: "small" | "medium"
  }
  /**
   *
   * Demos:
   *
   * - [Selects](https://material-ui.com/components/selects/)
   *
   * API:
   *
   * - [Select API](https://material-ui.com/api/select/)
   * - inherits [Input API](https://material-ui.com/api/input/)
   */
  MuiSelect?: {
    /**
     * If true, the width of the popover will automatically be set according to the items inside the
     * menu, otherwise it will be at least the width of the select input.
     */
    autoWidth?: boolean
    /**
     * If true, a value is displayed even if no items are selected.
     *
     * In order to display a meaningful value, a function should be passed to the renderValue prop which returns the value to be displayed when no items are selected.
     * You can only use it when the native prop is false (default).
     */
    displayEmpty?: boolean
    /**
     * See [OutlinedInput#label](/api/outlined-input/#props)
     */
    labelWidth?: number
    /**
     * If true, value must be an array and the menu will support multiple selections.
     */
    multiple?: boolean
    /**
     * The variant to use.
     */
    variant?: "standard" | "outlined" | "filled"
  }
  /**
   *
   * Demos:
   *
   * - [Slider](https://material-ui.com/components/slider/)
   *
   * API:
   *
   * - [Slider API](https://material-ui.com/api/slider/)
   */
  MuiSlider?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary"
    /**
     * Marks indicate predetermined values to which the user can move the slider. If true the marks will be spaced according the value of the step prop. If an array, it should contain objects with value and an optional label keys.
     */
    marks?: boolean | { value: string | number; label?: string }[]
    /**
     * The slider orientation.
     */
    orientation?: "horizontal" | "vertical"
    /**
   * The track presentation:
- normal the track will render a bar representing the slider value. - inverted the track will render a bar representing the remaining slider value. - false the track will render without a bar.
   */
    track?: "normal" | false | "inverted"
    /**
     * Controls when the value label is displayed:
     *    - auto the value label will display when the thumb is hovered or focused.
     *    - on will display persistently.
     *    - off will never display.
     */
    valueDisplayLabel?: "on" | "auto" | "off"
  }
  /**
   *
   * Demos:
   *
   * - [Snackbars](https://material-ui.com/components/snackbars/)
   *
   * API:
   *
   * - [Snackbar API](https://material-ui.com/api/snackbar/)
   */
  MuiSnackbar?: {
    /**
     * The anchor of the Snackbar.
     */
    anchorOrigin?: {
      horizontal: "center" | "left" | "right"
      vertical: "bottom" | "top"
    }
    /**
     * The number of milliseconds to wait before automatically calling the
     * onClose function. onClose should then set the state of the open
     * prop to hide the Snackbar. This behavior is disabled by default with
     * the null value.
     */
    autoHideDuration?: number | null
    /**
     * If true, the autoHideDuration timer will expire even if the window is not focused.
     */
    disableWindowBlurListener?: boolean
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration?:
      | number
      | { appear?: number; enter?: number; exit?: number }
  }
  /**
   *
   * Demos:
   *
   * - [Steppers](https://material-ui.com/components/steppers/)
   *
   * API:
   *
   * - [StepContent API](https://material-ui.com/api/step-content/)
   */
  MuiStepContent?: {
    /**
     * Adjust the duration of the content expand transition.
     * Passed as a prop to the transition component.
     *
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    transitionDuration?:
      | "auto"
      | number
      | { appear?: number; enter?: number; exit?: number }
  }
  /**
   *
   * Demos:
   *
   * - [Steppers](https://material-ui.com/components/steppers/)
   *
   * API:
   *
   * - [Stepper API](https://material-ui.com/api/stepper/)
   * - inherits [Paper API](https://material-ui.com/api/paper/)
   */
  MuiStepper?: {
    /**
     * If set the Stepper will not assist in controlling steps for linear flow.
     */
    nonLinear?: boolean
    /**
     * The stepper orientation (layout flow direction).
     */
    orientation?: "horizontal" | "vertical"
  }
  /**
   *
   * Demos:
   *
   * - [Icons](https://material-ui.com/components/icons/)
   * - [Material Icons](https://material-ui.com/components/material-icons/)
   *
   * API:
   *
   * - [SvgIcon API](https://material-ui.com/api/svg-icon/)
   */
  MuiSvgIcon?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * You can use the htmlColor prop to apply a color attribute to the SVG element.
     */
    color?:
      | "inherit"
      | "primary"
      | "secondary"
      | "action"
      | "disabled"
      | "error"
    /**
     * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
     */
    fontSize?: "inherit" | "default" | "small" | "large"
    /**
     * Allows you to redefine what the coordinates without units mean inside an SVG element.
     * For example, if the SVG element is 500 (width) by 200 (height), and you pass viewBox="0 0 50 20",
     * this means that the coordinates inside the SVG will go from the top left corner (0,0)
     * to bottom right (50,20) and each unit will be worth 10px.
     */
    viewBox?: string
  }
  /**
   *
   * Demos:
   *
   * - [Switches](https://material-ui.com/components/switches/)
   * - [Transfer List](https://material-ui.com/components/transfer-list/)
   *
   * API:
   *
   * - [Switch API](https://material-ui.com/api/switch/)
   * - inherits [IconButton API](https://material-ui.com/api/icon-button/)
   */
  MuiSwitch?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary" | "default"
    /**
     * The size of the switch.
     * small is equivalent to the dense switch styling.
     */
    size?: "small" | "medium"
  }
  /**
   *
   * Demos:
   *
   * - [Tabs](https://material-ui.com/components/tabs/)
   *
   * API:
   *
   * - [Tab API](https://material-ui.com/api/tab/)
   * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
   */
  MuiTab?: {
    /**
     * If true, the keyboard focus ripple will be disabled.
     */
    disableFocusRipple?: boolean
    /**
     * If true, the ripple effect will be disabled.
     */
    disableRipple?: boolean
    /**
     * Tab labels appear in a single row. They can use a second line if needed.
     */
    wrapped?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Tables](https://material-ui.com/components/tables/)
   *
   * API:
   *
   * - [Table API](https://material-ui.com/api/table/)
   */
  MuiTable?: {
    /**
     * Allows TableCells to inherit padding of the Table.
     */
    padding?: "default" | "checkbox" | "none"
    /**
     * Allows TableCells to inherit size of the Table.
     */
    size?: "small" | "medium"
    /**
     * Set the header sticky.
     * ⚠️ It doesn't work with IE 11.
     */
    stickyHeader?: boolean
  }
  /**
   * The component renders a <th> element when the parent context is a header
   * or otherwise a <td> element.
   * Demos:
   *
   * - [Tables](https://material-ui.com/components/tables/)
   *
   * API:
   *
   * - [TableCell API](https://material-ui.com/api/table-cell/)
   */
  MuiTableCell?: {
    /**
     * Set the text-align on the table cell content.
     *
     * Monetary or generally number fields **should be right aligned** as that allows
     * you to add them up quickly in your head without having to worry about decimals.
     */
    align?: "inherit" | "left" | "center" | "right" | "justify"
    /**
     * Sets the padding applied to the cell.
     * By default, the Table parent component set the value (default).
     */
    padding?: "checkbox" | "default" | "none"
  }
  /**
   * A TableCell based component for placing inside TableFooter for pagination.
   * Demos:
   *
   * - [Tables](https://material-ui.com/components/tables/)
   *
   * API:
   *
   * - [TablePagination API](https://material-ui.com/api/table-pagination/)
   * - inherits [TableCell API](https://material-ui.com/api/table-cell/)
   */
  MuiTablePagination?: {
    /**
     * Text label for the back arrow icon button.
     * For localization purposes, you can use the provided translations.
     */
    backIconButtonText?: string
    /**
     * Text label for the next arrow icon button.
     * For localization purposes, you can use the provided translations.
     */
    nextIconButtonText?: string
    /**
     * Customizes the options of the rows per page select field. If less than two options are available, no select field will be displayed.
     */
    rowsPerPageOptions?: Array<number | { value: number; label: string }>
  }
  /**
   * Will automatically set dynamic row height
   * based on the material table element parent (head, body, etc).
   * Demos:
   *
   * - [Tables](https://material-ui.com/components/tables/)
   *
   * API:
   *
   * - [TableRow API](https://material-ui.com/api/table-row/)
   */
  MuiTableRow?: {
    /**
     * If true, the table row will shade on hover.
     */
    hover?: boolean
  }
  /**
   * A button based label for placing inside TableCell for column sorting.
   * Demos:
   *
   * - [Tables](https://material-ui.com/components/tables/)
   *
   * API:
   *
   * - [TableSortLabel API](https://material-ui.com/api/table-sort-label/)
   * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
   */
  MuiTableSortLabel?: {
    /**
     * The current sort direction.
     */
    direction?: "asc" | "desc"
    /**
     * Hide sort icon when active is false.
     */
    hideSortIcon?: boolean
  }
  /**
   *
   * Demos:
   *
   * - [Tabs](https://material-ui.com/components/tabs/)
   *
   * API:
   *
   * - [Tabs API](https://material-ui.com/api/tabs/)
   */
  MuiTabs?: {
    /**
     * If true, the tabs will be centered.
     * This property is intended for large views.
     */
    centered?: boolean
    /**
     * Determines the color of the indicator.
     */
    indicatorColor?: "secondary" | "primary"
    /**
     * The tabs orientation (layout flow direction).
     */
    orientation?: "horizontal" | "vertical"
    /**
     * Determine behavior of scroll buttons when tabs are set to scroll:
     *
     * - auto will only present them when not all the items are visible.
     * - desktop will only present them on medium and larger viewports.
     * - on will always present them.
     * - off will never present them.
     */
    scrollButtons?: "auto" | "desktop" | "on" | "off"
    /**
     * Determines the color of the Tab.
     */
    textColor?: "secondary" | "primary" | "inherit"
    /**
     *  Determines additional display behavior of the tabs:
     *
     *  - scrollable will invoke scrolling properties and allow for horizontally
     *  scrolling (or swiping) of the tab bar.
     *  -fullWidth will make the tabs grow to use all the available space,
     *  which should be used for small views, like on mobile.
     *  - standard will render the default state.
     */
    variant?: "standard" | "scrollable" | "fullWidth"
  }
  /**
   *
   * Demos:
   *
   * - [Tabs](https://material-ui.com/components/tabs/)
   *
   * API:
   *
   * - [TabScrollButton API](https://material-ui.com/api/tab-scroll-button/)
   */
  MuiTabScrollButton?: {
    /**
     * Which direction should the button indicate?
     */
    direction: "left" | "right"
    /**
     * The tabs orientation (layout flow direction).
     */
    orientation: "horizontal" | "vertical"
  }
  /**
   * The TextField is a convenience wrapper for the most common cases (80%).
   * It cannot be all things to all people, otherwise the API would grow out of control.
   *
   * ## Advanced Configuration
   *
   * It's important to understand that the text field is a simple abstraction
   * on top of the following components:
   *
   * -   [FormControl](https://material-ui.com/api/form-control/)
   * -   [InputLabel](https://material-ui.com/api/input-label/)
   * -   [FilledInput](https://material-ui.com/api/filled-input/)
   * -   [OutlinedInput](https://material-ui.com/api/outlined-input/)
   * -   [Input](https://material-ui.com/api/input/)
   * -   [FormHelperText](https://material-ui.com/api/form-helper-text/)
   *
   * If you wish to alter the props applied to the input element, you can do so as follows:
   *
   * \`\`\`jsx
   * const inputProps = {
   *   step: 300,
   * };
   *
   * return <TextField id="time" type="time" inputProps={inputProps} />;
   * \`\`\`
   *
   * For advanced cases, please look at the source of TextField by clicking on the
   * "Edit this page" button above. Consider either:
   *
   * -   using the upper case props for passing values directly to the components
   * -   using the underlying components directly as shown in the demos
   * Demos:
   *
   * - [Autocomplete](https://material-ui.com/components/autocomplete/)
   * - [Pickers](https://material-ui.com/components/pickers/)
   * - [Text Fields](https://material-ui.com/components/text-fields/)
   *
   * API:
   *
   * - [TextField API](https://material-ui.com/api/text-field/)
   * - inherits [FormControl API](https://material-ui.com/api/form-control/)
   */
  MuiTextField?: {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "primary" | "secondary"
    /**
     * If true, the input will take up the full width of its container.
     */
    fullWidth?: boolean
    /**
     * If dense or normal, will adjust vertical spacing of this and contained components.
     */
    margin?: "dense" | "none" | "normal"
    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax?: string | number
    /**
     * The size of the text field.
     */
    size?: "small" | "medium"
  }
  MuiTimeline?: {
    /**
     * The position where the timeline's content should appear.
     */
    align?: "alternate" | "left" | "right"
  }
  MuiTimelineDot?: {
    /**
     * 	The dot can have a different colors.
     */
    color?: "grey" | "inherit" | "primary" | "secondary"
    /**
     * The dot can appear filled or outlined.
     */
    variant?: "default" | "outlined"
  }
  /**
   *
   * Demos:
   *
   * - [App Bar](https://material-ui.com/components/app-bar/)
   *
   * API:
   *
   * - [Toolbar API](https://material-ui.com/api/toolbar/)
   */
  MuiToolbar?: {
    /**
     * If true, disables gutter padding.
     */
    disableGutters?: boolean
    /**
     * The variant to use.
     */
    variant?: "regular" | "dense"
  }
  /**
   *
   * Demos:
   *
   * - [Tooltips](https://material-ui.com/components/tooltips/)
   *
   * API:
   *
   * - [Tooltip API](https://material-ui.com/api/tooltip/)
   */
  MuiTooltip?: {
    /**
     * If true, adds an arrow to the tooltip.
     */
    arrow?: boolean
    /**
     * Do not respond to focus events.
     */
    disableFocusListener?: boolean
    /**
     * Do not respond to hover events.
     */
    disableHoverListener?: boolean
    /**
     * Do not respond to long press touch events.
     */
    disableTouchListener?: boolean
    /**
     * The number of milliseconds to wait before showing the tooltip.
     * This prop won't impact the enter touch delay (enterTouchDelay).
     */
    enterDelay?: number
    /**
     * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
     */
    enterNextDelay?: number
    /**
     * The number of milliseconds a user must touch the element before showing the tooltip.
     */
    enterTouchDelay?: number
    /**
     * Makes a tooltip interactive, i.e. will not close when the user
     * hovers over the tooltip before the leaveDelay is expired.
     */
    interactive?: boolean
    /**
     * The number of milliseconds to wait before hiding the tooltip.
     * This prop won't impact the leave touch delay (leaveTouchDelay).
     */
    leaveDelay?: number
    /**
     * The number of milliseconds after the user stops touching an element before hiding the tooltip.
     */
    leaveTouchDelay?: number
    /**
     * Tooltip placement.
     */
    placement?:
      | "bottom-end"
      | "bottom-start"
      | "bottom"
      | "left-end"
      | "left-start"
      | "left"
      | "right-end"
      | "right-start"
      | "right"
      | "top-end"
      | "top-start"
      | "top"
  }
  /**
   *
   * Demos:
   *
   * - [Breadcrumbs](https://material-ui.com/components/breadcrumbs/)
   * - [Typography](https://material-ui.com/components/typography/)
   *
   * API:
   *
   * - [Typography API](https://material-ui.com/api/typography/)
   */
  MuiTypography?: {
    /**
     * Set the text-align on the component.
     */
    align?: "inherit" | "left" | "center" | "right" | "justify"
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?:
      | "initial"
      | "inherit"
      | "primary"
      | "secondary"
      | "textPrimary"
      | "textSecondary"
      | "error"
    /**
     * Controls the display type
     */
    display?: "initial" | "block" | "inline"
    /**
     * If true, the text will have a bottom margin.
     */
    gutterBottom?: boolean
    /**
     * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
     * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
     */
    noWrap?: boolean
    /**
     * If true, the text will have a bottom margin.
     */
    paragraph?: boolean
    /**
     * Applies the theme typography styles.
     */
    variant?:
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
      | "srOnly"
      | "inherit"
  }
}
`
