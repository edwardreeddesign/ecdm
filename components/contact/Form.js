import useInput from '../../helpers/useInput';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');
const isComment = value => value.trim() !== '';

const Form = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPhoneIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log('Submitted');
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetCommentInput();
  };

  return (
    <section className="max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10">
      <div>
        <form
          action="https://formspree.io/f/mjvqrqzn"
          method="POST"
          className="w-full"
        >
          <div className="nameInputClasses formControl">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={nameChangeHandler}
              value={enteredName}
              onBlur={nameInputBlurHandler}
            />
            {nameInputHasError && (
              <p className="error-text">Please Enter a Name.</p>
            )}
          </div>
          <div className={`emailInputClasses formControl`}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={emailChangeHandler}
              value={enteredEmail}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <p className="error-text">Email must be a valid Email</p>
            )}
          </div>
          <div className={`phoneInputClasses formControl`}>
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              onChange={phoneChangeHandler}
              value={enteredPhone}
              onBlur={phoneBlurHandler}
            />
            {phoneInputHasError && (
              <p className="error-text">Please enter a valid Phone Number</p>
            )}
          </div>
          <div className="formControl">
            <label htmlFor="message">
              Message <span className="text-dark2 text-sm">*Optional</span>
            </label>
            <textarea id="message" name="message" cols="30" rows="10" />
          </div>
          <div className="flex w-full justify-between">
            <button className="btn btn-primary" href="/">
              Home
            </button>
            <button
              type="submit"
              className="btn btn-outline"
              disabled={!formIsValid}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Form;
