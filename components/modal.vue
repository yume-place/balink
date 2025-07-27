<script>
  export default {
    name: "modal",
    emits: ["close"],
  }
  import { profileme } from '@/assets/info/my-profile.ts'
</script>

<template>
    <div>
      <div class="modal-background " @click="$emit('close', false)">
        <div class="modal-ui">
          <header class="flex items-center justify-between">
            <h3>아바타 이미지</h3>
            <div class="flex items-center gap-2 cursor-pointer" @click="$emit('close', false)">
              <p>닫기</p>
              <Icon name="mingcute:close-line" size="24" style="color: #E4E3ED" />
            </div>
          </header>
          <img class="big-avatar-image" src="/d80eac4321e1b29abfbef07fa38d660c-removebg-preview.png" alt="Avatar Image" />
          <footer v-for="(profile) in profileme" :key="profile" class="flex gap-1 pt-5 items-center place-content-center">
            <p>출처:</p>
            <a>{{ profile.avtrsource }}</a>
          </footer>
        </div>
      </div>
    </div>
</template>