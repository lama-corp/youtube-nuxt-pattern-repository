export const state = () => ({})

export const actions = {
  async getUserPosts() {
    return await this.$repositories.userPosts.get({ userId: 1 })
  },
}

export const mutations = {}
