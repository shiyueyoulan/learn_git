前端路由实现方式  
history.pushState() 改变url的path部分 和hashChange实现方案不一样的地方是改变url部位不一样(#home),前端就可以处理路由了，
支持前后切换  浏览历史 history 用onpopstate监听