<script setup>
import { useAuth } from '@/composables/useAuth'
const { signIn } = useAuth()

import { ref } from 'vue'

const email = ref('')
const password = ref('')

const signInWithPassword = async () => {
  try {
    await signIn(email.value, password.value)
    alert('로그인 성공!')
    navigateTo('/account')
  } catch (err) {
    alert('로그인 실패: ' + err.message)
    console.error('로그인 실패:', err)
  }
}
</script>
<template>
  <div>
    <input v-model="email" type="email" placeholder="이메일" />
    <input v-model="password" type="password" placeholder="비밀번호" />
    <button @click="signInWithPassword">로그인</button>
  </div>
</template>
