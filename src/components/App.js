import {
  Nav,
  Social,
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
import React, { useRef } from 'react';

function App() {
  const scrollRef = useRef(null);
  const onClickScroll = () => {
    scrollRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Nav />
      <Social />
      <Header onClickScroll={onClickScroll} />
      <Releases />
      <Tour anchor={scrollRef} />
      <Videos />
      <Store />
      <Photos />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
