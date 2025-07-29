<script setup>
  useSeoMeta({
    title: profileme[0].displayname + '의 페이지',
    description: '...',
    ogTitle: profileme[0].displayname,
    ogDescription: '...',
    ogUrl: 'https://babo.yume.place',
    ogImage: 'https://avatars.githubusercontent.com/u/71020988?v=4',
    twitterTitle: profileme[0].displayname,
    twitterDescription: '...',
    twitterCard: 'summary',
    twitterImage: 'https://avatars.githubusercontent.com/u/71020988?v=4'
  })

  useHead({
    htmlAttrs: {
      lang: 'ko-KR'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: profileme[0].avatar
      }
    ]
  })
</script>

<template>
  <h1>kjdsfjdsof</h1>
</template>