import React from "react"
import TypographyGlobals from "./TypographyGlobals"
import TypographyVariant from "./TypographyVariant"

const typographyVariants = [
  { variant: "h1", text: "Head", smallPreview: true },
  { variant: "h2", text: "Head", smallPreview: true },
  { variant: "h3", text: "Heading", smallPreview: true },
  { variant: "h4", text: "Heading", smallPreview: true },
  { variant: "h5", text: "Heading", smallPreview: true },
  { variant: "h6", text: "Heading", smallPreview: true },
  { variant: "subtitle1", text: "Lorem ipsum dolor sit amet" },
  { variant: "subtitle2", text: "Lorem ipsum dolor sit amet" },
  { variant: "body1", text: "Lorem ipsum dolor sit amet" },
  { variant: "body2", text: "Lorem ipsum dolor sit amet" },
  { variant: "button", text: "BUTTON TEXT" },
  { variant: "caption", text: "caption text" },
  { variant: "overline", text: "overline text" },
]

export default function TypographyTools() {
  return (
    <>
      <TypographyGlobals />
      {typographyVariants.map(variantProps => (
        <TypographyVariant key={variantProps.variant} {...variantProps} />
      ))}
    </>
  )
}
