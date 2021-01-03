<template>
<main class="pt-4 page-content-container">
    <div class="prj-home-container d-flex flex-column">
        <!-- <validation-errors></validation-errors> -->
        <create-project-form></create-project-form>
        <project-list></project-list>
    </div>
</main>
</template>

<script>
import CreateProjectForm from '../components/projects/CreateProjectForm.vue'
import ProjectList from '../components/projects/ProjectList.vue'

export default {
    components: {
        CreateProjectForm,
        ProjectList,
    }
}
</script>
        