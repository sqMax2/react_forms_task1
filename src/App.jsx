import { useRef, useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput/TextInput";

function App() {
  const formRef = useRef(null);
  const [signupData, setSignupData] = useState({});

  const handleChange = (e) => {
    setSignupData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
  };

  const handleReset = (e) => {
    setSignupData({});
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <form className="dark-theme"
            ref={formRef}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <TextInput label="Smallest" size="xs" placeholder="Placeholder" withAsterisk/>
            <TextInput size="sm" label="Small" description="This is a description" radius="rmd" error="This is an error"/>
            <TextInput size="md" label="Medium" radius="rxl" variant="unstylled" icon="@"/>
            <TextInput size="lg" label="Large" description="This is a description" variant="filled" isEmail/>
            <TextInput size="xl" label="Largest" radius="rmd" />


            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
