import {
  Nav,
  Header,
  Releases,
  Tour,
  Videos,
  Store,
  Photos,
  Subscribe,
  Footer,
} from './';
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
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
