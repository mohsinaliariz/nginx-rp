const autodeskConfigs = require('../configs/autodesk')

module.exports = (app) => {
  // API Routes
  app.get('/ping', (req, res) => {
    res.send('experiences/pong')
  })

  // Template Routes
  app.get('/autodesk', function (req, res) {
    res.render('autodesk', autodeskConfigs)
  })
}
