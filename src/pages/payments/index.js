import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  paymentdatalinks,
  paymentabout,
} from "../../content_option";

export const Payments = () => {
  return (
    <HelmetProvider>
      <Container className="Payments-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Payments | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Payments</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row> 
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{paymentabout.text}</p>
            </div>
          </Col>
        <Row className=" sec_sp"> 
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {paymentdatalinks.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td><a href={data.url}>Link</a></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row> 
      </Container>
    </HelmetProvider>
  );
};
