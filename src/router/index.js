import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/views/LoginPage'
import RegisterPage from '@/views/RegisterPage'
import HomePage from '@/views/HomePage'
import ProjectPage from '@/views/ProjectPage'
import ProfilePage from '@/views/ProfilePage'
import TemplatePage from '@/views/TemplatePage'

Vue.use(Router)


const routes = [
  { path: '/', name: 'Index', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/project', name: 'Project', component: ProjectPage },
  { path: '/profile', name: 'Profile', component: ProfilePage },
  { path: '/hello', name: 'HelloWorl', component: HelloWorld },
  { path: '/template', name: 'Template', component: TemplatePage },
]

export default new Router({
  routes
})
