import { Box } from "@mui/material"
import * as monaco from "monaco-editor"
import React, { useEffect, useRef } from "react"
import { verbose } from "src/utils"
import "./editor.css"
import EditorControls from "./EditorControls"
import EditorErrors from "./EditorErrors"
import useEditor from "./hooks/useEditor"
import useEditorStateSync from "./hooks/useEditorStateSync"
import useReadOnlyLines from "./hooks/useReadOnlyLines"
import useSave from "./hooks/useSave"
import useUndoRedo from "./hooks/useUndoRedo"

export const codeEditorId = "code-editor"

const MonacoThemeCodeEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)

  // set up editor and configure options
  useEditor(editorRef)
  useEditorStateSync(editorRef)
  useReadOnlyLines(editorRef)

  // set Save and Undo/Redo listeners, and get handlers
  const handleSave = useSave(editorRef)
  const { handleRedo, handleUndo } = useUndoRedo(editorRef)

  useEffect(() => {
    return () => {
      verbose("MonacoThemeCodeEditor unmounted")
    }
  }, [])

  return (
    <Box id="code-editor" sx={{
      height: 1,
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}>
      <EditorControls
        onUndo={handleUndo}
        onRedo={handleRedo}
        onSave={handleSave}
      />
      <Box id="container" sx={{
        height: "calc(100% - 48px)",
        width: 1,
      }} />
      <EditorErrors editorRef={editorRef} />
    </Box>
  )
}

export default MonacoThemeCodeEditor
