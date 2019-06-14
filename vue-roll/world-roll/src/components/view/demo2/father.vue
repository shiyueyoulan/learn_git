<template>
  <div class="container">{{msg}}
    <a-child @wn='getWn'></a-child>
  </div>
</template>
<script>
import aChild from './child'
export default {
  name: 'demoChild',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    aChild
  },
  methods: {
    getWn (data) {
      this.msg = data;
    }
  },
}
</script>
