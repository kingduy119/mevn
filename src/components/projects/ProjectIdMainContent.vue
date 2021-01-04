<template>
<div class="app-page___main-content project-detail">
    <div v-if="currentTab === 'Overview'">
        <project-overview-tab></project-overview-tab>
    </div>
    <div v-else-if="currentTab === 'Tables'">
        <project-tables-tab></project-tables-tab>
    </div>
    <div v-else-if="currentTab === 'Export'">
        <project-export-tab></project-export-tab>
    </div>
</div>
</template>

<script>
import ProjectExportTab from './tabs/ProjectExportTab.vue'
import ProjectOverviewTab from './tabs/ProjectOverviewTab.vue'
import ProjectTablesTab from './tabs/ProjectTablesTab.vue'
export default {
  components: {
    ProjectOverviewTab,
    ProjectTablesTab,
    ProjectExportTab
  },
  props: {
    currentTab: {type: String},
    tabs: {type: Array}
  }
}
</script>
