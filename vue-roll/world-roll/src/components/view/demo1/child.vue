<template>
  <div class="container">{{sendMsg}}</div>
</template>
<script>
export default {
  name: 'demoChild',
  props: {
    sendMsg:{
      type:String,
      require:true
    },
    sendAge:{
      type:String,
      require:true
    },
    sendDate:{
      type:String,
      require:true
    }
  },
  data () {
    return {
      
    }
  }
}
</script>
