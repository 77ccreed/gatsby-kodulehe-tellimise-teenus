import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import { motion } from "framer-motion"

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section card-disain" style={{
          borderRadius: ".375rem",
          boxShadow: "rgba(17,22,26,.16) 0 0 4px 0,rgba(17,22,26,.08) 0 2px 4px 0,rgba(17,22,26,.08) 0 4px 8px 0",
          boxSizing: "border-box",
          color: " #525c65",
          cursor: "default",
          display: "inline-block",
          lineHeight: "24px",
          margin: "0 10px 15px 0",
          perspective: "1000px",
          position: " relative",
          textAlign: " center",
        }}>
          <div className="has-text-centered">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={transition}
              style={{
                minWidth: '240px',
                width: "60%",
                display: 'inline-block',
                borderRadius: ".375rem",
                boxShadow: "rgba(46,61,73,.2) 6px 7px 9px 0",
                marginBottom: "1rem"
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
  </div >
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
