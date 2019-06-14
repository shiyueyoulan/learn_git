<template>
  <div class="container">
    <button @click="sendMsg">ok</button>
  </div>
</template>
<script>
export default {
  name: 'demoChild',
  data () {
    return {
      message: '我很帅'
    }
  },
  methods:{
    sendMsg () {
      this.$emit('wn', this.message)
    }
  }
}
</script>
