import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function InplaceEditorSection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="alerts">Inplace editors</Anchor> <small>Inplace editor</small>
      </h2>

      <p>Basic inplace styles.</p>
      <ReactPlayground codeText={Samples.InplaceEditorBasic} />

      <h3><Anchor id="alerts-closeable">Advanced inplace editors</Anchor></h3>
      <p>Advanced inplace styles.</p>
      <ReactPlayground codeText={Samples.InplaceEditorAdvanced} />
    </div>
  );
}
