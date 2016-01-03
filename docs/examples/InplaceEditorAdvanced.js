const InplaceEditorAdvanced = React.createClass({
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
    return (
      <div>
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

ReactDOM.render(<InplaceEditorAdvanced />, mountNode);
