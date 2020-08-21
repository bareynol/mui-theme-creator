import { colorFromString } from "./utils"

describe("colorFromString tests", () => {
  test("hex with hash returns correctly", () => {
    expect(colorFromString("#fff")).toBe("#fff")
    expect(colorFromString("#123")).toBe("#123")
    expect(colorFromString("#ffaaee")).toBe("#ffaaee")
    expect(colorFromString("#fffffff")).toBeNull()
    expect(colorFromString("#fffffg")).toBeNull()
  })

  test("hex without has returns correctly", () => {
    expect(colorFromString("fff")).toBe("#fff")
    expect(colorFromString("123")).toBe("#123")
    expect(colorFromString("ffaaee")).toBe("#ffaaee")
    expect(colorFromString("fffffff")).toBeNull()
    expect(colorFromString("fffffg")).toBeNull()
  })

  test("rgb, rgba values return correctly", () => {
    expect(colorFromString("rgb(255, 255, 255)")).toBe("rgb(255, 255, 255)")
    expect(colorFromString("rgb(100.22,100.55,100.2)")).toBe(
      "rgb(100.22,100.55,100.2)"
    )
    expect(colorFromString("rgb(255,255,255,0.5)")).toBeNull()
    expect(colorFromString("rgba(255, 255, 255, 1)")).toBe(
      "rgba(255, 255, 255, 1)"
    )
    expect(colorFromString("rgba(100.22,100.55,100.2, 0.5)")).toBe(
      "rgba(100.22,100.55,100.2, 0.5)"
    )
    expect(colorFromString("rgba(255,255,255)")).toBeNull()
  })

  test("hsl,hsla values return correctly", () => {
    expect(colorFromString("hsl(360, 100%, 50%)")).toBe("hsl(360, 100%, 50%)")
    expect(colorFromString("hsl(100,50%,10%)")).toBe("hsl(100,50%,10%)")
    expect(colorFromString("hsl(100,50,10)")).toBeNull()
    expect(colorFromString("hsl(360, 100%, 50%, 0.5)")).toBeNull()
    expect(colorFromString("hsla(360, 100%, 50%, 0.5)")).toBe(
      "hsla(360, 100%, 50%, 0.5)"
    )
    expect(colorFromString("hsla(100,50%,10%, 1)")).toBe("hsla(100,50%,10%, 1)")
    expect(colorFromString("hsla(255,100%,10%)")).toBeNull()
  })
})
