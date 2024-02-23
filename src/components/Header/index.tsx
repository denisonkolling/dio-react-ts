import {
	Wrapper,
	Column,
	Container,
	BuscarInputContainer,
	Input,
	Menu,
	MenuRight,
	Row,
	UserPicture,
} from './styles';
import Button from '../Button';
import img from '../../assets/logo-dio.png';

const Header = () => {
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
					<Button title="Entrar" />
					<Button title="Cadastrar-se" />
				</Row>
			</Container>
		</Wrapper>
	);
};

export default Header;
