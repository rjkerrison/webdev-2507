import './App.css';

import foods from './foods.json';
import { Button, Divider, Row } from 'antd';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchQuery, setSearchQuery] = useState(``);

  const AddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  }

  const deleteFood = (name) => {
    const filtered = foodList.filter(food => food.name !== name)
    setFoodList(filtered)
  }

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm AddFood={AddFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodList
          .filter(food => food.name.toLowerCase().includes(searchQuery))
          .map((food) => {
            return <FoodBox
              key={food.name}
              deleteFood={deleteFood}
              {...food}
            />
          })}
      </Row>
    </div>
  );
}

export default App;
