<template>
  <div id="app">
    <Contacts />
  </div>
</template>

<script>
import Contacts from './components/Contacts'


export default {
  name: 'App',
  components: {
    Contacts
  }
}
</script>

<style>

body {
  margin: 0;
  background-color: #f3f3f4;
  font-family:"open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#app {

  font-size: 13px;
  color: #676a6c;
}

* {
 box-sizing: border-box;
}

</style>
