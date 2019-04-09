//Globally load sass variables

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/styles/variables.scss";
          `,
      },
    },
  },
};
