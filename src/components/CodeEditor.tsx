import React, { useRef, useEffect } from "react"
import codemirror, { EditorFromTextArea } from "codemirror"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/monokai.css"
import { Controlled as CodeMirror } from "react-codemirror2"
import { makeStyles } from "@material-ui/core/styles"

const editorOptions = {
  lineNumbers: true,
  mode: "javascript",
}

const useStyles = makeStyles({
  editor: {
    height: "100%",
    "&>.CodeMirror": {
      height: "100%",
    },
  },
})

interface CodeEditorProps {
  code: string
  onBeforeChange: (editor, data, value: string) => void
}

const CodeEditor = ({ code, onBeforeChange }: CodeEditorProps) => {
  const classes = useStyles()
  return (
    <CodeMirror
      value={code}
      options={editorOptions}
      className={classes.editor}
      onBeforeChange={onBeforeChange}
    />
  )
}

export default CodeEditor
