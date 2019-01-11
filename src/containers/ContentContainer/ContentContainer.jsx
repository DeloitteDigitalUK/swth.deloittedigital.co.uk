import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styles from './ContentContainer.module.scss';

const Introduction = ({ section }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                section
              }
            }
          }
        }
      }
    `}
    render={data => {
      const foundSection = data.allMarkdownRemark.edges.find(
        edge => edge.node.frontmatter.section === section
      );

      return (
        foundSection && (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: foundSection.node.html }}
          /> // eslint-disable-line
        )
      );
    }}
  />
);

export default Introduction;
