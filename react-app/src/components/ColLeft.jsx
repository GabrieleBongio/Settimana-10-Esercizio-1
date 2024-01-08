import { Row } from "react-bootstrap";
import BookList from "./BookList";

const ColLeft = (props) => (
  <Row className="g-1">
    <BookList selected={props.selected} bookArray={props.booksArray} setAppState={props.setAppState}></BookList>
  </Row>
);

export default ColLeft;
