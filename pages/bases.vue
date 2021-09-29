<template>
  <div>
    {{ posts }}
  </div>
</template>

<script>
export default {
  name: 'PageBases',
  async asyncData({ store }) {
    return { posts: await store.dispatch('posts/getPosts') }
  },
}
</script>
