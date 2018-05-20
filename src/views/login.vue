<template>
  <div>
    <div
      is=loginBackground
    >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import loginBackground from '@/components/login/loginBackground.vue'

export default {
  name: 'home',
  components: {
    loginBackground
  }
}
</script>
