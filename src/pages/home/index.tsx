import Button from '../../components/Button';
import Header from '../../components/Header';
import bannerImage from '../../assets/banner.png';
import { Container, TextContent, Title } from './styles';

const Home = () => {
	return (
		<>
			<Header />
			<Container>
				<div>
					<Title>Implemente o seu futuro agora</Title>
					<TextContent>
						Domine as tecnologias utilizadas pelas empresas mais inovadoras do
						mundo e encare seu novo desafio profissional, evoluindo em
						comunidade com os melhores experts.
					</TextContent>
          <Button title="Começar agora" variant='secondary' onClick={()=>null}/>
				</div>
				<div>
					<img src={bannerImage} alt="banner" />
				</div>
			</Container>
		</>
	);
};

export default Home;
