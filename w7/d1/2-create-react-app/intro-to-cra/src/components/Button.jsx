import './Button.css'

const Button = (props) => {
  const { text, handleClick } = props
  return (
    <button className="default-button" onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
