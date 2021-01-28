import PropTypes from 'prop-types';

export  default function Message ({text, sender}) {

  const alignSelf = sender === 'robot' ? 'robot' : 'me';

  return (
    <div  className= {`message ${alignSelf}`}>
      <div>{text}</div>
      <div className="message-sender">{sender}</div>
    </div>
  )
}

Message.propTypes = {
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  sender: PropTypes.string.isRequired
}
