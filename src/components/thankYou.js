import React from "react";
import { Row, Col } from "reactstrap";

export default (_) => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Thank You!</p>
          <i className="fas fa-pizza-slice thank-you-pizza"></i>
          <p className="thanks-subtext">Booking Confirmed</p>
        </Col>
      </Row>
    </div>
  );
};
