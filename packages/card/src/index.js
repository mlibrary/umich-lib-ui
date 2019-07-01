import React from 'react'
import PropTypes from 'prop-types';
import {
  COLORS,
  SPACING,
  Z_SPACE,
  LINK_STYLES,
  TYPOGRAPHY
} from '@umich-lib/styles'

export default function Card({
  title,
  subtitle,
  image,
  href,
  description,
  renderAnchor,
  ...rest
}) {
  const anchorStyles = {
    display: 'block',
    maxWidth: '480px',
    ':hover': {
      ...Z_SPACE[8],
      '.card--title': {
        ...LINK_STYLES['description'][':hover']
      }
    },
    borderRadius: '2px',
    padding: SPACING['M']
  }

  const anchorProps = {
    href,
    anchorStyles,
    ...rest
  }

  const content = (
    <React.Fragment>
      {image && (
        <div
          aria-hidden="true"
          css={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            paddingTop: '55%',
            marginBottom: SPACING['S'],
            borderRadius: '2px'
          }}
        >
        </div>
      )}

      <p role="heading">
        {subtitle && (<span css={{
          display: 'block',
          color: COLORS.neutral[300],
          marginBottom: SPACING['2XS'],
          ...TYPOGRAPHY['3XS']
        }}>{subtitle}</span>)}
        <span
          css={{
            ...LINK_STYLES['description'],
          }}
          className="card--title"
        >{title}</span>
      </p>

      {description && (
        <p css={{
          color: COLORS.neutral[300],
          marginTop: SPACING['XS']
        }}>
          {description}
        </p>
      )}
    </React.Fragment>
  )

  if (renderAnchor) {
    return renderAnchor({
      ...anchorProps,
      children: content
    })
  }

  return (
    <a
      {...anchorProps}
      css={anchorStyles}
      children={content}
    />
  )
}

Card.propTypes = {
  /*
  * This is a purely decorative image and shouldn't be required
  * to understand the Card.
  **/
  image: PropTypes.string.isRequired,

  /*
  * The title should describe where the Card will take
  * the user when they click on it.
  **/
  title: PropTypes.string.isRequired,

  /*
  * Provide descrive text.
  **/
  subtitle: PropTypes.string,

  /*
  * An optional parameter to provide descrive text to
  * supliment the Card.
  **/
  description: PropTypes.string,

  /*
  * Provide a url for where this card should route to.
  **/
  href: PropTypes.string.isRequired,

  /*
  * An optional parameter to allow overriding the anchor rendering.
  * Useful for using Tab along with react-router or other client
  * side router libraries.
  **/
  renderAnchor: PropTypes.func
};
