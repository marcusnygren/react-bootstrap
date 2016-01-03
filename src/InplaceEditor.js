import React from 'react';
import classNames from 'classnames';
import bootstrapUtils, { bsStyles, bsClass } from './utils/bootstrapUtils';
import { State } from './styleMaps';
import Input from './Input';
import ButtonInput from './ButtonInput';

let InplaceEditor = React.createClass({

  getInitialState() {
    return {
      value: '',
      newValue: '',
      disabled: true
    };
  },

  handleChange() {
    this.setState({
      value: this.refs.input.getValue(),
      newValue: this.refs.input.getValue()
    });

    console.log('Text: ' + this.refs.input.getValue());
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
        <Input
          type="text"
          placeholder="Enter text"
          value={this.state.value}
          ref="input"
          onChange={this.handleChange}
          disabled={this.state.disabled} />

          <ButtonInput type="submit" value="Edit" bsStyle={this.state.style} bsSize="large" onClick={this.activateField} />
      </div>
    );
  }
});


export default bsStyles(State.values(), State.INFO,
  bsClass('inplaceEditor', InplaceEditor)
);
