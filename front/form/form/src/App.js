import { Router } from "./router/Router";
import GlobalState from './global/globalState'

function App() {
  return (

    <GlobalState>
      <Router />
    </GlobalState>

  );
}

export default App;
