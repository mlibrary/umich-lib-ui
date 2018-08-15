import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Icon,
  Expandable,
  ExpandableChildren,
  ExpandableButton
} from 'umich-lib-components-react'

import './ResourceAccess.css'


const Cell = ({
  cell,
  renderAnchor
}) => {
  return (
    <React.Fragment>
      {cell.icon && (<Icon icon={cell.icon} className="margin-right-quarter" />)}

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

  getCellClassNames = (cell) => {
    const cellClassNames = classNames({
      'resource-access__cell': true,
      'resource-access__cell--success': cell.intent === 'success',
      'resource-access__cell--warning': cell.intent === 'warning',
      'resource-access__cell--error': cell.intent === 'error',
    });

    return cellClassNames
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
        className="resource-access__container"
        tabIndex={this.state.tabindex}
        aria-labelledby={this.captionId}
        ref={this.containerRef}
        role="group"
      >
        <Expandable>
          <table className="resource-access__table">
            {caption && (
              <caption id={this.captionId} className="resource-access__caption">
                <span className="resource-access__caption-text">{caption}</span>
                {captionLink && (<a href={captionLink.href} className="resource-access__caption-link">{captionLink.text}</a>)}
                {notes && (
                  <React.Fragment>
                    {notes.map((note, n) => <span key={n} className="resource-access__caption-note">{note}</span>)}
                  </React.Fragment>
                )}
                {this.state.tabindex === '0' && <small className="resource-access__caption-scroll-text">(scroll to see more)</small>}
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
                      <td key={t} className={this.getCellClassNames(cell)}>
                        <Cell cell={cell} renderAnchor={renderAnchor} />
                      </td>
                    ))}
                  </tr>
                ))}
              </ExpandableChildren>
            </tbody>
          </table>

          <ExpandableButton kind="tertiary" small={true} count={rows.length} name={name} />
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
