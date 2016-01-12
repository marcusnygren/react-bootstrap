const StepByStepInstance = React.createClass({
  getInitialState() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    alert('selected ' + key);
    this.setState({key});
  },

  render() {
    return (
      <StepByStep activeKey={this.state.key} onSelect={this.handleSelect} >
        <h3>Your Steps</h3>
        <StepItem eventKey={1}>
          Choose the plan!
        </StepItem>
        <StepItem eventKey={2}>
          Login & email!
        </StepItem>
        <StepItem eventKey={3} active>
          Complete your infos!
        </StepItem>
        <StepItem eventKey={4}>
          Subscription period!
        </StepItem>
        <StepItem eventKey={5}>
          Review your order!
        </StepItem>
        <StepItem eventKey={6}>
          Proceed to paypal!
        </StepItem>
      </StepByStep>
    );
  }
});

ReactDOM.render(<StepByStepInstance />, mountNode);
