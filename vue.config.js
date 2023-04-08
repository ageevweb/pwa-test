const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
  ? '/pwa-test/'
  : '/',

  pwa: {
    themeColor: "#fff",
    msTileColor: "#fff",
    name: "ECO-CITY",
    display: "fullscreen",
    scope: "",
    start_url: ".",
  },
})
