<script setup>
const supabase = useSupabaseClient()

const formFields = reactive({
  displayname: '',
  username: '',
  meinoneword: ''
})

const fieldList = [
  { key: 'email', label: '이메일', help: '로그인에 사용할 이메일 주소입니다.' },
  { key: 'password', label: '비밀번호', help: '보안을 위해 강력한 비밀번호를 설정하세요.' },
  { key: 'displayname', label: '표시이름', help: '남들에게 보여지는 이름이에요.' },
  { key: 'username', label: '고유이름', help: '고유한 사용자 이름으로, 다른 사용자와 중복될 수 없어요.' },
  // { key: 'website', label: '웹사이트', help: '개인 웹사이트나 블로그 링크를 입력하세요.' },
  { key: 'meinoneword', label: '한마디', help: '자신을 짧은 한마디로 표현해보세요.' }
]

const signUp = async () => {
  const { email, password } = formFields

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    console.error('회원가입 실패:', error.message)
    return
  }
  else {
    console.log('회원가입 성공:', data)
    alert('회원가입 성공! 이메일 인증 필요.')
  }

  const userId = data.user?.id
  if (userId) {
    const { error: profilesError } = await supabase
      .from('profiles')
      .insert([
        {
          user_id: userId,
          displayname: formFields.displayname,
          username: formFields.username,
          meinoneword: formFields.meinoneword,
          created_at: new Date(),
        },
      ])

    if (profilesError) {
      console.error('프로필 생성 실패:', profilesError.message)
    }
  }
}

</script>
<template>
  <main>
    <h1>회원가입</h1>
    <div>
      <form @submit.prevent="signUp(formFields.email, formFields.password)">
        <div v-for="field in fieldList" :key="field.key">
          <label class="group-p" :for="field.key">{{ field.label }}</label>
          <input v-model="formFields[field.key]" :id="field.key" :placeholder="field.help" />
        </div>
        <button class="group-p" type="submit">회원가입</button>
      </form>
    </div>
  </main>
</template>
