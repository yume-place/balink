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
  
  import { ref } from 'vue'
  import './assets/css/main.css'
  import './assets/css/font.css'
  import { profileme } from './assets/info/my-profile.ts'
  import { langname } from './assets/info/langname.ts'
  import { userContent } from './assets/info/links.ts'
  import { footerlinks } from './assets/info/footerlinks'
  import modal from './components/avatarmodal.vue'

  const isModalOpen = ref(false)
</script>
<template>
  <modal v-if="isModalOpen" @close="isModalOpen = false" />
  <div id="app" class="max-w-5xl mx-auto">
    <header v-for="(profileGroup) in profileme" :key="profileGroup" class="flex flex-col col-span-2 lg:flex-row"> <!-- 프로필 그룹((좌)프로필 정보, (우)자기소개, 관심사, 등) -->
      <div class="flex flex-col w-full"> <!-- 프로필과 언어별 표시이름이 있는 곳 -->
        <section class="flex items-center gap-4"> <!-- 프로필 정보 -->
            <img @click="isModalOpen = true" class="avatar" :src="profileGroup.avatar" alt="Avatar"/>
          <div class="flex flex-col pb-1 gap-0.5"> <!-- 프로필 정보 내부 -->
            <div class="flex items-center gap-2">
              <h2>{{ profileGroup.displayname }}</h2>
              <div class="flex items-center">
                <p>@</p>
                <p>{{ profileGroup.username }}</p>
              </div>
            </div>
            <div  class="flex items-center">
              <p>"</p>
              <p>{{ profileGroup.MeInOneWord }}</p>
              <p>"</p>
            </div>
          </div>
        </section>
        <section class="flex flex-col w-full gap-5"> <!-- [프레임] 언어별 표시이름 그룹과 자기소개, 관심사 그룹 -->
          <div class="p-1 flex flex-col"> <!-- 언어별 표시이름 그룹 -->
            <h4 class="group-h4">언어별 표시이름</h4>
            <ul class="flex mt-1 gap-8">
              <li v-for="(langn, i) in langname" :key="i" class="flex items-center gap-2.5">
                <img class="flag" :src="langn.icon" :alt="`${langn.lang} Flag`" />
                <div class="flex flex-col gap-0">
                  <span>{{ langn.lang }}</span> <!-- 해당 국가 이름 -->
                  <h5>{{ langn.name }}</h5> <!-- 그 국가에 맞는 이름 -->
                </div>
              </li>
            </ul>
          </div> <!-- 언어별 표시이름 그룹 [끝지점] -->
        </section> <!-- [프레임] 언어별 표시이름 그룹과 자기소개, 관심사 그룹 [끝지점] -->
      </div> <!-- 프로필과 언어별 표시이름이 있는 곳 [끝지점] -->
      <div class="isme-group"> <!-- 자기소개와 관심사 그룹 -->
        <section class="flex flex-col w-full gap-1 pr-3"> <!-- 자기소개 -->
          <h4 class="group-h4">자기소개</h4>
          <p>{{ profileGroup.about }}</p>
        </section> <!-- 자기소개 [끝지점] -->
        <section class="flex flex-col gap-1 w-full"> <!-- 관심사 -->
          <h4 class="group-h4">관심사</h4>
          <ul class="flex flex-row gap-2">
            <li v-for="(interest, i) in profileGroup.interests" :key="i" class="tag">{{ interest.name }}</li>
          </ul>
        </section> <!-- 관심사 [끝지점] -->
      </div> <!-- 자기소개와 관심사 그룹 [끝지점] -->
    </header>
    <section>
      <h3 class="group-h3">링크</h3>
      <section>
        <h4>{{ userContent.linksSectionTitle }}</h4>
        <ul class="flex flex-col gap-2 w-full mt-1 mb-5">
          <li v-for="(link, i) in userContent.links.slice(0)" :key="i">
            <a class="link-card-ui" :href="link.url" target="_blank" rel="noopener noreferrer">
              <div class="link-card-content">
                <component :is="link.icon" size="24" />
                <div class="flex flex-col sm:flex-row sm:gap-4 justify-start">
                  <h4>{{ link.name }}</h4>
                  <p class="mt-1">{{ link.description }}</p>
                </div>
              </div>
              <Icon name="mingcute:arrow-right-up-line" style="color: #E4E3ED" size="24" />
            </a>
          </li>
        </ul>
        <section>
          <h4>{{ userContent.playlistsSectionTitle }}</h4>
          <ul class="grid grid-cols-3 md:grid-cols-6 gap-2 w-full mt-2">
            <li v-for="(playlist, i) in userContent.playlists.slice(0)" :key="i" class="col-span hover:opacity-80">
              <a :href="playlist.url" target="_blank" rel="noopener noreferrer">
                <div class="flex flex-col">
                  <img class="rounded-xl" alt="플레이리스트 커버" :src="playlist.cover" />
                  <h4 class="mt-1">{{ playlist.title }}</h4>
                </div>
                <div class="flex items-center gap-2">
                  <component :is="playlist.icon" size="20" />
                  <p>{{ playlist.sitename }}</p>
                </div>
              </a>
            </li>
          </ul>
        </section>  
      </section>
    </section>
    <footer v-for="(profile) in profileme" :key="profile" class="flex flex-col mt-20"> <!-- 푸터 -->
      <span class="text-center text-sm text-gray-500">© 2025 {{ profile.displayname }}. All rights reserved.</span>
      <span class="text-center text-sm text-gray-500">Designed & made with ❤️ using <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer" class="sm-a">Nuxt.js</a> by <a class="sm-a" href="https://x.com/baboribu">{{ profile.displayname }}</a>.</span>
      <ul class="flex flex-row justify-center gap-4 mt-5">
        <li v-for="(footer, i) in footerlinks" :key="i" class="flex justify-center"> <!-- 링크 아이콘 li -->
          <a class="flex flex-row justify-center" :href="footer.url" target="_blank" rel="noopener noreferrer">
            <component :is="footer.icon" fill="#E4E3ED" size="24"/>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>