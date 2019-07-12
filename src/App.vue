<template>
  <div id="app">
       <b-container>
  <b-row>
    <b-col offset-md='2'>
      <div  class="main">
        <router-view />
        </div>
    </b-col>
  </b-row>
       </b-container>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
<style lang="scss">
@import './assets/style/index.scss';
</style>



