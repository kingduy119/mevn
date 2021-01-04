<template>
<main class="pt-4 page-content-container">
   <div class="template-container">
      <span class="header">
         Template
      </span>
      <span class="header__total">
         {{ templates.length }} TOTAL
      </span>
   <div class="md-content md-table md-table--fixed md-table--dense my-table md-theme-default" name="template" value="">
      <div class="md-content md-table-content md-scrollbar md-theme-default">

         <template-table-selection></template-table-selection>

      </div>
   </div>

   <div class="action">
      <md-button class="md-raised md-primary">Add</md-button>
      <md-button class="md-raised" style="display: none;">Remove</md-button>
   </div>
   <div>
      <!---->
   </div>
   <div class="container" style="display: none;">
      <button type="button" class="md-button md-icon-button md-dense md-theme-default md-primary md-raised">
         <div class="md-ripple">
            <div class="md-button-content">
               1
            </div>
         </div>
      </button>
   </div>
</div>
</main>
</template>

<script>
import TemplateTableSelection from '../components/templates/TemplateTableSelection.vue'
export default {
  components: {
    TemplateTableSelection
  },
  data () {
    return {
      checkAll: false,
      tbKeys: [false, 'Id', 'Name', 'Masking', 'Params', 'Action'],
      templates: [
        {checked: true, id: '1', name: 'name 1', masking: 'masking 1', params: 'params 1', action: 'action 1'},
        {checked: false, id: '1', name: 'name 1', masking: 'masking 1', params: 'params 1', action: 'action 1'}
      ]
    }
  }
}
</script>
