import React from 'react';
import classNames from 'classnames';
import bootstrapUtils, { bsStyles, bsClass } from './utils/bootstrapUtils';
import { State } from './styleMaps';
import Input from './Input';
import ButtonInput from './ButtonInput';

let InplaceEditor = React.createClass({

  propTypes: {
    buttonText: React.PropTypes.string,
    introText: React.PropTypes.string,
    buttonSize: React.PropTypes.string,
    placeholderText: React.PropTypes.string,
    editableByDefault: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      buttonText: 'Edit header',
      introText: '',
      buttonSize: 'small',
      placeholderText: 'Editable header'
    };
  },

  getInitialState() {
    return {
      value: '',
      newValue: '',
      disabled: true
    };
  },

  componentWillMount() {
    console.log(this.props.editableByDefault);
    if (this.props.editableByDefault) {
      this.setState({
        disabled: false
      });
    }
  },

  handleChange() {
    this.setState({
      value: this.refs.input.getValue(),
      newValue: this.refs.input.getValue()
    });
  },

  activateField() {
    if (this.state.disabled) {
      this.setState({
        disabled: false
      });
    } else {
      this.setState({
        disabled: true
      });
    }
  },

  render() {
    let classes = bootstrapUtils.getClassSet(this.props);

    return (
      <div {...this.props} className={classNames(this.props.className, classes)}>
        {this.props.introText}

        <Input
          type="text"
          placeholder={this.props.placeholderText}
          value={this.state.value}
          ref="input"
          onChange={this.handleChange}
          disabled={this.state.disabled} />

        <ButtonInput
          type="submit"
          value={this.props.buttonText}
          bsStyle={this.state.style}
          bsSize={this.props.buttonSize}
          onClick={this.activateField} />
      </div>
    );
  }
});


export default bsStyles(State.values(), State.INFO,
  bsClass('inplaceEditor', InplaceEditor)
);
