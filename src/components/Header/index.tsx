import {
	Wrapper,
	Container,
	BuscarInputContainer,
	Input,
	Menu,
	MenuRight,
	Row,
	UserPicture
} from './styles';
import Button from '../Button';
import img from '../../assets/logo-dio.png';
import { useNavigate } from 'react-router-dom';
import { IHeader } from './types';

const Header = ({ autenticado }: IHeader) => {
	const navigate = useNavigate();

	return (
		<Wrapper>
			<Container>
				<Row>
					<img src={img} alt="logo" />
					{autenticado ? (
						<>
							<BuscarInputContainer>
								<Input placeholder="Buscar..." />
							</BuscarInputContainer>
							<Menu>Live Code</Menu>
							<Menu>Global</Menu>
						</>
					) : null}
				</Row>
				<Row>
				{autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
              ) : (
					<>
					<MenuRight href="#">Home</MenuRight>
					<Button
						title="Entrar"
						variant={''}
						onClick={() => navigate('/signin')}
					/>
					<Button
						title="Cadastrar-se"
						variant={''}
						onClick={() => navigate('/signup')}
					/>
					</>)}
				</Row>
			</Container>
		</Wrapper>
	);
};

export default Header;
