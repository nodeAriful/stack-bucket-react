import { Helmet } from "react-helmet";
import {action, createStore, StoreProvider} from "easy-peasy"



//Router
import AppRouter from "./router";

const store = createStore({
  todos: {
    items: ['Create store', 'Wrap application', 'Use store'],
    add: action((state, payload) => {
      state.items.push(payload)
    })
  },
  
});

function App() {
  return (
    <StoreProvider store={store}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <AppRouter/>
    </StoreProvider>
  );
}

export default App;
