const req = require.context('**/*.tokens.scss', true, /.*\/src\/*\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
