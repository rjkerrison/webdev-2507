import React, { useState } from 'react'
import Input from './Input'

const fields = [
  {
    label: 'Name',
    fieldName: 'firstName',
    type: 'text',
  },
  {
    label: 'Who is your favourite bear?',
    fieldName: 'bear',
    type: 'text',
  },
  {
    label: 'How long is your hair in centimetres?',
    fieldName: 'hair',
    type: 'number',
    max: 50,
    min: 0,
  },
  {
    label: 'City',
    fieldName: 'city',
    placeholder: 'e.g. Paris',
  },
  {
    label: 'Dish Name',
    fieldName: 'name',
    placeholder: 'e.g. Falafel Pita',
  },
]

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    instrument: '',
    hairLength: 0,
    likesMetal: false,
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(
      `Let's pretend we're sending an email to Valery about the new band member`,
      formData
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((fieldInfo) => (
        <Input {...fieldInfo} formData={formData} setFormData={setFormData} />
      ))}

      <Input
        type="text"
        id="name"
        fieldName="name"
        label="Name"
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        label="City"
        fieldName="city"
        placeholder="e.g. Paris"
        formData={formData}
        setFormData={setFormData}
      />

      <Input
        type="text"
        id="nationality"
        fieldName="nationality"
        label="Wher you from??"
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        type="text"
        id="favouriteBear"
        fieldName="favouriteBear"
        label="Who is your favourite bear?"
        formData={formData}
        setFormData={setFormData}
      />
      <div>
        <label htmlFor="instrument">Instrument:</label>
        <select
          name="instrument"
          id="instrument"
          value={formData.instrument}
          onChange={(event) =>
            setFormData({
              ...formData,
              instrument: event.target.value,
            })
          }
        >
          <option value="guitar">Guitar</option>
          <option value="bass">Bass</option>
          <option value="drum">Drum</option>
          <option value="vocals">Vocals</option>
        </select>
      </div>

      <Input
        type="number"
        id="hair-length"
        fieldName="hairLength"
        label="Hair length in cm"
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        type="checkbox"
        id="likes-metal"
        fieldName="likesMetal"
        label="Do you like metal"
        formData={formData}
        setFormData={setFormData}
      />
      <input type="submit" value="Apply to join" />
    </form>
  )
}

export default SignupForm
