<template>
<div class="list-prj-grid">
      <!----> 
      <div class="list-prj-grid">
         <strong class="sub-title">All Projects</strong> 
         <hr class="mt-1">
         <!----> 
         <div class="row justify-content-left">
            <div class="col-md-3 col-sm-4 col-lg-2 mb-5 gui-sm my-column">
               <project-item
                  v-for="prj in projects"
                  :key="prj.id"
                  :project="prj"
               ></project-item>
            </div>
         </div>

      </div> <!-- end list-prj-grid -->
   </div>
</template>

<script>
import ProjectItem from './ProjectItem.vue'
import { bus } from '../../main';
export default {
  components: { ProjectItem },
  data: () => { return {
     projects: [
        {id: 1, name: 'Project 1', description: 'description 11'},
      //   {id: 2, name: 'Project 2', description: 'description 22'},
     ]
  }},
  created: function() {
     bus.$on('prjEdit', (prjId) => {
        alert(`ON`);
        alert(`Edit: ${prjId}`);
     })
  }
}
</script>