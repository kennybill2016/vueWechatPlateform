import Vue from 'vue'
import App from './App'
import Router from './router.js' //路由地址
import Store from './vuex/store/index'
import IView from 'iview' //Iview
import 'iview/dist/styles/iview.css' // 使用 IVIEW CSS
import './assets/style/common/customize.less' // 定制公共 less
import Toast from '../../libs/toast/' // 定制吐司
import Util from '../../libs/util' // 工具
import Http from '../../libs/http' //请求工具
import Plugin from '../../libs/plugin/formatDate' //插件
import '../../libs/filter' //过滤器

Vue.use(Plugin)
Vue.use(Toast)
Vue.use(Http)
Vue.use(IView)

Vue.config.productionTip = false

Router.beforeEach(({meta, path}, from, next) => {
    Util.title(meta.title)
    let auth = meta.routeAuth == false ? false : true
    //获取用户是否登陆
    let user = window.localStorage.getItem('merchantUser');
    let info = window.localStorage.getItem('merchantInfo');
    let token = window.localStorage.getItem('merchantToken');
    if (auth && !token && !user && !info && path != '/login') {
        next({path: '/login'})
    } else if (path == '/login' && token) {
        next({path: '/'})
    }
    next()
})

new Vue({
    el: '#app',
    router: Router,
    store: Store,
    template: '<App/>',
    components: {App}
})
