<script lang="ts">
import Vue from 'vue';
import store from "@/store";

export default Vue.extend({
  mpType: 'app',
  store,
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  }
});
</script>

<style lang="scss">
@import "~@/style/reset.scss";

.page-container {
  height: 100vh;
}
</style>
