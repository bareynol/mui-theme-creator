import React, { useEffect, useCallback, useState } from "react"
import { Controlled as CodeMirror } from "react-codemirror2"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import { updateThemeInput } from "src/state/actions"

const editorOptions = {
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
    width: "100%",
    "& .CodeMirror": {
      height: "100%",
    },
  },
})

const CodeEditor = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const themeInput = useSelector((state: RootState) => state.themeInput)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // load required codemirror libs
    // can't load globally due to SSR issues
    require("codemirror/lib/codemirror.css")
    require("codemirror/mode/javascript/javascript")
    require("codemirror/addon/edit/closebrackets")
    require("codemirror/theme/monokai.css")
    // timeout of 500 allows the above items to load before
    // the code mirror editor is loaded, which fixes rendering issues
    setTimeout(() => setShouldRender(true), 500)
  }, [])

  const updateInput = useCallback(
    (editor, data, value) => {
      dispatch(updateThemeInput(value))
    },
    [dispatch]
  )
  return shouldRender ? (
    <CodeMirror
      value={themeInput}
      options={editorOptions}
      className={classes.editor}
      onBeforeChange={updateInput}
    />
  ) : null
}

export default CodeEditor
