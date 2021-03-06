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
import PageTransition from 'react-router-page-transition';
import { handleSubmit, resetForm } from '../handleSubmit';

// Old code worked before adding page transition

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



// changed to a class component and works now with page transition feature

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route 
          render={({ location }) => (
            // <div className="container-main">
            // The classnames were added to each components instead
            <PageTransition timeout={300}>
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
