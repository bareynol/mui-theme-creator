import React, { useRef, useEffect, useCallback } from "react"
import "codemirror/lib/codemirror.css" // required for the base code editor styles
import codemirror, { EditorConfiguration } from "codemirror"
import "codemirror/mode/javascript/javascript" // required for js mode
import "codemirror/addon/edit/closebrackets" // required for autoCloseBrackets options

import "codemirror/theme/monokai.css"
import { Controlled as CodeMirror } from "react-codemirror2"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import { updateThemeInput } from "src/state/actions"

const editorOptions: EditorConfiguration = {
  lineNumbers: true,
  autoCloseBrackets: true,
  mode: "javascript",
  tabSize: 2,
  indentUnit: 2,
  theme: "monokai",
}

const useStyles = makeStyles({
  editor: {
    height: "100%",
    "&>.CodeMirror": {
      height: "100%",
    },
  },
})

const CodeEditor = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const themeInput = useSelector((state: RootState) => state.themeInput)

  const updateInput = useCallback(
    (editor, data, value) => {
      dispatch(updateThemeInput(value))
    },
    [dispatch]
  )
  return (
    <CodeMirror
      value={themeInput}
      options={editorOptions}
      className={classes.editor}
      onBeforeChange={updateInput}
    />
  )
}

export default CodeEditor
