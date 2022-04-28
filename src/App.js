import Header from "./components/Header";
import styled from "styled-components";
import Main from "./components/Main";
import img from "./assets/img.jpg"

function App() {
  return (
    <Container>
      <Header/>
      <Main/>

      <div className="back">
      <img src={img}/>
      </div>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 1500px;
  height: 820px;
  margin: auto;
  width: auto;
  margin-top: 60px;
  border-radius: 50px;
  background-color: #fff;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  -webkit-box-shadow: 0px 9px 15px 2px rgba(0,0,0,0.15); 
  box-shadow: 0px 9px 15px 2px rgba(0,0,0,0.15);

  div.back{
    white-space: nowrap;
    position: relative;
    img{
    width: 1250px;
    position: absolute;
    left: 700px;
    bottom: -200px;
    border-radius: 200px 0px 0px 0px;
    white-space: inherit;
    overflow: hidden;
  }
  }
  
`

export default App;
