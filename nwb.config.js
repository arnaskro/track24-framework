module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Framework',
      externals: {
        react: 'React'
      }
    }
  }
}
