import { RouteConfig } from 'vue-router';

/* tslint:disable:variable-name */

const FontsDemoView = () =>
  import(
    /* webpackChunkName: "fonts-demo-view" */
    '@/views/FontsDemoView.vue'
  );

const ElementUIDemoView = () =>
  import(
    /* webpackChunkName: "element-ui-demo-view" */
    '@/views/ElementUIDemoView.vue'
  );

const MarkdownDemoView = () =>
    import(
        /* webpackChunkName: "markdown-demo-view" */
        '@/views/MarkdownDemoView.vue'
        );

const CompositionApiDemo = () =>
    import(
        /* webpackChunkName: "composition-api-demo" */
        '@/components/CompositionApiDemo.vue'
        );

const PictureView = () =>
    import(
        /* webpackChunkName: "picture-view" */
        '@/views/PictureView.vue'
        );

const NotFoundView = () =>
  import(
    /* webpackChunkName: "not-found-view" */
    '@/views/NotFoundView.vue'
  );

/* tslint:enable:variable-name */

const routes: RouteConfig[] = [
  {
    path: '/',
    component: FontsDemoView
  },
  {
    path: '/fonts-demo',
    name: 'fonts-demo',
    component: FontsDemoView
  },
  {
    path: '/element-ui-demo',
    name: 'element-ui-demo',
    component: ElementUIDemoView
  },
  {
    path: '/markdown-demo',
    name: 'markdown-demo',
    component: MarkdownDemoView
  },
  {
    path: '/composition-api-demo',
    name: 'composition-api-demo',
    component: CompositionApiDemo
  },
  {
    path: '/picture-view',
    name: 'picture-view',
    component: PictureView
  },
  { path: '*', component: NotFoundView }
];

export default routes;
