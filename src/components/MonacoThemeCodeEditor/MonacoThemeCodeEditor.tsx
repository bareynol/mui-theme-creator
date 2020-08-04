import React, { useEffect, useRef } from "react"

import useEditor from "./hooks/useEditor"
import useEditorStateSync from "./hooks/useEditorStateSync"
import useReadOnlyLines from "./hooks/useReadOnlyLines"
import useSave from "./hooks/useSave"
import useUndoRedo from "./hooks/useUndoRedo"

import "./editor.css"
import * as monaco from "monaco-editor"
import EditorControls from "./EditorControls"

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
      console.log("MonacoThemeCodeEditor unmounted")
    }
  }, [])

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <EditorControls
        onUndo={handleUndo}
        onRedo={handleRedo}
        onSave={handleSave}
      />
      <div
        id="container"
        style={{ flexGrow: 1, height: "100%", width: "100%" }}
      />
    </div>
  )
}

export default MonacoThemeCodeEditor
