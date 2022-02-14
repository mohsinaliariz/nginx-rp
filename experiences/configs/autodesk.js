const environment = process.env.NODE_ENV === 'prod' ? '' : 'dev.'

module.exports = {
  topic: 'autodesk',
  title: 'Autodesk IT',
  description: 'Share your Autodesk Story',
  target: 'fk-creation',
  favicon: '/images/autodesk/favicon.svg',
  scriptSrc: `https://${environment}ccapps.fankave.com/contentcreation/contentcreation.js`,
  experienceConfig: {
    url: `https://${environment}api.fankave.com`,
  },
}
