const InplaceEditorAdvanced = React.createClass({
  render() {
    return (
      <InplaceEditor
        bsStyle="warning"
        buttonText="Lorum"
        introText="Hej"
        buttonSize="large"
        placeholderText="Year in Review"
        placeholderSize="medium"
        editableByDefault>
        Lorum ipsum.
      </InplaceEditor>
    );
  }
});

ReactDOM.render(<InplaceEditorAdvanced />, mountNode);
