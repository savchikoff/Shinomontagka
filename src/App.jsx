import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Router from './components/Router/Router';
import { store } from './redux/store';

function App() {

  return (
    <>
      <ConfigProvider theme={{ token: { fontFamily: "Montserrat" } }}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ConfigProvider>
      <ToastContainer />
    </>
  )
}

export default App
