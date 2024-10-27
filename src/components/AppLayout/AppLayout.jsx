import Header from '../Header/Header'
import RequestModalProvider from '../../context/RequestModalProvider'
import PagesContainer from '../PagesContainer/PagesContainer'

function AppLayout() {
    return (
        <div>
            <RequestModalProvider>
                <Header />
                <PagesContainer />
            </RequestModalProvider>
        </div>
    )
}

export default AppLayout