import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import PortfolioPage from '../components/PortfolioPage';
import AboutPage from '../components/AboutPage';
import ToolPage from '../components/ToolPage';
// import Playground from '../components/Playground';
import PageTransition from 'react-router-page-transition';


// const AppRouter = ({ location }) => (
//   <BrowserRouter>
//     <div className="container">
//       <Header />
//       <PageTransition timeout={1000}>
//         <Switch location={location}>
//           <Route path="/" component={Playground} exact={true} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/portfolio" component={PortfolioPage} exact={true} />
//           <Route path="/portfolio/:id" component={PortfolioItemPage} />
//           <Route path="/tools" component={ToolPage} />
//           <Route path="/contact" component={ContactPage} />
//           <Route component={NotFoundPage} />
//         </Switch>
//       </PageTransition>
//     </div>
//   </BrowserRouter>
// );

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route 
          render={({ location }) => (
            // <div className="container-main">
            <PageTransition timeout={500}>
              <Header />
              <Switch location={location}>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/about" component={AboutPage} />
                <Route path="/portfolio" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/tools" component={ToolPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </PageTransition>
            // </div>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default AppRouter;
