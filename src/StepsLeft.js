import React, { cloneElement } from 'react';
import classNames from 'classnames';
import ValidComponentChildren from './utils/ValidComponentChildren';
import NavItem from './NavItem';

const StepsLeft = React.createClass({
  propTypes: {
    bsClass: React.PropTypes.string,
    onStepClick: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      bsClass: 'stepsLeft'
    };
  },

  onStepClick(event) {
    this.props.onStepClick(event); //event is undefined as of now

    /*this.setState({
      activeId:
    });*/
  },

  renderStep(child, index) {
    if(child.props.title == null) {
      return null;
    }

    let { title, children } = child.props; //children: text within a step

    return (
      <NavItem
        title={title}
        onSelect={this.onStepClick}
        linkId={'' + index}
        >
        {title}
      </NavItem>
    );
  },

  render() {
    let {
      children,
      ...props
    } = this.props;

    const childSteps = ValidComponentChildren.map(children, this.renderStep);

    return (
      <div>
        {childSteps}
      </div>
    );
  },
});

export default StepsLeft;
