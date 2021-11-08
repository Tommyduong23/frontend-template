<template lang='pug'>
  #app
    router-view
</template>

<script>
import store from './store';

export default {
  name: 'app',
  store,
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}

</style>
