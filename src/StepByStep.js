import React, { cloneElement } from 'react';
import classNames from 'classnames';
import ValidComponentChildren from './utils/ValidComponentChildren';

const StepByStep = React.createClass({
  propTypes: {
    /**
     * bootstrap className
     * @private
     */
    bsClass: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      bsClass: 'stepByStep'
    };
  },

  render() {
    const { className, ...props } = this.props;

    return (
      <ol
        {...props}
        role="navigation"
        aria-label="breadcrumbs"
        className={classNames(className, this.props.bsClass)}>
        {ValidComponentChildren.map(this.props.children, this.renderBreadcrumbItem)}
      </ol>
    );
  },

  renderBreadcrumbItem(child, index) {
    return cloneElement(child, { key: child.key || index });
  }
});

export default StepByStep;
