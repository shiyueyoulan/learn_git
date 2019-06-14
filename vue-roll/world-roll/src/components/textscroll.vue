<template>
  <section>
    <div class="textscroll">
      <transition-group tag="ul" :name="scrolltype">
        <li v-for="(item,index) in datalist" :key="index" v-show="index === count">
          <p>{{item.text}}</p>
        </li>
      </transition-group>
    </div>
  </section>
</template>
<script>
import { setTimeout, setInterval } from 'timers';
import { constants } from 'crypto';
export default {
  data() {
    return {
      count: 0,
    }
  },
  props: ['scrolltype',"datalist"],
  created() {
    setInterval(()=>{
      if(this.count === this.datalist.length-1){
        this.count = 0;
      }else{
      this.count++;
      }
      console.log(this.count)
    },2000)
    // setTimeout(()=>{
    //   this.count++;
    // },2000)  
  },
}
</script>
<style scoped>
ul {
  margin: 5px 0;
  padding: 0;
  background-color: #ffffff;
  overflow: hidden;
  height: 40px;
}
li{
  height: 40px;
  list-style-type: none;
  line-height: 1;
  overflow: hidden;
}
/* 向上滚动 */
.scroll-up-enter-active{
  transition: all 1s ease;
}
.scroll-up-leave-active{
  transition: all 1s ease;
}
.scroll-up-enter{
  transform: translate3d(0,100%,0);
}
.scroll-up-leave-to{
  transform: translate3d(0,-100%,0);
}
/* 向右滚动 */
.scroll-left-enter-active{
  transition: all 1s ease;
}
/* .scroll-left-leave-active{
  transition: all 1s ease;
} */
.scroll-left-enter{
  transform: translate3d(100%,0,0);
}
.scroll-left-leave-to{
  transform: translate3d(-100%,0,0);
}
</style>