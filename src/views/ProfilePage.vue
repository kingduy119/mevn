<template>
<div data-v-3c05108c="" class="app-page">
   <div data-v-3c05108c="" class="app-page___side-bar">
      <nav data-v-3c05108c="" class="sidebar">
         <div class="column-flex">
            <div class="slider-menu-item selected">
               <svg class="svg-inline--fa fa-id-card fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="id-card" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                  <path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"></path>
               </svg>
               <!-- <li class="fas fa-id-card"></li> --><span>User Information</span>
            </div>
            <div class="slider-menu-item">
               <svg class="svg-inline--fa fa-lock fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                  <path fill="currentColor" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
               </svg>
               <!-- <li class="fas fa-lock"></li> --><span>Password</span>
            </div>
         </div>
      </nav>
   </div>
   <div data-v-3c05108c="" class="app-page___main-content">
      <div data-v-3c05108c="" class="userProfile">
         <svg data-v-3c05108c="" class="svg-inline--fa fa-user-circle fa-w-16 userProfile__avatar" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg="">
            <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
         </svg>
         <!-- <i data-v-3c05108c="" class="userProfile__avatar fas fa-user-circle"></i> --> 
         <div data-v-3c05108c="" class="userProfile__info">
            <div data-v-3c05108c="" class="md-field md-theme-default md-has-value">
               <label data-v-3c05108c="" for="md-input-cghfv6c82">Username</label> <input data-v-3c05108c="" type="text" id="md-input-cghfv6c82" maxlength="255" class="md-input"> <span data-v-3c05108c="" class="md-error">  </span> <span class="md-count">8 / 255</span> <!----> <!---->
            </div>
            <div data-v-3c05108c="" class="md-field md-theme-default md-has-value">
               <label data-v-3c05108c="" for="md-input-hv845kqks">Email</label> <input data-v-3c05108c="" type="text" id="md-input-hv845kqks" maxlength="255" class="md-input"> <span data-v-3c05108c="" class="md-error">  </span> <span class="md-count">22 / 255</span> <!----> <!---->
            </div>
            <button data-v-3c05108c="" disabled="disabled" type="button" class="md-button md-primary md-dense md-raised userProfile__info__updateButton md-theme-default">
               <div class="md-ripple md-disabled">
                  <div class="md-button-content">
                     Update
                  </div>
               </div>
            </button>
         </div>
      </div>
   </div>
</div>
</template>

<script>
export default {
    
}
</script>