<template>
    <div class="md-card md-theme-default md-with-hover">
        <a>
            <div class="md-ripple">
                <div class="md-card-header card-header">
                <div class="prj-name">
                    {{ project.name }}
                </div>
                <div class="p-1 m-0">
                    <svg  class="svg-inline--fa fa-copy fa-w-14 fa-lg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                    </svg>
                    <!-- <i class="far fa-copy fa-lg"></i> -->
                </div>
                </div>
                <div class="md-card-content card-body ellipsis-text">
                    {{ project.description }}
                </div>
            </div>
        </a>

        <div class="md-card-actions md-alignment-right">
            <button @click="edit(project.id)" type="button" class="md-button md-dense md-theme-default">
                <div class="md-ripple">
                <div class="md-button-content">
                    Edit
                </div>
                </div>
            </button>
            <button @click="$emit('deletePrj', 123)" type="button" class="md-button md-dense md-theme-default">
                <div class="md-ripple">
                <div class="md-button-content">
                    Delete
                </div>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
import { bus } from '../../main'
export default {
    props: {
        project: {type: Object, required: true}
    },
    computed: {
        edit: function(prjId) {
            alert(`EMIT: ${prjId}`);
            bus.$emit('prjEdit', prjId);
        }
    }
}
</script>