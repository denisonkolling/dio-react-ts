import {
	Wrapper,
	Container,
	BuscarInputContainer,
	Input,
	Menu,
	MenuRight,
	Row,
} from './styles';
import Button from '../Button';
import img from '../../assets/logo-dio.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {

	const navigate = useNavigate();


	return (
		<Wrapper>
			<Container>
				<Row>
					<img src={img} alt="logo" />
					<BuscarInputContainer>
						<Input placeholder="Buscar..." />
					</BuscarInputContainer>
					<Menu>Live Code</Menu>
					<Menu>Global</Menu>
				</Row>
				<Row>
					<MenuRight href="#">Home</MenuRight>
					<Button title="Entrar" variant={''} onClick={() => navigate("/signin")} />
					<Button title="Cadastrar-se" variant={''} onClick={() => navigate("/signup")}/>
				</Row>
			</Container>
		</Wrapper>
	);
};

export default Header;
