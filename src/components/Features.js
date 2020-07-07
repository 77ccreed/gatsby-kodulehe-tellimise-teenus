import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import { motion } from "framer-motion"

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered" style={{
            border: '1px dolid black'
          }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={transition}
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </motion.div>
          </div>
          <motion.p
            whileHover={{ scale: 1.1 }}
            transition={transition}
            style={{
              marginTop: '10px',
            }}>{item.text}</motion.p>
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
