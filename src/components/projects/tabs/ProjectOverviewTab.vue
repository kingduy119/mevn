<template>
<div >
    <div class="editing-popup prj-name" value="project 1" style="width: 100%; font-size: 18px;">
        <div style="width: 100%;">
            <pre class="pre-default" style="margin: 0px; font: inherit;">project 1</pre>
            <!---->
        </div>
        <div class="popup-content"><textarea maxlength="100" rows="5" placeholder="Add comment here" class="form-control" style="width: 100%; height: 100%; resize: none;"></textarea></div>
    </div>
    <span class="md-error--custom"> </span>
    <div class="mb-2"></div>
    <div class="editing-popup prj-desc" value="description 1" style="width: 100%;">
        <div style="width: 100%;">
            <pre class="pre-default" style="margin: 0px; font: inherit;">description 1</pre>
            <!---->
        </div>
        <div class="popup-content"><textarea maxlength="500" rows="5" placeholder="Add comment here" class="form-control" style="width: 100%; height: 100%; resize: none;"></textarea></div>
    </div>
    <span class="md-error--custom"> </span>
    <hr class="md-divider md-theme-default">
    <div class="my-2 prj-config">
        <div class="py-1">
            <div class="d-inline-block col-3 gui-sm">
            <div class="d-flex align-items-baseline use-seed justify-content-between">
                <span >Seed Value</span>
                <div class="md-checkbox md-theme-default md-checked">
                    <div class="md-checkbox-container">
                        <div class="md-ripple"><input id="md-checkbox-a0d7mzi4" type="checkbox" true-value="1" false-value="0"> </div>
                    </div>
                    <label for="md-checkbox-a0d7mzi4" class="md-checkbox-label">
                    Enable
                    </label>
                </div>
            </div>
            </div>
            <div class="d-inline-block col-3">
            <div class="md-field md-field--modify-height md-theme-default md-has-value">
                <input type="number" min="0" max="50000" id="md-input-g2f2qssri" class="md-input"> <span class="md-error"></span> <!----> <!----> <!---->
            </div>
            </div>
        </div>
        <div class="py-1">
            <span class="d-inline-block col-3">Header Lines</span>
            <div class="d-inline-block col-3">
            <div class="md-field md-field--modify-height md-theme-default md-required md-has-value">
                <input type="number" min="0" id="md-input-vkmo7sedp" required="required" class="md-input"> <span class="md-error"></span> <!----> <!----> <!---->
            </div>
            </div>
        </div>
        <div class="py-1">
            <span class="d-inline-block col-3">Trial Lines</span>
            <div class="d-inline-block col-3">
            <div class="md-field md-field--modify-height md-theme-default md-required md-has-value">
                <input type="number" min="0" id="md-input-4c012tu5q" required="required" class="md-input"> <span class="md-error"></span> <!----> <!----> <!---->
            </div>
            </div>
        </div>
        <div class="py-1">
            <span class="d-inline-block col-3">Multi-threads</span>
            <div class="d-inline-block col-3">
            <div class="md-field md-field--modify-height md-theme-default md-required md-has-value">
                <input type="number" min="0" max="1" id="md-input-2xj7slnlp" required="required" readonly="readonly" class="md-input"> <span class="md-error"></span> <!----> <!----> <!---->
            </div>
            </div>
        </div>
        <div class="py-1">
            <span class="d-inline-block col-3">Project Signature</span>
            <div class="d-inline-block col-3">
            <div class="md-field md-field--modify-height md-theme-default md-disabled md-has-value">
                <input type="text" id="md-input-8t72w321" disabled="disabled" class="md-input"> <!----> <!----> <!---->
            </div>
            </div>
        </div>
    </div>
    <div hidden="hidden" class="row-of-input mt-4">
        <strong >Data Source</strong>
        <select class="item">
            <option value="0" selected="selected">
            Csv
            </option>
            <option value="1">
            Database
            </option>
        </select>
    </div>
    <div class="project-resources-container">
        <div class="md-content md-table md-table--fixed md-table--dense my-table md-theme-default" name="project-resources" md-model-id="" value="">
            <!----> <!---->
            <div class="md-content md-table-content md-scrollbar md-theme-default">
            <table>
                <thead class="md-table-fixed-header-active">
                    <tr>
                        <!---->
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="0">
                        <div class="md-empty-state md-table-empty-state md-theme-default">
                            <div class="md-empty-state-container">
                                <!----> <!---->
                                <p class="md-empty-state-description">No source found</p>
                            </div>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
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
        <div class="row-flex mt-2" style="justify-content: center;">
            <!---->
            <button type="button" class="md-button md-raised md-primary md-theme-default">
            <div class="md-ripple">
                <div class="md-button-content">
                    Add CSV
                </div>
            </div>
            </button>
            <button type="button" class="md-button md-flat md-elevation-1 md-theme-default" style="display: none;">
            <div class="md-ripple">
                <div class="md-button-content">
                    Remove
                </div>
            </div>
            </button>
        </div>
        <!---->
        <div class="md-subheading mt-4">
            Output Type
        </div>
        <div class="radio-box-container pl-5">
            <div class="radio-box-container__unit">
            <div class="md-radio md-theme-default md-checked">
                <div class="md-radio-container">
                    <div class="md-ripple"><input type="radio" id="md-radio-0nlhj6kz" value="csv"> </div>
                </div>
                <label for="md-radio-0nlhj6kz" class="md-radio-label">
                CSV
                </label>
            </div>
            </div>
            <div class="radio-box-container__unit" style="display: none;">
            <div class="md-radio md-theme-default">
                <div class="md-radio-container">
                    <div class="md-ripple"><input type="radio" id="md-radio-dzylbp23m" value="db"> </div>
                </div>
                <label for="md-radio-dzylbp23m" class="md-radio-label">
                DB
                </label>
            </div>
            <button type="button" class="md-button md-icon-button md-raised md-theme-default" style="display: none;">
                <div class="md-ripple">
                    <div class="md-button-content">
                        <svg class="svg-inline--fa fa-cogs fa-w-20 md-icon md-icon-font md-theme-default" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"></path>
                        </svg>
                        <!-- <i class="md-icon md-icon-font fas fa-cogs md-theme-default"></i> -->
                    </div>
                </div>
            </button>
            </div>
            <div class="radio-box-container__unit">
            <div class="md-radio md-theme-default">
                <div class="md-radio-container">
                    <div class="md-ripple"><input type="radio" id="md-radio-pvvcnpc4" value="qlik"> </div>
                </div>
                <label for="md-radio-pvvcnpc4" class="md-radio-label">
                Qlik (Use Template)
                </label>
            </div>
            </div>
        </div>
    </div>
</div>
    <!----> <!---->
</template>

<script>
export default {

}
</script>
