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
          </div>

      </div>
    </div>
  );
}

export default App;
