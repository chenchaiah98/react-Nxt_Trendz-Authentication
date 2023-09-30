import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import LoginForm from './components/LoginForm'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
