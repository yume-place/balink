<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const signUpWithEmail = async () => {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })
  if (error) console.log(error)
  else {
    alert('사용자 등록이 완료되었어요. 이제 이메일을 확인하고 인증해주세요!')
  }
}
</script>
<template>
  <div>
    <button @click="signUpWithEmail">
      Sign Up with E-Mail
    </button>
    <input
      v-model="email"
      type="email"
    />
    <input
      v-model="password"
      type="password"
    />
  </div>
</template>
