import React from 'react';
import classNames from 'classnames';
import tbsUtils from './utils/bootstrapUtils';
import SafeAnchor from './SafeAnchor';

const StepItem = React.createClass({
  propTypes: {
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    eventKey: React.PropTypes.string,
    active: React.PropTypes.bool,
    title: React.PropTypes.node,
  },

  getDefaultProps() {
    return {
      bsClass: 'step',
      active: false,
    };
  },

  getInitialState() {
    /*
    if(this.props.eventKey = this.defaultActiveKey) {
      this.setState({
        active: bool
      })
    }*/
    return null;
  },

  render() {
    const {
      active,
      className,
      id,
      children,
      href,
      title,
      eventKey,
      ...props } = this.props;

    const linkProps = {
      href: '#' + eventKey,
      id: eventKey
    };

    return (
      <li id={id} className={classNames(className, { active })}>
        {
          active ?
            <span {...props}>
              { children }
            </span> :
            <SafeAnchor {...props} {...linkProps}>
              { children }
            </SafeAnchor>
        }
      </li>
    );
  }
});

export default StepItem;
