import defaultConfig from './default'
import beviConfig from './bevi'

const theme = () => {
    const {
        rewardPickerConfig: { ctag, origin }
    } = (window as any).self

    switch (ctag) {
        case 'bevi':
            return beviConfig(origin)

        default:
            return defaultConfig(origin)
    }
}

const themeConfigs = theme()
export default themeConfigs
