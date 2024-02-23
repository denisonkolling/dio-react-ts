import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
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

const Signup = () => {

	const navigate = useNavigate();

	const { control, handleSubmit, formState: { errors, isValid },	} = useForm({ 
		resolver: yupResolver(schema), 	
		mode: 'onChange',	});

	const onSubmit = async (formData) => {
		
		try {
			const response = await api.post( '/users', formData);
			console.log(response.data)

		} catch (e) {
			alert('Houve um erro ao realizar o login', e);
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
						<TitleLogin>Faça seu cadastro</TitleLogin>
						<SubtitleLogin>Informe seus dados.</SubtitleLogin>
						<form onSubmit={handleSubmit(onSubmit)}>
						<Input placeholder="Nome completo"	leftIcon={<MdPerson />}
								name="name"
								control={control}
								errorMessage={errors?.name?.message}
							/>
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
							<Button title="Cadastrar" variant="secondary" type="submit" />
						</form>
						<Row>
							<EsqueciText>Já possui cadastro?</EsqueciText>
							<CriarText href='/signin'>Fazer Login</CriarText>
						</Row>
					</Wrapper>
				</Column>
			</Container>
		</>
	);
};

export default Signup;
