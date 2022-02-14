import React, { createContext, useContext, useEffect, useState } from 'react'
import amplitude from 'amplitude-js'

const AMPLITUDE_API_KEY = '5306297edf15a76599e4ca3d4391e7c4'
const AMPLITUDE_OPTIONS = {
    disableCookies: true,
    sameSiteCookie: 'Lax',
    saveEvents: true,
    includeUtm: true,
    includeReferrer: true,
    trackingOptions: {
        city: true,
        country: true,
        carrier: true,
        device_manufacturer: true,
        device_model: true,
        dma: true,
        ip_address: true,
        language: true,
        os_name: true,
        os_version: true,
        platform: true,
        region: true,
        version_name: true
    }
}

const initialState = {
    instance: null
}

type AnalyticsContextType = {
    state: any
    dispatchAnalyticsEvent: any
    createUser: any
}

const AnalyticsContext = createContext<AnalyticsContextType>({
    state: {
        ...initialState
    },
    dispatchAnalyticsEvent: () => undefined,
    createUser: () => undefined
})

export const useAnalyticsContext = () => useContext(AnalyticsContext)

export const AnalyticsProvider = (props) => {
    const [instance, setInstance] = useState(null)

    useEffect(() => {
        const instance = amplitude.getInstance()
        instance.init(AMPLITUDE_API_KEY, null, AMPLITUDE_OPTIONS)
        instance.setTransport('beacon')
        setInstance(instance)
    }, [])

    const createUser = (user: string, userProperties = {}) => {
        instance.setUserId(user)
        instance.setUserProperties(userProperties)
        instance.regenerateDeviceId()
    }

    const dispatchAnalyticsEvent = (eventName: string, eventProperties = {}) => {
        instance.logEvent(eventName, eventProperties)
    }

    return (
        <AnalyticsContext.Provider value={{ state: { instance }, createUser, dispatchAnalyticsEvent }}>
            {props.children}
        </AnalyticsContext.Provider>
    )
}
