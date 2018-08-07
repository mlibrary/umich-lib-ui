import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import HomePage from './HomePage';
import componentData from '../../config/componentData';
import {
  Header,
  Heading
} from 'umich-lib-components-react';

import './styles.css'

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    })
  }

  render() {
    const { route } = this.state;
    const component = route ? componentData.filter(component => component.name === route)[0] : undefined;

    return (
      <React.Fragment>
        <Header
          name="Design System"
          siteUrl="/umich-lib-components-react"
          nav={[
            { text: 'GitHub', href: 'https://github.com/mlibrary/umich-lib-components-react' }
          ]}
        />
        <div className="docs-app">
          <div className="docs-nav">
            <Heading level={2} size="medium">Patterns</Heading>
            <Navigation components={componentData.map(component => component.name)} />
          </div>
          <main className="docs-content">
            {component ? (
              <ComponentPage component={component} />
            ) : (
              <HomePage />
            )}
          </main>
        </div>
      </React.Fragment>
    )
  }
}
