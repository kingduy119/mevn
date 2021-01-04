<template>
  <div>
    <md-table v-model="templates" md-card @md-selected="onSelect">
      <!-- <md-table-toolbar>
        <h1 class="md-title">With auto select and alternate headers</h1>
      </md-table-toolbar> -->

      <!-- <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar> -->

      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
        <md-table-cell md-label="#" md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Masking" md-sort-by="masking">{{ item.masking }}</md-table-cell>
        <md-table-cell md-label="Params" md-sort-by="params">{{ item.params }}</md-table-cell>
        <md-table-cell md-label="Action" md-sort-by="action">{{ item.action }}</md-table-cell>
      </md-table-row>
    </md-table>
    <!-- <p>Selected:</p>
    {{ selected }} -->
  </div>
</template>

<script>
export default {
  name: 'TemplateTableSelection',
  data: () => ({
    selected: [],
    templates: [
      {
        id: 1,
        name: 'name 1',
        masking: 'masking 1',
        params: 'param 1',
        action: 'param 2'
      },
      {
        id: 2,
        name: 'name 1',
        masking: 'masking 1',
        params: 'param 1',
        action: 'param 2'
      }
    ]
  }),
  methods: {
    onSelect (items) {
      this.selected = items
    },
    getAlternateLabel (count) {
      let plural = ''

      if (count > 1) {
        plural = 's'
      }

      return `${count} user${plural} selected`
    }
  }
}
</script>

<style scoped>
.md-table {
  margin-top: 16px;
}
.md-table-cell {
  text-align: left;
}
</style>
