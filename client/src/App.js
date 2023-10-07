import {AccountProvider} from "./components/context/AccountProvider";
import Messenger from "./components/messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  const clientId =
    "314005293340-0b7rbnf8644se1dfqk1lsk5rkphfm15t.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
