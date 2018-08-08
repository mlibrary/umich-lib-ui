import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import HomePage from './HomePage';
import GlossaryPage from './GlossaryPage';
import NoMatch from './NoMatch';
import componentData from '../../config/componentData';
import {
  Header,
  Heading,
  Alert
} from 'umich-lib-components-react';

import './styles.css'

export default class Docs extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header
            name="Design System"
            siteUrl="/umich-lib-components-react"
            nav={[
              { text: 'Glossary', to: '/glossary' },
              { text: 'View on GitHub', href: 'https://github.com/mlibrary/umich-lib-components-react' }
            ]}
            renderAnchor={data => <Link to={data.to}>{data.text}</Link>}
          />
          <Alert intent="informational">
            <div className="container">This project is in experimental development and not recommended for production use.</div>
          </Alert>
          <div className="docs-app">
            <nav className="docs-nav" aria-labelledby="components-nav-heading">
              <Heading level={1} size="medium" id="components-nav-heading">Components</Heading>
              <Navigation components={componentData.map(component => component.name)} />
            </nav>
            <main className="docs-content">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/glossary" component={GlossaryPage} />
                <Route exact path="/components/:componentName" component={ComponentPage} />
                <Route component={NoMatch} />
              </Switch>
            </main>
          </div>
        </React.Fragment>
      </Router>
    )
  }
}
