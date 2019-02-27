import Vue from 'vue'
import Router from 'vue-router'
import first from './views/first.vue'
import second from './views/second.vue'
import spa1 from './views/spa1.vue'
import build from './components/build.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: first},
    {path: '/second', component: second,children:[
        {path: '', component: spa1},
        {path: 'spa1', component: spa1},
        {path: 'build', component: build},
    ]}
  ]
})
