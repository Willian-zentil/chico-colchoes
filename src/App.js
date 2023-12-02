import './App.css';
import Topbar from './components/topbar/Topbar';
import Header from './components/header/Header';
import Fullbanner from './components/fullbanner/Fullbanner';
import Servicos from './components/servicos/Servicos';
import QuemSomos from './components/quemSomos/QuemSomos';
import Orcamento from './components/orcamento/Orcamento';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Fullbanner />
      <Servicos />
      <QuemSomos />
      <Orcamento />
      <Footer />
    </div>
  );
}

export default App;
