import './Button.css'

const Button = (props) => {
  const { text } = props
  return (
    <button className="default-button" onClick={() => alert('CLICKED ME')}>
      {text}
    </button>
  )
}

export default Button
