export const state = () => ({})

export const actions = {
  async getPosts() {
    return await this.$repositories.posts.get()
  },
}

export const mutations = {}
