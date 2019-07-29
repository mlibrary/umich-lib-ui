import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  Button,
  Icon,
  BREAKPOINTS
} from '../../../'

const AskUsSVG = ({ className }) => (
  <svg className={className} width="282.682" height="130.146" viewBox="0 0 282.682 130.146">
    <path id="bubble_3_" fill="#FFCF01" d="M179.486,29.948c-41.058-21.774-107.634-21.774-148.689,0 c-41.062,21.773-41.062,57.076,0,78.851c3.595,1.905,7.393,3.639,11.354,5.209c-5.937,9.262-14.562,16.14-14.562,16.14 s18.048-0.609,32.208-10.465c39.087,9.902,87.309,6.283,119.689-10.884C220.548,87.023,220.548,51.721,179.486,29.948z"
    />
    <path id="bubble_2_" fill="#064473" d="M268.192,0H110.389c-8.005,0-14.491,6.488-14.491,14.487v65.787 c0,8.005,6.486,14.489,14.491,14.489h60.09c13.492,16.812,41.679,20.023,41.679,20.023s-9.593-9.021-14.533-20.023h70.567 c8.009,0,14.489-6.484,14.489-14.489V14.487C282.682,6.488,276.2,0,268.192,0z"
    />
    <g fill="#FFF">
      <path d="M140.418,59.408l-3.94,14.202h-12.971l16.911-55.33h16.418l17.157,55.33h-13.463l-4.27-14.202H140.418z M154.455,50.05l-3.448-11.739c-0.984-3.283-1.97-7.388-2.791-10.672h-0.164c-0.82,3.284-1.642,7.471-2.545,10.672l-3.283,11.739 H154.455z"
      />
      <path d="M181.628,62.692c2.299,1.396,7.061,3.037,10.754,3.037c3.777,0,5.336-1.313,5.336-3.366 c0-2.052-1.23-3.037-5.91-4.597c-8.291-2.791-11.492-7.307-11.41-12.067c0-7.471,6.402-13.135,16.336-13.135 c4.68,0,8.865,1.067,11.328,2.298l-2.217,8.62c-1.805-0.985-5.254-2.299-8.701-2.299c-3.037,0-4.762,1.231-4.762,3.284 c0,1.888,1.561,2.873,6.486,4.597c7.634,2.627,10.836,6.485,10.918,12.396c0,7.47-5.911,12.971-17.404,12.971 c-5.254,0-9.933-1.149-12.971-2.792L181.628,62.692z"
      />
    </g>
    <path fill="#FFF" d="M232.064,50.378h0.164c0.902-1.642,1.888-3.283,2.873-4.843l8.127-12.068h15.022l-14.366,16.255 l16.419,23.889h-15.352l-9.687-16.501l-3.201,3.94V73.61h-12.479V15.325h12.479V50.378z"
    />
  </svg>
)

const StyledAskUsSVG = styled(AskUsSVG)({
  width: '2.5rem',
  height: '1.5rem',
  marginRight: '0.5rem'
})

const ChatFixedContainer = styled('div')({
  position: 'fixed',
  right: '1rem',
  bottom: '0',
  maxWidth: '22rem',
  background: 'white',
  zIndex: '100',
  borderRadius: '4px 4px 0 0',
  boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 3px 1px'
})

const ChatFixedButton = styled('button')({
  borderRadius: '4px 4px 0 0',
  padding: '0.5rem 1rem',
  width: '100%',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
  background: 'white'
})

const ChatFixedButtonInnerContainer = styled('span')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const ChatIframe = styled('iframe')({
  width: '100%',
  height: '100%',
  border: 'none',
  maxHeight: '25rem',
  minHeight: '24rem'
})

const ChatButtonContentContainer = styled('span')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

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
      to have a new window opens up to use the chat widget.

      Note: This check is on initial load. It won't adjust as viewport is resized.
    */
    if (typeof window !== `undefined`) {
      const frameWidth = window.innerWidth;

      if (frameWidth < BREAKPOINTS.LARGESCREEN) {
        return false
      }
    }

    return this.props.fixed
  }

  componentDidMount() {
    const presenceUrl = 'https://libraryh3lp-com.proxy.lib.umich.edu/presence/jid/umlibraryaskalibrarian/chat.libraryh3lp.com/text?skin=27279'

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

  renderButton = () => {
    return (
      <ChatButtonContentContainer className="x-spacing">
        <StyledAskUsSVG />
        <span>Ask a Librarian</span>
      </ChatButtonContentContainer>
    )
  }

  render() {
    const { open } = this.state
    const fixed = this.isFixed()

    if (fixed) {
      return (
        <ChatFixedContainer>
          <ChatFixedButton onClick={this.handleClick}>
            <ChatFixedButtonInnerContainer className="x-spacing">
              {this.renderButton()}
              {open ? (
                <Icon icon="expand_more" size={28} />
              ) : (
                <Icon icon="expand_less" size={28} />
              )}
            </ChatFixedButtonInnerContainer>
          </ChatFixedButton>
          <ChatIframe
            hidden={!open}
            src="https://libraryh3lp.com/chat/umlibraryaskalibrarian@chat.libraryh3lp.com?skin=27279"
            title="Chat with Ask a Librarian"
          />
        </ChatFixedContainer>
      )
    }

    return (
      <Button
        onClick={this.handleClick}
      >
        {this.renderButton()}
      </Button>
    )
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