<template>
<main class="pt-4 page-content-container">
<div class="project mb-4" style="justify-content: stretch;">
   <div class="app-page">
      <project-id-slidebar
        :currentTab="currentTab"
        :tabs="tabs"
        :onTabSelect="onTabSelect"
      ></project-id-slidebar>
      <project-id-main-content
        :currentTab="currentTab"
        :tabs="tabs"
      ></project-id-main-content>
   </div>
</div>
</main>
</template>

<script>
import ProjectIdMainContent from '../components/projects/ProjectIdMainContent.vue'
import ProjectIdSlidebar from '../components/projects/ProjectIdSlidebar.vue'
// import { bus } from '../main'
export default {
  components: {
    ProjectIdSlidebar,
    ProjectIdMainContent
  },
  data () {
    return {
      currentTab: 'Overview',
      tabs: ['Overview', 'Tables', 'Export']
    }
  },
  methods: {
    onTabSelect: function (tab) {
      this.currentTab = tab
    }
  }
}
</script>
