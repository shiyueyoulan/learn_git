<template>
  <div class="container">
    <Child :send-msg="message" :send-age="age" :send-date="date"></Child>
  </div>

</template>
<script>
import Child from './Child'
export default {
  name: 'demo1',
  data () {
    return {
      message: '我很帅',
      date: '2019-6-11',
      age: '18'
    }
  },
  component: {
    Child
  }
}
</script>
