export default (httpClient) => (resource) => ({
  get() {
    return httpClient.$get(`/${resource}`)
  },
  getOne(id) {
    return httpClient.$get(`/${resource}/${id}`)
  },
  create(payload) {
    return httpClient.$post(`/${resource}`, payload)
  },
  update(payload, id) {
    return httpClient.$put(`/${resource}/${id}`, payload)
  },
  delete(id) {
    return httpClient.$delete(`/${resource}/${id}`)
  },
})
