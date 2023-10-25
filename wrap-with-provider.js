/* eslint-disable react/jsx-pascal-case */
// @ts-nocheck
import React from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import createStore from "./src/state/createStore"
import SEO from "src/components/seo"

const ProviderWrap = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const { store, persistor } = createStore()
  return (
    <Provider store={store}>
      <SEO title="Material UI Theme Creator" />
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  )
}

export default ProviderWrap;