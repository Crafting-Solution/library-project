import { createRouter, createWebHistory } from 'vue-router'
import Defaultlayout from '@/layout/defaultlayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: ()=> import('../views/AdminLanding.vue'),
      props: true
    },
    {
      path: '/',
      component: Defaultlayout,
      children: [
        {
          path: 'user',
          name: 'user',
          component: ()=> import('../views/Users.vue'),
          props: true
        },
        {
          path: 'new-user/register',
          name: 'newuser',
          component: () => import('../views/NewUser.vue'),
          props: true
        },
        {
          path: 'loans',
          name: 'loans',
          component: ()=> import('../views/Loans.vue'),
          props: true
        },
        {
          path: 'new-loan',
          name: 'newloan',
          component: ()=> import('../views/NewLoan.vue'),
          props: true
        },
        {
          path: 'settings',
          name: 'settings',
          component: ()=> import('../views/Settings.vue'),
          props: true
        },
        {
          path: 'books',
          name: 'books',
          component: ()=> import('../views/Books.vue'),
          props: true
        },
        {
          path: 'audit-logs',
          name: 'auditlogs',
          component: ()=> import('../views/AuditLogs.vue'),
          props: true
        },
        {
          path: 'edit-profile',
          name: 'editprofile',
          
          props: true
        },
        {
          path: 'signout/user',
          name: 'signout',
          
          props: true
        }
      ]
    }
  ]
})

export default router
