import { createTransform } from "redux-persist"

export const LoadedFontsTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // convert mySet to an Array.
    console.log("inboundState", inboundState)
    return [...inboundState]
  },
  // transform state being rehydrated
  (outboundState, key) => {
    // convert mySet back to a Set.
    return new Set(outboundState)
  },
  // define which reducers this transform gets called for.
  { whitelist: ["loadedFonts"] }
)
