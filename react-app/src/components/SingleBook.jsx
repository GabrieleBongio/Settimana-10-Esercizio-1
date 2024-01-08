import { Button, Card, Col } from "react-bootstrap";

import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  render() {
    return (
      <Col xs={12} md={6} lg={4} xl={3}>
        <Card className={this.props.selected == this.props.book.asin ? "border-2 border-danger bg-body-secondary" : ""}>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={() => this.props.setAppState(this.props.book.asin)}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Button variant="outline-success" className="w-100">
              Scopri di più
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
