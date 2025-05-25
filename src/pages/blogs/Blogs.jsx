/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta, blogs } from "../../utils/contentOptions";
import './Blogs.css'

export default function Blogs() {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blogs | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My Blogs</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          {blogs.map((blog, i) => (
            <Col lg={12} key={i} className="mb-4">
              <Link to={`/blog/${blog.slug}`} className="z-1 blog-card-link text-decoration-none">
                <Card className="blog-card p-3 z-5">
                  <Card.Body>
                    <Card.Title className="blog-title">{blog.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted blog-meta">
                      {blog.date} · {blog.author}
                    </Card.Subtitle>
                    <Card.Text className="blog-desc">
                      {blog.description}
                    </Card.Text>
                    <span className="read-more-btn">Read More →</span>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
}
