import { Nav, Header, Releases, Tour, Videos, Store, Photos, Footer } from './';
import '../scss/App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Releases />
      <Tour />
      <Videos />
      <Store />
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
