import { Divider, Input } from 'antd'
import { useState } from 'react'

const AddFoodForm = ({AddFood}) => {
  const [food, setFood] = useState({
    name: ``,
    image: ``,
    calories: 0,
    servings: 0
  })

  const handleChange = (e) => {
    setFood({ ...food, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    AddFood(food);

    setFood({
      name: ``,
      image: ``,
      calories: 0,
      servings: 0
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor='name'>Name</label>
      <Input id="name" value={food.name} type="text" onChange={handleChange} />

      <label htmlFor='image'>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input id="image" value={food.image} type="text" onChange={handleChange} />

      <label htmlFor='calories'>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input id="calories" value={food.calories} type="number" onChange={handleChange} />

      <label htmlFor='servings'>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input id="servings" value={food.servings} type="number" onChange={handleChange} />

      <button type="submit">Create</button>
    </form>
  )
}

export default AddFoodForm