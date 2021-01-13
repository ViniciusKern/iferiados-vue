module.exports = {
    css: {
      loaderOptions: {
        scss: {
            prependData: `
            @import "~@/assets/variables.scss";
            @import "~@/assets/mixins.scss";
            @import "~@/assets/placeholders.scss";
            `
        },
      }
    }
  }