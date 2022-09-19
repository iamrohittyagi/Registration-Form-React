import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="App">
      <form>
        {submitted && valid ? (
          <div className="sucess-msg">Success! Thank You</div>
        ) : null}
        <input
          placeholder="First Name"
          name="firstname"
          value={values.firstName}
          onChange={(e) => {
            setValues({ ...values, firstName: e.target.value });
          }}
        />
        {submitted && !values.firstName ? (
          <span>Please enter a first name</span>
        ) : null}
        <input
          placeholder="Last Name"
          name="lastname"
          value={values.lastName}
          onChange={(e) => {
            setValues({ ...values, lastName: e.target.value });
          }}
        />
        {submitted && !values.lastName ? (
          <span>Please enter a last name</span>
        ) : null}

        <input
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={(e) => {
            setValues({ ...values, email: e.target.value });
          }}
        />
        {submitted && !values.email ? (
          <span>Please enter a email address</span>
        ) : null}
        <button type="submit" onClick={handelSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
