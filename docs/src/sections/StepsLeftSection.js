import React from 'react';

import Anchor from '../Anchor';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function StepsLeftSection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header"><Anchor id="steps-left">Steps Left</Anchor> <small>Customizable</small></h2>
      <ReactPlayground codeText={Samples.StepsLeftBasic} />

      <h3><Anchor id="advanced-steps-left">Customized Steps Left</Anchor></h3>
      <ReactPlayground codeText={Samples.StepsLeftAdvanced} />
    </div>
  );
}
