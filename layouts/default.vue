<template>
  <div class="header">
    <div class="p-4">
      <nuxt-link
        v-for="link in links"
        :key="link.name"
        :to="{ name: link.name }"
        class="mr-3"
      >
        <strong>{{ link.label }}</strong>
        <span v-if="link.subLabel"> : {{ link.subLabel }}</span>
      </nuxt-link>
    </div>
    <div class="pt-12">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      links: [
        { name: 'index', label: 'Home' },
        { name: 'bases', label: 'Bases' },
        { name: 'nested', label: 'Nested' },
      ],
    }
  },
}
</script>

<style scoped>
a {
  @apply inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
</style>
