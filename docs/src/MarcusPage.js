import React from 'react';

import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

import ReactPlayground from './ReactPlayground';
import InplaceEditorSection from './sections/InplaceEditorSection';

/* eslint-enable indent */

const MarcusPage = React.createClass({

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

                  <InplaceEditorSection />

                  <h2 className="page-header">Step by step <small>Customizable</small></h2>
                  <ReactPlayground codeText="" />

                </div>
              </div>
            </div>
          </div>

          <PageFooter />
        </div>
    );
  }
});

export default MarcusPage;
