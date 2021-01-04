export default {
  data () {
    return {
      user: null,
      projects: []
    }
  },
  created: function () {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.projects = JSON.parse(localStorage.getItem('projects')) || []
  }
}
