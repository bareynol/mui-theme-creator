import React from "react"

import SnippetItem from "./SnippetItem"
import snippets from "./snippets"

const SnippetTools = () => {
  return (
    <>
      {snippets.map(snippet => (
        <SnippetItem snippet={snippet} key={snippet.title} />
      ))}
    </>
  )
}

export default SnippetTools
