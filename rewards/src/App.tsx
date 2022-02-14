import './App.css'
import PageWrapper from './components/PageWrapper/PageWrapper'
import { AnalyticsProvider } from './context/AnalyticsContextProvider'
import { RewardsContextProvider } from './context/RewardsContextProvider'

function App() {
    return (
        <AnalyticsProvider>
            <RewardsContextProvider>
                <PageWrapper />
            </RewardsContextProvider>
        </AnalyticsProvider>
    )
}

export default App
