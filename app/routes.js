//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Components catalogue page
router.get('/components', function (req, res) {
  // Ensure session data exists
  if (!req.session.data) {
    req.session.data = require('./data/session-data-defaults')
  }
  
  res.render('components', {
    data: req.session.data
  })
})

// Individual component page
router.get('/components/:componentId', function (req, res) {
  // Ensure session data exists
  if (!req.session.data) {
    req.session.data = require('./data/session-data-defaults')
  }
  
  const componentId = req.params.componentId
  const component = req.session.data.components.find(c => c.id === componentId)
  
  res.render('component-detail', {
    component: component,
    componentId: componentId,
    data: req.session.data
  })
})

// Contribution guide page
router.get('/contribute', function (req, res) {
  res.render('contribute')
})
