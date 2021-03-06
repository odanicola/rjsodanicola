import React from 'react' 
import { Provider } from 'react-redux'
import store from './store'
import Router from './router/index'

function App() {
  return (
    <Provider store={store}>
        <Router/>
    </Provider>
  );
}

export default App;
