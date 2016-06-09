var configValue = require('./config.json');

module.export = {
  getDbConnectionString: function () {
    return 'mongodb://' + configValue.uname +
    ':' + configValue.pwd + '@ds021751.mlab.com:21751/ahmed-todo'
  }
}
