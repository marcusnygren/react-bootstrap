const StepsLeftAdvanced = React.createClass({
  getInitialState() {
    return {
      showCustomText: false
    };
  },

  render() {
    if (this.state.showCustomText) {
      return (
        <div>
          <h4>I chose to customize the component!</h4>
          <p>When a user clicks a step, I wanted to not show all the steps, and show this instead.
          Pretty cool that I could overwrite the custom behavior, right?</p>
        </div>
      );
    } else {
      return (
        <StepsLeft onStepClick={this.handleClick} bsStyle="warning">
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
      );
    }
  },

  handleClick(child, index) {
    //console.log(child.props.title);
    //console.log('index: ' + index);
    this.setState({showCustomText: true});
  },
});

ReactDOM.render(<StepsLeftAdvanced />, mountNode);
