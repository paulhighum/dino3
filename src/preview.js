import React from "react"
import Form from "./imput-form"

const Preview = props => {
  return (
    <div>
      <button id="preview-toggle" onClick={props.previewToggle}>Show Preview</button>
      <section id="application-preview" class="hidden">{props.text}</section>
    </div>
  )
}

export default Preview
