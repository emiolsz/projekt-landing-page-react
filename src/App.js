import './App.css';
import Nav from './components/Nav';
import BriefAdOfCompany from './components/BriefAdOfCompany';
import Header from './components/Header';
import Main from './components/Main';
import Employees from './components/Employees';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header>
        <Nav />
        <BriefAdOfCompany />
      </Header>
      <Main>
        <Employees />
        <Services />
      </Main>
      <Footer />
    </>
  );
}

export default App;
