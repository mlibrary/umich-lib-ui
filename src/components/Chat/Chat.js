import React from 'react'
import axios from 'axios'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Button,
  Icon
} from 'umich-lib-components-react'
import AskUsSVG from './AskUsSVG'
import './Chat.css'

/**
  Provide users access to Ask a Librarian chat when the service is online.
*/
class Chat extends React.Component {
  state = {
    open: false
  }

  isFixed = () => {
    /**
      Prevents the chat widget from being fixed on small screens. It's better
      to have af new window opens up to use the chat widget.

      Note: This check is on initial load. It won't adjust as viewport is resized.
    */
    if (window) {
      const frameWidth = window.innerWidth;

      if (frameWidth < 1000) {
        return false
      }
    }

    return this.props.fixed
  }

  componentDidMount() {
    const presenceUrl = 'https://libraryh3lp-com.proxy.lib.umich.edu/presence/jid/umlibraryaskalibrarian/chat.libraryh3lp.com/text'

    /**
      Get the online status of the LibraryH3lp service.
    */
    axios.get(presenceUrl)
      .then((response) => {
        if (response.data) {
          switch (response.data) {
            case 'available':
              this.setState({ status: 'online' })
              break;
            case 'unavailable':
              this.setState({ status: 'offline' })
              break;
            default:
              break;
          }
        }
      })
  }

  /**
    When this is fixed it will open a chat widget fixed to the viewport.
    Otherwise it will open the service in a new window.
  */
  handleClick = () => {
    const fixed = this.isFixed()

    if (!fixed) {
      window.open(
        "https://libraryh3lp.com/chat/umlibraryaskalibrarian@chat.libraryh3lp.com?skin=27279",
        "_blank",
        "resizable=1, height=500, width=400"
      )
    } else {
      this.setState({ open: !this.state.open })
    }
  }

  render() {
    const { status, open } = this.state
    const fixed = this.isFixed()

    const chatClassNames = classNames('chat', {
      'chat--fixed': fixed
    })

    if (status === 'online') {
      if (fixed) {
        return (
          <div className={chatClassNames}>
            <button
              className="chat-fixed__button"
              onClick={this.handleClick}
              kind="secondary"
              aria-expanded={open}
            >
              <span className="chat__button-inner">
                <span className="chat-flex-center">
                  <AskUsSVG className="chat__icon" />
                  <span>Ask a Librarian</span>
                </span>
                {open ? (
                  <Icon icon="expand-down" size={28} className="chat__expand-icon" />
                ) : (
                  <Icon icon="expand-up" size={28} className="chat__expand-icon" />
                )}
              </span>
            </button>

            <iframe hidden={!open} src="https://libraryh3lp.com/chat/umlibraryaskalibrarian@chat.libraryh3lp.com?skin=27279" className="chat__iframe" title="Chat with Ask a Librarian"></iframe>
          </div>
        )
      } else {
        return (
          <Button
            className={chatClassNames}
            onClick={this.handleClick}
            role="link"
            kind="secondary"
          >
            <span className="chat__button-inner">
              <AskUsSVG className="chat__icon" />
              <span>Ask a Librarian</span>
            </span>
          </Button>
        )
      }
    }

    return null
  }
}

Chat.propTypes = {
  /** Fix to the bottom right of the viewport on screen widths of 1000px or more. */
  fixed: PropTypes.bool
}

Chat.defaultProps = {
  fixed: false,
};

export default Chat
