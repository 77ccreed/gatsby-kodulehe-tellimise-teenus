import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Sildid</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Teenused">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />

            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": `${post.frontmatter.title}`,
                "image": "https://tellikoduleht.ee/static/a256d11f074614a797d05909d8d6f863/fb329/kodulehe-tegemine-sisu-loomine.jpg",
                "description": `${post.frontmatter.description}`,
                //"url": `https://tellikoduleht.ee${fileAbsolutePath.fields.slug}`,
                "mpn": `${post.frontmatter.title}`,
                "brand": {
                  "@type": "Thing",
                  "name": "OÜ Kodulehe Tellimine"
                },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "EUR",
                  "price": `${post.frontmatter.price}`,
                  "sku": `${post.frontmatter.sku}`,
                  "priceValidUntil": "2022-11-05",
                  "itemCondition": "http://schema.org/NewCondition",
                  "availability": "http://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "OÜ Kodulehe Tellimine"
                  }
                }
              })}
            </script>
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        price
        sku
      }
       fileAbsolutePath
          fields {
            slug
          }
    }
  }
`
