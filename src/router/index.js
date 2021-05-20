import Vue from 'vue'
import VueRouter from 'vue-router'
import api from '../api/apis.js'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('../views/News.vue'),
    children: [{
        path: '/',
        name: 'News',
        component: () => import('../views/News/allNews.vue'),
        meta: {
          require: false,
          name: 'News',
          title: '最新消息'
        }
      },
      {
        path: 'newsInfo/:id',
        name: 'newsInfo',
        component: () => import('../views/News/newsInfo.vue'),
        meta: {
          require: false,
          name: 'News',
          title: '最新消息'
        }
      },
    ],
  }, {
    path: '/serviceInfo',
    name: 'serviceInfo',
    component: () => import('../views/ServiceInfo.vue'),
        meta: {
          require: false,
          name: 'serviceInfo',
          title: '服務介紹'
        }
  },
  {
    path: '/oprationInfo',
    component: () => import('../views/OprationInfo.vue'),
    children: [{
        path: 'oprationRoute',
        name: 'oprationRoute',
        component: () => import('../views/OprationInfo/oprationRoute.vue'),
        meta: {
          require: false,
          name: 'oprationInfo',
          title: '服務說明'
        }
      },
      // {
      //   path: 'payMethod',
      //   name: 'payMethod',
      //   component: () => import('../views/OprationInfo/payMethod.vue'),
      //   meta: {
      //     require: false,
      //     name: 'oprationInfo',
      //     title: '營運資訊'
      //   }
      // },
    ],
  },
  {
    path: '/reservation',
    component: () => import('../views/Reservation.vue'),
    children: [{
      path: 'carGroup',
      name: 'carGroup',
      component: () => import('../views/Reservation/carGroup.vue'),
      meta: {
        require: true,
        name: 'reservation',
        title: '行程預約'
      }
    },{
      path: 'drts',
      name: 'drts',
      component: () => import('../views/Reservation/drts.vue'),
      meta: {
        require: true,
        name: 'reservation',
        title: '行程預約'
      }
    } ],
  },
  {
    path: '/member',
    component: () => import('../views/Member.vue'),
    children: [{
        path: 'signin',
        name: 'signin',
        component: () => import('../views/Member/signin.vue'),
        meta: {
          require: false,
          name: 'member',
          title: '會員登入'
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/Member/register.vue'),
        meta: {
          require: false,
          name: 'member',
          title: '會員註冊'
        }
      },
      {
        path: 'memberInfo',
        name: 'memberInfo',
        component: () => import('../views/Member/memberInfo.vue'),
        meta: {
          require: true,
          name: 'member',
          title: '會員基本資料'
        }
      },
      {
        path: 'orderInfo',
        name: 'orderInfo',
        component: () => import('../views/Member/orderInfo.vue'),
        meta: {
          require: true,
          name: 'member',
          title: '訂單資訊',
        }
      },
    ],
  },
  {
    path: '/contact',
    component: () => import('../views/Contact.vue'),
    children: [{
        path: 'trafficInfo',
        name: 'trafficInfo',
        component: () => import('../views/Contact/trafficInfo.vue'),
        meta: {
          require: false,
          name: 'contact',
          title: '交通資訊'
        }
      },{
        path: 'tollMethod',
        name: 'tollMethod',
        component: () => import('../views/Contact/tollMethod.vue'),
        meta: {
          require: false,
          name: 'contact',
          title: '收費方式'
        }
      },
      {
        path: 'contactInfo',
        name: 'contactInfo',
        component: () => import('../views/Contact/contactInfo.vue'),
        meta: {
          require: false,
          name: 'contact',
          title: '聯絡資訊'
        }
      },
    ],
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  if (!from.name) {
    router.app.$options.store.commit("SETFIRSTENTER", true);
  } else {
    router.app.$options.store.commit("SETFIRSTENTER", false);
  }
  if (to.meta.require) {
    api.GetLoginStatus().then((data) => {
      router.app.$options.store.state.userToken = window.localStorage.getItem("tokenClient");
      router.app.$options.store.state.userName = window.localStorage.getItem("userName");
      next();
    }).catch((error) => {
      router.app.$options.store.state.userToken = "";
      router.app.$options.store.state.userName = "";
      Vue.prototype.$message({
        message: "請先登入！",
        type: "warning",
      });
      next({
        path: "/member/signin"
      });
    });
  } else {
    next();
  }
})

export default router