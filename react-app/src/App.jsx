import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { Col, Container, Row } from "react-bootstrap";
import fantasyBooks from "./data/fantasy.json";
import historyBooks from "./data/history.json";
import horrorBooks from "./data/horror.json";
import romanceBooks from "./data/romance.json";
import scifiBooks from "./data/scifi.json";
import ColLeft from "./components/ColLeft";
import Welcome from "./components/Welcome";
import { Component } from "react";
import CommentArea from "./components/CommentArea";

const booksArray = fantasyBooks.concat(historyBooks).concat(horrorBooks).concat(romanceBooks).concat(scifiBooks);
console.log(booksArray);

class App extends Component {
  state = {
    bookAsin: null,
  };

  setAppState = (bookAsin) => {
    this.setState({ bookAsin: bookAsin });
  };

  render() {
    console.log(this.state.bookAsin);
    return (
      <>
        <MyNav></MyNav>
        <Container className="my-5">
          <Welcome></Welcome>
          <Row>
            <Col xs={6} md={7} lg={8} xl={9}>
              <ColLeft booksArray={booksArray} setAppState={this.setAppState} selected={this.state.bookAsin}></ColLeft>
            </Col>
            <Col xs={6} md={5} lg={4} xl={3} className="border-start border-1 border-info">
              {this.state.bookAsin && <CommentArea bookId={this.state.bookAsin}></CommentArea>}
            </Col>
          </Row>
        </Container>
        <MyFooter></MyFooter>
      </>
    );
  }
}

export default App;
