<template>
<div class="prj-algorithms">
   <div class="toolbar">
      <div class="breadcrumbs sub-nav" style="display: flex; align-items: center;">
         <span class="sub-nav-link ellipsis-text breadcrumbs__project-name">
         project 1
         </span>
         <svg class="svg-inline--fa fa-caret-right fa-w-6 separate-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" data-fa-i2svg="">
            <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
         </svg>
         <strong class="static-label">
         Tables
         </strong>
         <div style="display: none; align-items: center;">
            <svg class="svg-inline--fa fa-caret-right fa-w-6 separate-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" data-fa-i2svg="">
               <path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
            </svg>
            <strong class="static-label">
            Columns
            </strong>
         </div>
      </div>
      <!---->
   </div>
   <div >
      <div class="d-flex justify-content-end gui-sm project-tables">
         <button disabled="disabled" type="button" class="md-button md-raised md-theme-default">
            <div class="md-ripple md-disabled">
               <div class="md-button-content">
                  Enable
               </div>
            </div>
         </button>
         <button disabled="disabled" type="button" class="md-button md-raised md-theme-default">
            <div class="md-ripple md-disabled">
               <div class="md-button-content">
                  Disable
               </div>
            </div>
         </button>
      </div>
      <div class="md-content md-table md-table--fixed md-table--dense md-table--overflow-visible my-table md-theme-default" name="tables" md-height="auto" value="" style="margin-bottom: 35px;">
         <!----> <!---->
         <div class="md-content md-table-content md-scrollbar md-theme-default">
            <table>
               <thead class="md-table-fixed-header-active">
                  <tr>
                     <!---->
                  </tr>
               </thead>
               <!---->
            </table>
         </div>
      </div>
      <div data-v-a19ff640="" name="table-loading-and-empty-state-component" class="table-no-record">
         <p data-v-a19ff640="" class="table-no-record__text">
            No table has been found!
         </p>
         <!---->
      </div>
      <div data-v-9aba8b66="" class="container" style="display: none;">
         <button data-v-9aba8b66="" type="button" class="md-button md-icon-button md-dense md-theme-default md-primary md-raised">
            <div class="md-ripple">
               <div class="md-button-content">
                  1
               </div>
            </div>
         </button>
      </div>
   </div>
   <!---->
</div>
</template>

<script>
export default {

}
</script>
