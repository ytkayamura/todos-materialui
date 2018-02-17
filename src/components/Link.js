import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <Button disabled style={{ color: 'red' }}>{children}</Button>
  }

  return (
    // eslint-disable-next-line
    <Button href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >{children}</Button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
