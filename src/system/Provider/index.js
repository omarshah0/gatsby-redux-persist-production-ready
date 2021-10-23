import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "../Store/Store"

export default function ReduxWrapper({ element }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  )
}

ReduxWrapper.propTypes = {
  element: PropTypes.node,
}
