const CoreObject       = require('core-object');

module.exports = CoreObject.extend({
  device: undefined,
  project: undefined,

  init() {
    this._super(...arguments);

  },

  build() {
    // noop
  },

  run() {
    // noop
  }
});
