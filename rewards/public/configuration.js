const rewardPickerConfigs = {
    localhost: {
        ctag: 'default',
        title: 'Localhost',
        apiURL: 'http://localhost:3000',
        collection: 1,
        origin: 'http://localhost:3000'
    },
    default: {
        ctag: 'default',
        title: 'Dev',
        apiURL: 'https://dev.api.fankave.com/rewards',
        collection: 1,
        origin: 'https://dev.ccapps.fankave.com/rewardpicker'
    },
    'cisco.fankave.com': {
        ctag: 'default',
        title: 'Reward Picker',
        apiURL: 'https://api.fankave.com/rewards',
        collection: 1,
        origin: 'https://cisco.fankave.com/rewardpicker'
    }
}
self.window.rewardPickerConfig = rewardPickerConfigs[window.location.hostname] || rewardPickerConfigs['default']
document.title = window.self.rewardPickerConfig.title || rewardPickerConfigs['default'].title

function loadDoc() {
    const { ctag } = window.self.rewardPickerConfig
    const pathName = window.location.pathname.replace(/\//g, '')
    const filePath = window.location.hostname === 'localhost' ? '/' : `/${pathName}/`
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', `${filePath}${ctag}/${ctag}.css`)
    // Append to the `head` element
    document.head.appendChild(link)

    if (pathName) {
        const src = document.createElement('script')
        src.setAttribute('src', `${filePath}${pathName}.js`)
        document.body.appendChild(src)
    }
}
loadDoc()
