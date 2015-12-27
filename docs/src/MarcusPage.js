import React from 'react';

import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

export default class Page extends React.Component {
  render() {
    return (
        <div>
          <NavMain activePage="marcus" />

          <PageHeader
            title="Marcus components"
            subTitle="Use of custom React components" />

          <div className="container bs-docs-container">
            <div className="row">
              <div className="col-md-9" role="main">
                <div className="bs-docs-section">
                  <p className="lead">Lorum ipsum.</p>

                  <h3>Inline editor</h3>
                  <p>Render element.</p>

                  <h3>Step by step</h3>
                  <p>Step by step.</p>

                </div>
              </div>
            </div>
          </div>

          <PageFooter />
        </div>
      );
  }

  shouldComponentUpdate() {
    return false;
  }
}
