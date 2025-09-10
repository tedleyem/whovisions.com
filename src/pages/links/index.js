import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  photolinks,
} from "../../content_option";

export const Links = () => {
  return (
    <HelmetProvider>
      <Container className="Payments-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Photo Dumps | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Photo Dumps</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row> 
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Here is a list of photo dumps</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {photolinks.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td><a href={data.preview}>PREVIEW</a></td>
                      <td><a href={data.purchase}>PURCHASE</a></td>
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
