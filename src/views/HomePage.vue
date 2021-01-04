<template>
<main class="pt-4 page-content-container">
    <div class="prj-home-container d-flex flex-column">

        <create-project-form
            :hasNameError="hasNameError"
            @onCreateProject="createProject"
        ></create-project-form>

        <project-list
            :projects="projects"
            :editProject="editProject"
            :deleteProject="deleteProject"
        ></project-list>

    </div>
</main>
</template>

<script>
import CreateProjectForm from '../components/projects/CreateProjectForm.vue'
import ProjectList from '../components/projects/ProjectList.vue'
import globalMixins from '../mixins/globalMixins'

let projectId = 1

export default {
  components: {
    CreateProjectForm,
    ProjectList
  },
  mixins: [globalMixins],
  data () {
    return {
      hasNameError: false
    }
  },
  created () {
    if (!this.user) {
      return this.$router.push({name: 'Login'})
    }
  },
  methods: {
    createProject (data) {
      let {name, description} = data
      let exits = this.projects.some(prj => prj.name === name)
      if (exits) {
        this.hasNameError = true
      } else {
        this.hasNameError = false
        this.projects.push({ id: projectId++, name, description })
        localStorage.setItem('projects', JSON.stringify(this.projects))
      }
    },
    editProject: (name) => {
      alert(`Edit project: ${name}`)
    },
    deleteProject: (name) => {
      alert(`Delete project: ${name}`)
    }
  }
}
</script>
