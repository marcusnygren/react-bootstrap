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

  getInitialState() {
    return {
      activeId: 1
    }
  },

  onStepClick(child, index) {
    this.props.onStepClick(child, index); //event is undefined as of now

    this.setState({
      activeId: index
    });
  },

  renderStep(child, index) {
    if(child.props.title == null) {
      return null;
    }

    let { title, children } = child.props; //children: text within a step

    let isActiveId = false;

    if (index === this.state.activeId) {
      isActiveId = true;
    }

    //console.log('index ' + index + ' is active id? ' + isActiveId);

    return (
      <NavItem
        title={title}
        onSelect={this.onStepClick.bind(this, child, index)}
        linkId={'' + index}
        active={isActiveId}
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
