import { Header } from "../../components/Header";
import background from '../../assets/image.png'
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
          <img src={background} className="background" alt="background app" />
          <div className="info">
            <div>
              <input className="usuario" placeholder="@usuario"></input>
              <button>Buscar</button>
            </div>
            <div className="perfil">
              <img src="https://avatars.githubusercontent.com/u/167828106?v=4" className="profile" alt="imagem de perfil"/>
              <div>
              <h3>Kaynan Oliveira</h3>
              <span>@kaynanoliveira</span>
              <p>Desenvolvedor Full-Stack</p>
              </div>
            </div>
            <hr />
          </div>
      </div>
    </div>
  );
}

export default App;
