export const action = (type, payload = {}) => ({ type, ...payload })

export const createRequestType = base => {
  const types = {}

  const listTypes = ["REQUEST", "SUCCESS", "FAILURE"]
  listTypes.forEach(type => {
    types[type] = `${base}_${type}`
  })

  return types
}
