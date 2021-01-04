<template>
<div>
    <div class="md-dialog" md-active="true">
    <div class="md-dialog-container md-theme-default" tabindex="-1">
        <span class="md-dialog-title md-title">Confirm</span> 

        <div class="md-dialog-content md-theme-default">Project <b>project 1</b> is going to be removed. Are you sure?</div>
        <div class="md-dialog-actions">
            <button type="button" class="md-button md-theme-default">
                <div class="md-ripple">
                <div class="md-button-content">Cancel</div>
                </div>
            </button>
            <button type="button" class="md-button md-primary md-theme-default">
                <div class="md-ripple">
                <div class="md-button-content">OK</div>
                </div>
            </button>
        </div>

    </div>
    </div>
    <div class="md-overlay md-fixed md-dialog-overlay"></div>
</div>
</template>

<script>
export default {
    
}
</script>