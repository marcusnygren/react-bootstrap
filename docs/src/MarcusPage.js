import React from 'react';

import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

import ReactPlayground from './ReactPlayground';
import InplaceEditorSection from './sections/InplaceEditorSection';
import StepsLeftSection from './sections/StepsLeftSection';

/* eslint-enable indent */

const MarcusPage = React.createClass({

  render() {
    return (
        <div>
          <NavMain activePage="marcus" />

          <PageHeader
            title="Marcus' components"
            subTitle="Inplace editor & Step by step" />

          <div className="container bs-docs-container">
            <div className="row">
              <div className="col-md-9" role="main">
                <div className="bs-docs-section">

                  <StepsLeftSection />

                  <InplaceEditorSection />

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
