import React from 'react';

import Anchor from '../Anchor';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function StepByStepSection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header"><Anchor id="step-by-step">Step by Step</Anchor> <small>Customizable</small></h2>
      <ReactPlayground codeText={Samples.StepByStepBasic} />

      <h3><Anchor id="advanced-step-by-step">Customized Step by Step</Anchor></h3>
      <ReactPlayground codeText={Samples.StepByStepAdvanced} />
    </div>
  );
}
