const StepsLeftInstance = React.createClass({
  getInitialState() {
    return {
      alertVisible: false
    };
  },

  render() {
    return (
      <StepsLeft onStepClick={this.handleAlertDismiss} bsStyle="warning">
        <h2>Your Steps</h2>
        <Step title="Choose the plan!">
        Lorum
        </Step>
        <Step title="Login & email!">
        Lorum
        </Step>
        <Step title="Complete your infos!">
        Lorum
        </Step>
        <Step title="Subscription period!">
        Lorum
        </Step>
        <Step title="Review your order!">
        Lorum
        </Step>
        <Step title="Proceed to paypal!">
        Lorum
        </Step>
      </StepsLeft>
    )
  },

  handleAlertDismiss(a, b) {
    console.log(a);
    console.log(b);
    console.log('Hej!');
    this.setState({alertVisible: false});
  },
});

ReactDOM.render(<StepsLeftInstance />, mountNode);
