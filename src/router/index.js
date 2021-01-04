import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/views/LoginPage'
import RegisterPage from '@/views/RegisterPage'
import HomePage from '@/views/HomePage'
import ProjectIdPage from '@/views/ProjectIdPage'
import ProfilePage from '@/views/ProfilePage'
import TemplatePage from '@/views/TemplatePage'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Index', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/project/:id', name: 'Project', component: ProjectIdPage },
  { path: '/profile', name: 'Profile', component: ProfilePage },
  { path: '/templates', name: 'Template', component: TemplatePage },
  { path: '/hello', name: 'HelloWorl', component: HelloWorld }
]

export default new Router({
  routes
})
