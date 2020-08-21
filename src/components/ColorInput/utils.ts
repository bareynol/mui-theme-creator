/**
 * Takes an input string (built to handle paste events) and
 * returns it if it is a valid color string (hex, rgb, rgba, hsl, hsla),
 * adds a '#' character if needed, or returns null if not a color
 * @param input
 */
export function colorFromString(input: string) {
  const trimmed = input.trim()
  const hexRegexNoHash = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  const rgbaRegex = /^rgba\((\d+(\.\d+)?, *){3}\d+(\.\d+)?\)$/
  const rgbRegex = /^rgb\((\d+(\.\d+)?, *){2}\d+(\.\d+)?\)$/
  const hslaRegex = /^hsla\(\d+(\.\d+)?, *(\d+(\.\d+)?%, *){2}\d+(\.\d+)?\)$/
  const hslRegex = /^hsl\(\d+(\.\d+)?, *\d+(\.\d+)?%, *\d+(\.\d+)?%\)$/

  if (trimmed.match(hexRegexNoHash)) {
    return `#${trimmed}`
  } else if (
    trimmed.match(hexRegex) ||
    trimmed.match(rgbaRegex) ||
    trimmed.match(rgbRegex) ||
    trimmed.match(hslaRegex) ||
    trimmed.match(hslRegex)
  ) {
    return trimmed
  }

  return null
}
