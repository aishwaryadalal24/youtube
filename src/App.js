import Footer from '../src/components/Footer';
import Header from './components/Header';
import Body from './components/Body';
import VideoPage from './components/VideoPage';
import store from "../src/utils/store";
import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideosContainer from './components/VideosContainer';

function AppLayout() {
  return (
    <Provider store={store} className='m-5'>
      <Header/>
      <Outlet/>
      <Footer/>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>,
        children: [
          {
            path: "/",
            element: <VideosContainer/>
          },
          {
            path: "/video/:id",
            element: <VideoPage/>
          }
        ]
      },
    ]
  }
]);

const  App = () => <RouterProvider router={appRouter} />

export default App;
