export const errorSelector = ({ errors, ui }) => {
  const { currentStep } = ui.signup;
  const { session } = errors;

  if (Object.values(session).length === 0) return {};

  let possibleErrors = [],
    returnErrors = {};

  if (currentStep === 1) {
    possibleErrors = ["name", "gender", "age", "weight", "heightFeet"];
  } else if (currentStep === 2) {
    possibleErrors = ["targetWeight"];
  } else {
    possibleErrors = ["email", "password", "password2"];
  }
  possibleErrors.forEach((errorKey) => {
    if (session[errorKey] !== undefined) {
      returnErrors[errorKey] = session[errorKey];
    }
  });

  return returnErrors;
};
