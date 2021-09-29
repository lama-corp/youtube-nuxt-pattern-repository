<template>
  <div
    class="
      flex
      items-top
      justify-center
      mt-12
    "
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <a
        class="flex justify-center pt-8 sm:pt-0"
        href="https://nuxtjs.org"
        target="_blank"
      >
        <IconNuxt />
      </a>
      <div class="content mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Bienvenue sur la chaîne du Lama Codeur
        </h2>
        <p class="mt-3 text-gray-600">
          Retrouve moi sur
          <a
            href="https://www.youtube.com/channel/UCJ-pCPUnfgbzA6fDRMz14gA"
            target="_blank"
            class="text-green-500 hover:underline"
            >Youtube</a
          >,
          <a href="https://www.twitch.tv/lamacodeur" target="_blank">Twitch</a>,
          <a href="https://twitter.com/LamaCodeur" target="_blank">Twitter</a>,
          <a href="https://t.me/lamacodeur" target="_blank">Telegram</a> !<br />
          Le code de la vidéo d'aujourd'hui est aussi disponible sur
          <a href="https://github.com/lama-corp" target="_blank">GitHub</a> :)
        </p>
      </div>
      <div class="content-footer flex justify-center pt-4 space-x-2">
        <a
          href="https://twitter.com/LamaCodeur"
          target="_blank"
        >
          <span class="sr-only">Twitter</span>
          <IconTwitter class="w-6 h-6" />
        </a>

        <a
          href="https://github.com/lama-corp"
          target="_blank"
        >
          <span class="sr-only">GitHub</span>
          <IconGithub class="w-6 h-6" />
        </a>

        <a
          href="https://www.twitch.tv/lamacodeur"
          target="_blank"
        >
          <span class="sr-only">Twitch</span>
          <IconTwitch class="w-6 h-6 pt-0.5" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCJ-pCPUnfgbzA6fDRMz14gA"
          target="_blank"
        >
          <span class="sr-only">Youtube</span>
          <IconYoutube class="w-6 h-6" />
        </a>

        <a
          href="https://t.me/lamacodeur"
          target="_blank"
        >
          <span class="sr-only">Telegram</span>
          <IconTelegram class="w-6 h-6 pb-0.5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IconGithub from '~/assets/icons/icon-github.svg?inline'
import IconNuxt from '~/assets/icons/icon-nuxt.svg?inline'
import IconTelegram from '~/assets/icons/icon-telegram.svg?inline'
import IconTwitch from '~/assets/icons/icon-twitch.svg?inline'
import IconTwitter from '~/assets/icons/icon-twitter.svg?inline'
import IconYoutube from '~/assets/icons/icon-youtube.svg?inline'

export default {
  name: 'Welcome',
  components: {
    IconGithub,
    IconNuxt,
    IconTelegram,
    IconTwitch,
    IconTwitter,
    IconYoutube,
  },
}
</script>

<style scoped>
.content a {
  @apply text-green-500 hover:underline;
}
.content-footer a {
  @apply text-gray-400 hover:text-green-500;
}
</style>
