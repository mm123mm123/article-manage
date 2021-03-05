<script lang="ts">
import Vue from 'vue';
import store from "@/store";

export default Vue.extend({
  mpType: 'app',
  store
});
</script>

<style lang="scss">
@import "~@/style/reset.scss";

.page-container {
  height: 100vh;
  width: 100vw;
}

.uni-tabbar {
  display: none !important;
}
</style>
