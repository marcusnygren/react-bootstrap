import React, { cloneElement } from 'react';
import classNames from 'classnames';
import ValidComponentChildren from './utils/ValidComponentChildren';

const StepByStep = React.createClass({
  propTypes: {
    activeKey: React.PropTypes.any,
    bsClass: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      bsClass: 'step'
    };
  },

  getActiveKey() {
    console.log(this.props.activeKey);
    return this.props.activeKey !== undefined ? this.props.activeKey : this.state.activeKey;
  },

  render() {
    const { className, ...props } = this.props;

    return (
      <ol
        {...props}
        role="navigation"
        aria-label="steps"
        className={classNames(className, this.props.bsClass)}>
        {ValidComponentChildren.map(this.props.children, this.renderStepItem)}
      </ol>
    );
  },

  renderStepItem(child, index) {
    let shouldPaneBeSetActive = child.props.eventKey === this.getActiveKey();

    return cloneElement(
      child,
      {
        key: child.key || index
      }
    );
  }
});

export default StepByStep;
