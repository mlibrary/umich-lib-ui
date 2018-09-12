import React from 'react';
import PropTypes from 'prop-types'
import Icon from '@umich-lib-ui/icon'
import {
  Expandable,
  ExpandableChildren,
  ExpandableButton
} from '@umich-lib-ui/expandable'
import { css } from 'emotion'
import {
  colors,
  intent_colors
} from '@umich-lib-ui/styles'

const cssTableContainer = css({
  overflowX: 'auto',
  overflowY: 'visible'
})

const td_and_th = {
  padding: '0.5rem 0',
  textAlign: 'left',
  '&:not(:last-child)': {
    paddingRight: '1rem'
  }
}

const cssTable = css({
  borderCollapse: 'collapse',
  borderSpacing: '0',
  width: '100%',
  minWidth: '30rem',
  'tbody': {
    'tr:not(:last-child)': {
      borderBottom: `solid 1px ${colors.grey[400]}`
    }
  },
  'td': td_and_th,
  'th': td_and_th,
  'thead': {
    'th': {
      fontSize: '0.875rem',
      color: colors.grey[600]
    },
    borderBottom: `solid 2px ${colors.grey[400]}`
  }
})

const cssCaptionText = css({
  fontWeight: '600',
  marginRight: '0.5rem'
})

const cssCaption = css({
  textAlign: 'left'
})

const cssCaptionLink = css({
  fontSize: '0.875rem'
})

const cssCaptionNote = css({
  display: 'block',
  fontSize: '0.875rem'
})

const cssCellIcon = css({
  marginRight: '0.25rem',
  marginTop: '-3px'
})

const Cell = ({
  cell,
  renderAnchor
}) => {
  return (
    <React.Fragment>
      {cell.icon && (<Icon icon={cell.icon} className={cssCellIcon} />)}

      {(() => {
        if (cell.href) {
          return (<a href={cell.href}>{cell.text}</a>)
        }
        if (cell.to) {
          return (renderAnchor(cell))
        }
        if (cell.html) {
          return <span className="resource-access__cell-html" dangerouslySetInnerHTML={{ __html: cell.html }} />
        }
        return (<React.Fragment>{cell.text}</React.Fragment>)
      })()}
    </React.Fragment>
  )
}

/**
  Use this component to provide a comprehensive listing of options to access a resource.
*/
class ResourceAccess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabindex: null
    }
    this.captionId = 'caption-' + Math.random().toString(36).substr(2, 9);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    let container = this.containerRef.current
    let scrollable = container.scrollWidth > container.clientWidth;
    this.setState({
      tabindex: scrollable ? '0' : null
    });
  }

  render() {
    const {
      caption,
      notes,
      captionLink,
      headings,
      rows,
      name,
      renderAnchor
    } = this.props

    return (
      <div
        className={cssTableContainer}
        tabIndex={this.state.tabindex}
        aria-labelledby={this.captionId}
        ref={this.containerRef}
        role="group"
      >
        <Expandable>
          <table className={cssTable}>
            {caption && (
              <caption id={this.captionId} className={cssCaption}>
                <span className={cssCaptionText}>{caption}</span>
                {captionLink && (<a href={captionLink.href} className={cssCaptionLink}>{captionLink.text}</a>)}
                {notes && (
                  <React.Fragment>
                    {notes.map((note, n) => <span key={n} className={cssCaptionNote}>{note}</span>)}
                  </React.Fragment>
                )}
                {this.state.tabindex === '0' && <small className={cssCaptionNote}>(scroll to see more)</small>}
              </caption>
            )}

            <thead>
              <tr>
                {headings.map((heading, i) => (
                  <th scope="col" key={i}>{heading}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <ExpandableChildren show={1}>
                {rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, t) => (
                      <td key={t} className={css`
                        color: ${intent_colors[cell.intent]}
                      `}>
                        <Cell cell={cell} renderAnchor={renderAnchor} />
                      </td>
                    ))}
                  </tr>
                ))}
              </ExpandableChildren>
            </tbody>
          </table>

          <ExpandableButton kind="secondary" small count={rows.length} name={name} />
        </Expandable>
      </div>
    )
  }
}

ResourceAccess.propTypes = {
  /**
    Table column headings.
  */
  headings: PropTypes.array.isRequired,
  /**
    Table rows must be an array of arrays. Each inner array represent a row and will contain objects for each cell. A cell object must contain a text key with a string value. If you wish the cell to be linked somewhere then include `to` or an `href` key. See `renderAnchor` prop to decide between `to` or `href`.
  */
  rows: PropTypes.array.isRequired,
  /**
    Name used to show all rows.
  */
  name: PropTypes.string,
  /**
    The displayed table caption. If you do not use this prop, make sure the preceding heading is appropriate.
  */
  caption: PropTypes.string,
  /**
    Link to more information about the table caption.
  */
  captionLink: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }),
  /**
    Notes necessary to understand the resource access options.
  */
  notes: PropTypes.array,
  /** Row cells that use key 'to' instead of 'href' will use this render prop. This is useful if you want to use a routing library such as React Router instead of an HTML anchor. */
  renderAnchor: PropTypes.func
};

export default ResourceAccess