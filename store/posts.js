export const state = () => ({})

export const actions = {
  async createPost(context, payload) {
    return await this.$repositories.posts.create(payload)
    // return await this.$axios.$posts('posts', {})
  },
}

export const mutations = {}
