import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import RequestModalProvider from '../../context/RequestModalProvider'
import PagesContainer from '../PagesContainer/PagesContainer'

function AppLayout() {
    return (
        <div>
            <RequestModalProvider>
                <Header />
                <PagesContainer />
                <Footer />
            </RequestModalProvider>
        </div>
    )
}

export default AppLayout