//import Mode from 'frontmatter-markdown-loader/mode';
const Mode = require('frontmatter-markdown-loader/mode');

module.exports = {
  css: {
    sourceMap: true,
    requireModuleExtension: true
  },

  transpileDependencies: [
    /\bvue-awesome\b/
  ],

  chainWebpack: (config) => {
    const mdRule = config.module.rule('md');

    mdRule
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader')
      .tap(options => {
          return {
            vue: {
              root: 'markdown-body'
            },
            mode: [Mode.VUE_COMPONENT]
          }
        }
      );

    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    // svgRule
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader');

    svgRule
      .use('@yzfe/vue-svgicon-loader')
      .loader('@yzfe/vue-svgicon-loader')
  }
};
