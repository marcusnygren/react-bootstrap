import React, { cloneElement } from 'react';
import classNames from 'classnames';
import ValidComponentChildren from './utils/ValidComponentChildren';

function getDefaultActiveKeyFromChildren(children) {
  let defaultActiveKey;

  ValidComponentChildren.forEach(children, child => {
    console.log('hej');
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

const StepByStep = React.createClass({
  propTypes: {
    activeKey: React.PropTypes.any,
    defaultActiveKey: React.PropTypes.any,
    /**
     * bootstrap className
     * @private
     */
    bsClass: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      bsClass: 'step'
    };
  },

  getInitialState() {
    let defaultActiveKey = this.props.defaultActiveKey != null ?
      this.props.defaultActiveKey : getDefaultActiveKeyFromChildren(this.props.children);

    return {
      activeKey: defaultActiveKey,
      previousActiveKey: null
    };
  },

  componentWillReceiveProps(nextProps) {
    console.log('nextProps: ' + nextProps.activeKey);
    console.log('defaultActiveKey: ' + this.props.defaultActiveKey);

    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
      // check if the 'previousActiveKey' child still exists
      let previousActiveKey = this.props.activeKey;
      React.Children.forEach(nextProps.children, (child) => {
        if (React.isValidElement(child)) {
          if (child.props.eventKey === previousActiveKey) {
            this.setState({
              previousActiveKey
            });
            return;
          }
        }
      });
    }
  },

  componentDidUpdate() {
    let steps = this._steps;
    let tabIdx = this._eventKeys().indexOf(this.getActiveKey());

    if (this._needsRefocus) {
      this._needsRefocus = false;
      if (steps && tabIdx !== -1) {
        let tabNode = ReactDOM.findDOMNode(steps[tabIdx]);

        if (tabNode) {
          tabNode.firstChild.focus();
        }
      }
    }
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
  },

  getActiveKey() {
    return this.props.activeKey !== undefined ? this.props.activeKey : this.state.activeKey;
  },

  _eventKeys() {
    let keys = [];

    ValidComponentChildren.forEach(this.props.children,
      ({props: { eventKey }}) => keys.push(eventKey));

    return keys;
  }
});

export default StepByStep;
