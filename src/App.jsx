import "./App.css";

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
          <form
            ref={formRef}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
