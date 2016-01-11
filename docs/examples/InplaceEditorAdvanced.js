const InplaceEditorAdvanced = React.createClass({
  createHeader() {
    return (
      <Input
          type="text" />
    );
  },

  createButton() {
    return (
      <ButtonInput
          ref="myButton"
          type="submit"
          onClick=""
          value="Hej" />
    );
  },

  render() {
    return (
      <InplaceEditor
        bsStyle="warning"
        buttonText="Lorum"
        introText="Hej. "
        buttonSize="large"
        placeholderText="Year in Review"
        placeholderSize="medium"
        //header={this.createHeader()}
        //button={this.createButton()}
        editableByDefault>
        Lorum hej.
      </InplaceEditor>
    );
  }
});

ReactDOM.render(<InplaceEditorAdvanced />, mountNode);
