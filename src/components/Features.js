import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered" style={{
            border: '1px dolid black'
          }}>
            <div
              style={{
                width: '80%',
                display: 'inline-block',



              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p style={{
            margin: '10px',


            fontSize: '18px',
            letterSpacing: '.03em',
            lineHeight: '26px',

          }}>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
