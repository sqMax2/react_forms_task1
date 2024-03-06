import { useRef, useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput/TextInput";
import { Signin } from "./components/Signin/Signin";
import { Signup } from "./components/Signup/Signup";

function App() {
  const formRef = useRef(null);
  const [signinData, setSigninData] = useState({});
  const [signupData, setSignupData] = useState({});

  const handleSigninSubmit = (data) => {
    setSigninData(data);
  };

  const handleSignupSubmit = (data) => {
    setSignupData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Signin className="dark-theme" onSubmit={handleSigninSubmit} />
          <div>
            {Object.keys(signinData).length !== 0 ? (
              <>
                <p>email: {signinData.email}</p>
                <p>password: {signinData.password}</p>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <Signup className="dark-theme" onSubmit={handleSignupSubmit} />
          <div>
            {Object.keys(signupData).length !== 0 ? (
              <>
                {Object.entries(signupData).map(([key, val], i) => (
                  <p key={key}>
                    {key}: {val}
                  </p>
                ))}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
