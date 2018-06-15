import React from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './RecordAccess.css'
import Expandable, { ExpandableChildren, ExpandableButton } from '../Expandable'


const Cell = ({
  cell,
  renderAnchor
}) => {
  if (cell.href) {
    return (
      <a href={cell.href}>{cell.text}</a>
    )
  }

  if (cell.to) {
    return (
      renderAnchor(cell)
    )
  }

  if (cell.status) {
    return (
      <span className={`record-access__cell--${cell.status}`}>
        {cell.icon && <Icon name={cell.icon} />}{cell.text}
      </span>
    )
  }

  return (
    <React.Fragment>{cell.text}</React.Fragment>
  )
}

class RecordAccess extends React.Component {
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
      headings,
      rows,
      count,
      name,
      renderAnchor
    } = this.props

    return (
      <div
        className="record-access__container"
        tabIndex={this.state.tabindex}
        aria-labelledby={this.captionId}
        ref={this.containerRef}
        role="group"
      >
        <Expandable>
          <table className="record-access__table">
            <caption id={this.captionId} className="record-access__caption">
              <span className="record-access__caption-text">{caption}</span>
              {this.state.tabindex === '0' && <small className="record-access__caption-scroll-text">(scroll to see more)</small>}
            </caption>

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
                      <td key={t}><Cell cell={cell} renderAnchor={renderAnchor} /></td>
                    ))}
                  </tr>
                ))}
              </ExpandableChildren>
            </tbody>
          </table>

          <ExpandableButton kind="tertiary" small={true} count={count ? rows.length : ''} name={name} />
        </Expandable>
      </div>
    )
  }
}

RecordAccess.propTypes = {
  caption: PropTypes.string.isRequired,
  headings: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  name: PropTypes.string,
  count: PropTypes.bool,
  renderAnchor: PropTypes.func,
};

export default RecordAccess
