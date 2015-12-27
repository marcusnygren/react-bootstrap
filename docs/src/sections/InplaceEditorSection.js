import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function InplaceEditorSection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="alerts">Inplace editors</Anchor> <small>Inline editor</small>
      </h2>

      <p>Basic inline styles.</p>
      <ReactPlayground codeText={Samples.InlineEditorBasic} />

      <h3><Anchor id="alerts-closeable">Advanced inplace editors</Anchor></h3>
      <p>Advanced inline styles.</p>
      <ReactPlayground codeText={Samples.InlineEditorAdvanced} />
    </div>
  );
}
