const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const INC_PAYLOAD = "INC_PAYLOAD"

export function incrementMessage() {
  return buildMessage(INCREMENT)
}

export function decrementMessage() {
  return buildMessage(DECREMENT)
}

export function incrementByPayloadMessage(number) {
  return buildMessage(INC_PAYLOAD, number)
}

function buildMessage(type, payload) {
  return { type, payload }
}

const messageHandlers = {
  [INCREMENT]: increment,
  [DECREMENT]: decrement,
  [INC_PAYLOAD]: incByPayload,
}

function increment(state) {
  return {
    count: state.count + 1,
  }
}

function decrement(state) {
  return {
    count: state.count - 1,
  }
}

function incByPayload(state, number) {
  console.log("Payload is ", number)
  return {
    count: state.count + number,
  }
}

function handleMessage(state, { type, payload }) {
  const handler = messageHandlers[type]

  if (!handler) return state

  return handler(state, payload)
}

const initialState = {
  count: 0,
}

export function countReducer(state = initialState, action) {
  if (!action) return state

  return handleMessage(state, action)
}
