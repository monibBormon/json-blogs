import React, { Fragment } from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import BlogDetailsPage from './pages/BlogDetailsPage';
import BlogPage from './pages/BlogPage';
import FullScreenLoader from './utils/FullScreenLoader';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<BlogPage/>} />
          <Route path="/blog-details/:id" element={<BlogDetailsPage/>} />
        </Routes>
      </BrowserRouter>
      <FullScreenLoader/>
    </Fragment>
  );
};

export default App;