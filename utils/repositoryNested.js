// /users/:userId/posts, { userId: 1 } => /users/1/posts
const mapPathIds = (path, nestedIds) => {
  Object.keys(nestedIds).forEach(function (idName) {
    path = path.replace(`:${idName}`, nestedIds[idName])
  })

  return path
}

const getPathNormalized = (path, nestedIds = undefined) => {
  return nestedIds instanceof Object
    ? mapPathIds(`/${path}`, nestedIds)
    : `/${path}`
}

export default (httpClient) => (path) => ({
  get(nestedIds = undefined) {
    return httpClient.$get(getPathNormalized(path, nestedIds))
  },
  getOne(id, nestedIds = undefined) {
    return httpClient.$get(getPathNormalized(`${path}/${id}`, nestedIds))
  },
  create(payload, nestedIds = undefined) {
    return httpClient.$post(getPathNormalized(path, nestedIds), payload)
  },
  update(payload, id, nestedIds = undefined) {
    return httpClient.$put(
      getPathNormalized(`${path}/${id}`, nestedIds),
      payload
    )
  },
  delete(id, nestedIds = undefined) {
    return httpClient.$delete(getPathNormalized(`${path}/${id}`, nestedIds))
  },
})
