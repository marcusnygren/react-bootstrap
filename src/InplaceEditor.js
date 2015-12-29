import React from 'react';
import classNames from 'classnames';
import bootstrapUtils, { bsStyles, bsClass } from './utils/bootstrapUtils';
import { State } from './styleMaps';

let InplaceEditor = React.createClass({

  propTypes: {
    onDismiss: React.PropTypes.func,
    dismissAfter: React.PropTypes.number,
    closeLabel: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      closeLabel: 'Close Alert'
    };
  },

  render() {
    let classes = bootstrapUtils.getClassSet(this.props);

    return (
      <div {...this.props} role="alert" className={classNames(this.props.className, classes)}>
        {this.props.children}
        <button>
        Hej
        </button>
      </div>
    );
  },

  componentDidMount() {
    if (this.props.dismissAfter && this.props.onDismiss) {
      this.dismissTimer = setTimeout(this.props.onDismiss, this.props.dismissAfter);
    }
  },

  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }
});


export default bsStyles(State.values(), State.INFO,
  bsClass('inplaceEditor', InplaceEditor)
);
