<template>
  <div>
    <button class="text-red-500" @click="createPost">Create Post</button><br />
    {{ posts }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PageBases',
  async asyncData({ $repositories }) {
    return { posts: await $repositories.posts.get() }
  },
  methods: {
    ...mapActions({
      createPostAction: 'posts/createPost',
    }),
    createPost() {
      this.createPostAction({
        userId: 12,
        title: 'foo',
        body: 'bar',
      })
    },
  },
}
</script>
