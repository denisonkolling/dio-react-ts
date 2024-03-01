import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { api } from '../../services/api'

import {	Container,	Title,	Column,	TitleLogin,	SubtitleLogin,	EsqueciText,	CriarText,	Row,	Wrapper,} from './styles';

const schema = yup.object({
	email: yup.string().email('Email não é válido').required('Campo obrigatório.'),
	password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório.'),
}).required()

const Signin = () => {

	const navigate = useNavigate();

	const { control, handleSubmit, formState: { errors, isValid },	} = useForm({ 
		resolver: yupResolver(schema), 	
		mode: 'onChange',	});

	const onSubmit = async (formData: any) => {
		try {
			const { data } = await api.get(
				`/users?email=${formData.email}&password=${formData.password}`
			);

			if (data.length && data[0].id) {
				navigate('/feed');
				return;
			}

			alert('Usuário ou senha inválido');

		} catch (e) {
			alert('Houve um erro ao realizar o login' + e);
		}

	};


	return (
		<>
			<Header />
			<Container>
				<Column>
					<Title>
						A plataforma para você aprender com experts, dominar as principais
						tecnologias e entrar mais rápido nas empresas mais desejadas.
					</Title>
				</Column>
				<Column>
					<Wrapper>
						<TitleLogin>Realize seu Login</TitleLogin>
						<SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Input placeholder="E-mail"	leftIcon={<MdEmail />}
								name="email"
								control={control}
								errorMessage={errors?.email?.message}
							/>
							<Input type="password" placeholder="Senha" leftIcon={<MdLock />}
								name="password"
								control={control}
								errorMessage={errors?.password?.message}
							/>
							<Button title="Entrar" variant="secondary" type="submit" />
						</form>
						<Row>
							<EsqueciText>Esqueceu sua senha?</EsqueciText>
							<CriarText href='/signup'>Criar Conta</CriarText>
						</Row>
					</Wrapper>
				</Column>
			</Container>
		</>
	);
};

export default Signin;
