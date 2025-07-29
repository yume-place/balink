<script setup>
import { footerlinks } from '@/assets/info/footerlinks'
import { profileme } from '@/assets/info/my-profile'
</script>

<template>
  <div>
    <h1>test.vue</h1>
    <p>이 페이지는 test.vue입니다.</p>
  </div>
  <footer v-for="(profile) in profileme" :key="profile" class="flex flex-col mt-20"> <!-- 푸터 -->
      <span class="text-center text-sm text-gray-500">© 2025 {{ profile.displayname }}. All rights reserved.</span>
      <span class="text-center text-sm text-gray-500">사용 폰트: 오뮤 다예쁨체, 프리텐다드 JP 베리어블</span>
      <span class="text-center text-sm text-gray-500">Designed & made with ❤️ using <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer" class="sm-a">Nuxt.js</a> by <a class="sm-a" href="https://x.com/baboribu">{{ profile.displayname }}</a>.</span>
      <ul class="flex flex-row justify-center gap-4 mt-5">
        <li v-for="(footer, i) in footerlinks" :key="i" class="flex justify-center"> <!-- 링크 아이콘 li -->
          <a class="flex flex-row justify-center" :href="footer.url" target="_blank" rel="noopener noreferrer">
            <component :is="footer.icon" fill="#E4E3ED" size="24"/>
          </a>
        </li>
      </ul>
    </footer>
</template>