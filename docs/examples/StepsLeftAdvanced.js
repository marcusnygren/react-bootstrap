const StepsLeftAdvanced = React.createClass({
  getInitialState() {
    return {
      showCustomText: false,
      clickedText: ''
    };
  },

  render() {
    if (this.state.showCustomText) {
      return (
        <div>
          <h4>You clicked "{this.state.clickedText}"</h4>
          <p>PS: pretty cool that I could overwrite the custom behavior straight from the example code, right?</p>
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
    console.log(child.props.title); // You can now access the child
    // console.log('index: ' + index);
    this.setState({
      showCustomText: true,
      clickedText: child.props.title
    });
  },
});

ReactDOM.render(<StepsLeftAdvanced />, mountNode);
