<script setup>
  const user = ref(null)

  const fetchMe = async () => {
    user.value = await $fetch('@/server/api/me')
  }
</script>

<template>
  <div>
    <h1>Index Page</h1>
    <p>이 페이지는 index.vue입니다.</p>
    <button @click="fetchMe">Fetch Me</button>
    <div v-if="user">
      <p>User: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>