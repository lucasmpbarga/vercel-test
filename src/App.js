import logo from "./logo.svg";
import "./App.css";

function App() {
  const getServerless = () => {
    fetch(
      "https://ah-serverless-api-hml.azurewebsites.net/v1/api/buscar-marca?code=09Q4evUE4M_F8r2_NovExdi95g8DJVQG3Zc-0nWeMI-9AzFusXBhRA==",
      {
        method: "GET",
      }
    );
  };

  const getCanal = () => {
    fetch("https://canal-nac.azure-api.net/hospitais/buscar-marca", {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key": "9ea970fe888f4ec29b957adea69db5bd",
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
      },
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getServerless}>getServerless</button>
        <button onClick={getCanal}>getCanal</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
