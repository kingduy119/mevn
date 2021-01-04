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
    this.$on('globalUser', function () {
      alert('globalUser')
      this.user = null
    })
  },
  computed: {
    globalUser () { return this.user }
  }
}
