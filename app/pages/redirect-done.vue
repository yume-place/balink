<script setup lang="ts">
const route = useRoute()
const supabase = useSupabaseClient()

onMounted(async () => {
  const { error } = await supabase.auth.exchangeCodeForSession(route.query.code as string)
  if (error) {
    console.error('다음과 같은 이유로 실패했습니다:', error)
  } else {
    console.log('인증 완료됨')
    navigateTo('/account')
  }
})
</script>

<template>
  <div>
    <h1>잠시만 기다려주세요</h1>
    <p>인증 중입니다...</p>
  </div>
</template>