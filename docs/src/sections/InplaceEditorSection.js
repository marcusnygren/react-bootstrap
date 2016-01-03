import React from 'react';

import Anchor from '../Anchor';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function InplaceEditorSection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header"><Anchor id="inplacee-ditor">Inplace editor</Anchor> <small>Customizable</small></h2>
      <ReactPlayground codeText={Samples.InplaceEditorBasic} />

      <h3><Anchor id="advanced-inplace-editor">Customized inplace editor</Anchor></h3>
      <ReactPlayground codeText={Samples.InplaceEditorAdvanced} />
    </div>
  );
}
