const InplaceEditorAdvanced = React.createClass({
  render() {
    return (
      <InplaceEditor
        bsStyle="warning"
        buttonText="Lorum"
        introText="Hej"
        buttonSize="small"
        placeholderText="Year in Review">
        Lorum ipsum.
      </InplaceEditor>
    );
  }
});

ReactDOM.render(<InplaceEditorAdvanced />, mountNode);
