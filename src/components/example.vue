<script>
  // @ts-ignore
  import example from './example.md';
  import LocalComponent from './LocalComponent.vue'

  example.vue.component.components = {
    AsyncComponent: () => import('./LocalComponent.vue'),
    LocalComponent
  };

  export default example.vue.component;
</script>

<style scoped>
  @import "../../node_modules/github-markdown-css/github-markdown.css";
</style>
