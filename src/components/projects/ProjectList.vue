<template>
<div class="list-prj-grid">
      <!---->
      <div class="list-prj-grid">
         <strong class="sub-title">All Projects</strong>
         <hr class="mt-1">
         <!---->
         <div class="row justify-content-left">
            <project-item
               v-for="prj in projects"
               :key="prj.id"
               :project="prj"
               @onEdit="editProject(prj.name)"
               @onDelete="deleteProject(prj.name)"
            ></project-item>
         </div>
      </div> <!-- end list-prj-grid -->
   </div>
</template>

<script>
import ProjectItem from './ProjectItem.vue'

export default {
  components: { ProjectItem },
  props: {
    projects: [],
    editProject: {type: Function, required: true},
    deleteProject: {type: Function, required: true}
  }
}
</script>
