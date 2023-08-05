import FormInput from "./components/FormInput";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const input = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "User name should be 3-6 charectors and shouldn't include any special charectors",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-10 charecters and should include 1 letter, 1 number and 1 special charectors",
      label: "Password",
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do't match",
      label: "Confirm Password",
      pattern: value.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  console.log(value);

  return (
    <div className="App">
      <form>
        <h1>Registeration Form</h1>
        {input.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={value[input.name]}
            onChange={onChange}
          ></FormInput>
        ))}
        <button onClick={() => alert("successfully Registered")}>Submit</button>
      </form>
    </div>
  );
}

export default App;
