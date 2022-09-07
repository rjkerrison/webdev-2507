import React from 'react'

const Input = ({
  id,
  label,
  type = 'text',
  fieldName,
  formData,
  setFormData,
  placeholder,
  ...otherProps
}) => {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        {...otherProps}
        type={type}
        name={fieldName}
        id={id}
        value={formData[fieldName]}
        checked={formData[fieldName]}
        placeholder={placeholder}
        onChange={(event) =>
          setFormData({
            ...formData,
            [fieldName]:
              type === 'checkbox' ? event.target.checked : event.target.value,
          })
        }
      />
    </>
  )
}

export default Input
