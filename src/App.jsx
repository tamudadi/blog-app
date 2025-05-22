import { Route, Routes } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Detail } from './components/Detail';
import Header from './components/header';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
