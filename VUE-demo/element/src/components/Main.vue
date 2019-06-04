<template>
  <div class="main-content">
    <Header></Header>
    <Menu></Menu>
  </div>
</template>
<script>
import Header from '@/components/common/Hidder'
import Menu from '@/components/common/Menu'
export default {
  name: 'mainContent',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: {
    Header,
    Menu
  }
}
</script>
