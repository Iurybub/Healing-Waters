import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Services from './components/Services'
import Checkout from './components/Checkout'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route path='/' component={Home} exact />
				<Route path='/services/' component={Services} />
				<Route path='/checkout' component={Checkout} />
			</BrowserRouter>
		</div>
	);
}

export default App;
