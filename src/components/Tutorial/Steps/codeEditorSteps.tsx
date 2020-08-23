import React from "react"

import { codeEditorId } from "src/components/MonacoThemeCodeEditor"

import TutorialTooltip from "../TutorialTooltip"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

import intellisenseImage from "src/images/tutorial/intellisense.webp"
import intellisenseCssImage from "src/images/tutorial/intellisense-css.webp"
import TutorialCard from "../TutorialCard"

const CodeEditorTutorialStep = () => {
  return (
    <TutorialTooltip anchorId={codeEditorId} placement="left">
      <Typography variant="h5">This is the Theme Code Editor</Typography>
      <Typography paragraph>
        Edit the theme directly and view changes made via the tool panel
      </Typography>
      <Typography>
        This site uses{" "}
        <Link
          href="https://microsoft.github.io/monaco-editor/"
          target="_blank"
          rel="noreferrer"
        >
          Monaco Code Editor
        </Link>
        {", "}
        the code editor that powers VS Code
      </Typography>
    </TutorialTooltip>
  )
}

const IntellisenseTutorialStep = () => {
  return (
    <>
      <TutorialCard title="Intellisense Suggestions">
        <Typography paragraph>
          Intellisense is loaded with Material-UI's <code>ThemeOptions</code>{" "}
          type data.
        </Typography>
        <Typography>
          Get suggestions for global <code>overrides</code> and{" "}
          <code>props</code>
        </Typography>
        <img
          src={intellisenseImage}
          style={{ border: "1px solid white", marginTop: 8, marginBottom: 8 }}
        />
        <Typography>And suggestions for CSS properties as you type</Typography>
        <img
          src={intellisenseCssImage}
          style={{ border: "1px solid white", marginTop: 8, marginBottom: 8 }}
        />
      </TutorialCard>
      <TutorialTooltip anchorId={codeEditorId} placement="bottom">
        <Typography paragraph>Intellisense is on!</Typography>
        <Typography>
          Press <code>Ctrl + Space</code> from the editor for code suggestions
        </Typography>
      </TutorialTooltip>
    </>
  )
}

export default [CodeEditorTutorialStep, IntellisenseTutorialStep]
