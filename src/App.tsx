import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import { Feed } from './pages/feed';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signin" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/feed" element={<Feed />} />
		</Routes>
	);
}

export default App;
