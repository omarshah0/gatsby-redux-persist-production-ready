const ADD_TO_CART = "ADD_TO_CART"

export function addToCartMessage(product, count) {
  return buildMessage(ADD_TO_CART, { product, count })
}

function buildMessage(type, payload) {
  return { type, payload }
}

const messageHandlers = {
  [ADD_TO_CART]: addToCart,
}

function handleMessage(state, { type, payload }) {
  const handler = messageHandlers[type]

  if (!handler) return state

  return handler(state, payload)
}

function addToCart(state, product) {
  return {
    products: [...state.products, product],
  }
}

const initialState = {
  products: [],
}

export function productReducer(state = initialState, action) {
  if (!action) return state

  return handleMessage(state, action)
}
