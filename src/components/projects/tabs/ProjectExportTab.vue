<template>
<div class="gui-sm">
    <div class="row mt-4">
        <button type="submit" class="btn btn-primary mx-4">
        Save Config
        </button>
        <form action="/project/export" method="post" target="_blank">
            <input type="text" name="id" hidden="hidden" />
            <input type="hidden" name="_token" value="ulHtbgqoGBHPB1uY3zDMWSvqXmLnAfkn2zkV6wmm" />
            <button type="submit" class="btn btn-secondary">
                Download
            </button>
        </form>
    </div>

    <div class="md-checkbox ml-2 md-theme-default">
        <div class="md-checkbox-container">
            <div class="md-ripple">
                <input id="md-checkbox-0akh6rbr" type="checkbox" true-value="1" false-value="0" />
            </div>
        </div>
        <label for="md-checkbox-0akh6rbr" class="md-checkbox-label">
        Start Masking when saved config
        </label>
    </div>

    <div class="mt-4">
        <i>
            9a6d4109ddcdf9704cad9d6a6bc48e0c.conf
            <hr>
        </i>
        <div>
            <pre>1:0,1,0,1
            CSV,./masked/9a6d4109ddcdf9704cad9d6a6bc48e0c
            </pre>
        </div>
    </div>
    <div class="log">
        <i>status.log</i>
        <div class="content">
            <pre></pre>
        </div>
        <button class="btn btn-primary btn-sm d-inline mt-1">
        Refresh
        </button>
    </div>
</div>
</template>

<script>
export default {

}
</script>
