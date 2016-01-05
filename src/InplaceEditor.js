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
    placeholderSize: React.PropTypes.string,
    editableByDefault: React.PropTypes.bool,
    header: React.PropTypes.node,
    button: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      buttonText: 'Edit header',
      introText: '',
      buttonSize: 'small',
      placeholderText: 'Editable header',
      placeholderSize: 'large',
    };
  },

  getInitialState() {
    return {
      value: '',
      newValue: '',
      disabled: true,
      editMode: 'warning',
      buttonText: ''
    };
  },

  componentWillMount() {
    this.setButtonText();

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

    if (this.state.disabled) {
      this.setState({
        editMode: 'success'
      });
    } else {
      this.setState({
        editMode: 'error'
      });
    }
  },

  setButtonText() {
    if (this.props.button) {
      //this.props.button.props.value = 'Gris';

      this.setState({
        buttonText: this.props.button.props.value
      });
    }
  },

  render() {
    let button = this.props.button;

    /*if (button) {
      button.onClick = function() { alert('blah'); };
    }*/

    console.log(this.props.button);
    console.log(button);
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
          disabled={this.state.disabled}
          bsSize="large"
          bsStyle={this.state.editMode} />

        {this.props.button}

        <ButtonInput
          type="submit"
          value={this.state.buttonText}
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
