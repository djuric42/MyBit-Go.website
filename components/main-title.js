import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './main-title.scss'

export const MainTitle = ({ title = 'Own your Future', videoOpen, translator }) => {
	return (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <p
      className={classNames({
					'MainTitle': true,
					'MainTitle--is-video-open': videoOpen,
				})}
    >
      { translator('common:mybit_home_title') }
    </p>
  </div>
	)
}

MainTitle.propTypes = {
  title: PropTypes.string
}

MainTitle.defaultProps = {
  title: 'Own your Future'
}
