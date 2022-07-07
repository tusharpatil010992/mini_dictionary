import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Container from './component/Container';
import Footer from './component/Footer';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-12'>
          <Header />
          <Container />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
