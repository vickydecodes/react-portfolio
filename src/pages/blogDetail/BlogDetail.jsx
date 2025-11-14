/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../../utils/contentOptions";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import "./BlogDetail.css";
import Markdown from "react-markdown";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <Container className="About-header mt-5">
        <h2>Blog not found</h2>
        <Link to="/blogs" className="read-more-btn">
          ← Back to Blogs
        </Link>
      </Container>
    );
  }

  return (
    <HelmetProvider>
      <Container className="blog-detail-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{blog.title}</title>
        </Helmet>

        <Row className="mb-4 mt-5">
          <Col lg="10">
            <h1 className="display-5 mb-3">{blog.title}</h1>

            <p className="blog-meta mb-4">{blog.date}</p>

            <hr className="t_border my-4 ml-0 text-left" />

            <div className="blog-content markdown-body">
              <Markdown>{blog.fullContent || blog.description}</Markdown>
            </div>

            <Link to="/blogs" className="read-more-btn mt-4 d-inline-block">
              ← Back to Blogs
            </Link>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
}
