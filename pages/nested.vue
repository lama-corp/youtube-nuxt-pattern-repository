<template>
  <div>
    {{ userPosts }}
  </div>
</template>

<script>
export default {
  name: 'PageNested',
  async asyncData({ store }) {
    return { userPosts: await store.dispatch('users/posts/getUserPosts') }
  },
}
</script>
