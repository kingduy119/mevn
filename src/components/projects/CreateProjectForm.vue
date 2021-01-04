<template>
    <form id="form" class="create-project-home" >
      <div class="card">
         <div class="card-body">
            <div class="form-group">
                  <md-field :class='errName'>
                     <md-input v-model="name" placeholder="Project" md-counter="100"  @focus="showCollapse=true" required />
                     <span class="md-error">The name has already been taken.</span>
                  </md-field>
            </div>

            <div id="collapse_desc" :class="['collapse', showCollapse ? 'show' : '']">
               <md-field>
                  <md-textarea v-model="description" placeholder="Description" md-counter="500" maxlength="500" />
               </md-field>

               <div style="text-align: center;">
                  <md-button class="md-raised" @click="showCollapse=false" >
                     Cancel
                  </md-button>

                  <!-- Create Button -->
                  <md-button v-if="enableCreate" class="md-raised md-primary" @click="$emit('onCreateProject', {name, description})" >
                     Create
                  </md-button>
                  <md-button v-else class="md-raised" disabled >
                     Create
                  </md-button>

               </div>
            </div>
         </div><!-- end card-body -->
      </div><!-- end card -->
   </form>
</template>

<script>
export default {
  name: 'CreateProjectComponent',
  props: {
    hasNameError: {type: Boolean, default: false}
  },
  data: () => {
    return {
      name: '',
      description: '',
      showCollapse: false
    }
  },
  computed: {
    enableCreate () { return (this.name.length > 0 && this.description.length > 0) },
    errName () { return { 'md-invalid': this.hasNameError } }
  }
}
</script>
