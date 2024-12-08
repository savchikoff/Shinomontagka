import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchServicesStart } from '../../redux/actionCreators/servicesActionCreators'
import { scrollToTop } from '../../utils/scrollToTop'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import RequestModalProvider from '../../context/RequestModalProvider'
import PagesContainer from '../PagesContainer/PagesContainer'

function AppLayout() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServicesStart());
    }, [dispatch]);

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