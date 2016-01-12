import React, { cloneElement } from 'react';
import classNames from 'classnames';
import ValidComponentChildren from './utils/ValidComponentChildren';

const StepByStep = React.createClass({
  propTypes: {
    activeKey: React.PropTypes.any,
    bsClass: React.PropTypes.string,
    onSelect: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      bsClass: 'step'
    };
  },

  getInitialState() {
    return {
      activeKey: this.props.activeKey
    }
  },

  getActiveKey() {
    return this.props.activeKey !== undefined ? this.props.activeKey : this.state.activeKey;
  },

  shouldComponentUpdate() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleSelect(selectedKey) {
    console.log('Hej!');

    if (this.props.onSelect) {
      this._isChanging = true;
      this.props.onSelect(selectedKey);
      this._isChanging = false;
      return;
    }
  },

  render() {
    const {
      className,
      ...props } = this.props;

    const stepsProps = {
      ...props,
      activeKey: this.getActiveKey(),
      onSelect: this.handleSelect,
    }

    return (
      <ol
        {...props}
        {...stepsProps}
        role="navigation"
        aria-label="steps"
        className={classNames(className, this.props.bsClass)}>
        {ValidComponentChildren.map(this.props.children, this.renderStepItem)}
      </ol>
    );
  },

  renderStepItem(child, index) {

    let shouldStepBeSetActive = child.props.eventKey === this.getActiveKey();
    console.log(this.props.activeKey);
    console.log('Step ' + child.props.eventKey + ': ' + this.props.activeKey);

    return cloneElement(
      child,
      {
        activeKey: shouldStepBeSetActive,
        //key: child.key || index,
        onClick: this.handleSelect
      }
    );
  }
});

export default StepByStep;
