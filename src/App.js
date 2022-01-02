import styled from "styled-components"
import Navbar from "./components/nav/Navbar"
import Carousel from "./components/carousel";
import Services from "./components/services"
import About from "./components/about"
import Projects from "./components/projects"
import Team from "./components/team"
import Footer from "./components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
width: 100%;
margin: 0px auto;
  height: 100vh;
  ${'' /* padding: 0.75%; */}
  ${'' /* width: 90%; */}
  ${'' /* overflow: hidden; */}
  position: relative;
  
`;

const App = () => {
  return (
    
<Container> 
  <Navbar/>
  <Carousel/>
  <Services/>
  <About/>
  <Projects/>
  <Team/>
  <Footer/>
</Container>

  );
}

export default App;
