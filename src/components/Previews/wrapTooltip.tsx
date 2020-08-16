import React from "react"
import { Tooltip } from "@material-ui/core"

/**
 * HOC to wrap a component in a tooltip that shows the components
 * name, and if they are specified, the color and variant.
 */
function wrapTooltip(Component: React.ComponentType, componentName: string) {
  return ({ variant, color, placement, ...componentProps }) => {
    const colorString = color ? ` color="${color}"` : ""
    const variantString = variant ? ` variant="${variant}"` : ""
    return (
      <Tooltip
        title={`<${componentName}${colorString}${variantString}>`}
        placement={placement}
        arrow
      >
        <Component variant={variant} color={color} {...componentProps} />
      </Tooltip>
    )
  }
}

export default wrapTooltip
