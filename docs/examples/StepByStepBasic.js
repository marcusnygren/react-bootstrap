const stepByStepInstance = (
  <StepByStep bsStyle="warning" >
    <h2>Your Steps</h2>
    <StepItem href="#">
      Choose the plan!
    </StepItem>
    <StepItem href="http://getbootstrap.com/components/#breadcrumbs">
      Login & email!
    </StepItem>
    <StepItem active>
      Complete your infos!
    </StepItem>
    <StepItem href="#">
      Subscription period!
    </StepItem>
    <StepItem href="#">
      Review your order!
    </StepItem>
    <StepItem href="#">
      Proceed to paypal!
    </StepItem>
  </StepByStep>
);

ReactDOM.render(stepByStepInstance, mountNode);
