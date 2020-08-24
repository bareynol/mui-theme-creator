import React from "react"

import {
  paletteToolsId,
  fontToolsId,
  typographyToolsId,
  snippetToolsId,
} from "src/components/ThemeTools/ThemeTools"
import { toolPanelId } from "src/components/ThemeTools/ToolPanel"
import TutorialTooltip from "../TutorialTooltip"

import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

import colorPickerImage from "src/images/tutorial/colorpicker.webp"
import typographyToolsImage from "src/images/tutorial/typographytools.webp"
import snippetToolsImage from "src/images/tutorial/snippettools.webp"
import TutorialCard from "../TutorialCard"

const ToolPanelTutorialStep = () => {
  return (
    <TutorialTooltip anchorId={toolPanelId} placement="top">
      <Typography variant="h5">This is the Theme Tool Panel</Typography>
      <Typography>
        Controls here will help you quickly edit the theme
      </Typography>
    </TutorialTooltip>
  )
}

const PaletteTutorialStep = () => {
  return (
    <>
      <TutorialTooltip anchorId={paletteToolsId} placement="top">
        <Typography>
          Use color pickers to set theme <code>palette</code> options
        </Typography>
      </TutorialTooltip>
      <TutorialCard title="Palette Tools">
        <Typography variant="h6">Color Picker</Typography>
        <Typography>
          Select{" "}
          <Link
            href="https://material-ui.com/customization/color/"
            target="_blank"
            rel="noreferrer"
          >
            Material-UI Colors
          </Link>{" "}
          from the top bar of the popup, or use the{" "}
          <Link
            href="https://casesandberg.github.io/react-color/"
            target="_blank"
            rel="noreferrer"
          >
            Color Picker
          </Link>{" "}
          to select colors.
        </Typography>
        <img
          src={colorPickerImage}
          style={{ border: "1px solid white", marginTop: 8, marginBottom: 8 }}
        />
        <Typography>
          <code>light</code>, <code>dark</code>, and <code>contrastText</code>{" "}
          values are automatically set by the <code>main</code> values unless
          specifically provided
        </Typography>
      </TutorialCard>
    </>
  )
}

const FontTutorialStep = () => {
  return (
    <>
      <TutorialTooltip anchorId={fontToolsId} placement="top">
        Load fonts for Typography elements
      </TutorialTooltip>
      <TutorialCard title="Font Loading Tools">
        <Typography paragraph>
          Load{" "}
          <Link
            href="https://fonts.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            Google Fonts
          </Link>{" "}
          by entering the name of the font in the input.
        </Typography>
        <Typography paragraph>
          Fonts used by <code>typography</code> options are saved and
          automatically loaded when the page is reloaded
        </Typography>
        <Typography>
          <span style={{ fontFamily: "Droid Sans" }}>Droid Sans, </span>
          <span style={{ fontFamily: "Droid Serif" }}>Droid Serif, </span>
          <span style={{ fontFamily: "Open Sans" }}>Open Sans, </span>
          <span style={{ fontFamily: "Roboto" }}>Roboto, </span>
          are loaded by default
        </Typography>
      </TutorialCard>
    </>
  )
}

const TypographyTutorialStep = () => {
  return (
    <>
      <TutorialTooltip anchorId={typographyToolsId} placement="top">
        View and modify Typography options
      </TutorialTooltip>
      <TutorialCard title="Typography Tools">
        <Typography paragraph>
          Each Typography variant is displayed against the current{" "}
          <code>palette.background</code> colors
        </Typography>
        <Typography>
          Click on the variant to expand it to full size and modify options
        </Typography>
        <img
          src={typographyToolsImage}
          style={{ border: "1px solid white", marginTop: 8, marginBottom: 8 }}
        />
      </TutorialCard>
    </>
  )
}

const SnippetsTutorialStep = () => {
  return (
    <>
      <TutorialTooltip anchorId={snippetToolsId} placement="top">
        Add preset snippets for styles or component props
      </TutorialTooltip>
      <TutorialCard title="Snippet Tools">
        <Typography paragraph>
          Styles and default props can be set for components globally from the
          theme <code>overrides</code> and <code>props</code> options.
        </Typography>
        <Typography>
          Click on these presets to add or remove them from the theme
        </Typography>
        <img
          src={snippetToolsImage}
          style={{ border: "1px solid white", marginTop: 8, marginBottom: 8 }}
        />
      </TutorialCard>
    </>
  )
}

export default [
  ToolPanelTutorialStep,
  PaletteTutorialStep,
  FontTutorialStep,
  TypographyTutorialStep,
  SnippetsTutorialStep,
]
