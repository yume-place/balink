<script setup>
  import { profileme } from '@/assets/info/my-profile.ts'
  const props = defineProps({
    name: "avatarscreen",
    emits: ["close"],
  })
</script>

<template>
    <div>
      <div class="modal-background " @click="$emit('close', false)">
        <div class="modal-ui">
          <header class="flex items-center justify-between">
            <!-- <h3>아바타 이미지</h3> -->
            <div class="flex items-center gap-2 cursor-pointer mb-4" @click="$emit('close', false)">
              <p>닫기</p>
              <Icon name="mingcute:close-line" size="24" style="color: #E4E3ED" />
            </div>
          </header>
          <img class="big-avatar-image" :src="profileme[0].avatar" />
          <footer class="flex gap-1 pt-5 items-center place-content-center">
            <p>출처:</p>
            <a :href="profileme[0].avtrsourceurl" target="_blank">{{ profileme[0].avtrsource }}</a>
          </footer>
        </div>
      </div>
    </div>
</template>