import './Grid.css'

import GridSquare from './GridSquare'

const Grid = ({ width = 3, height = 3 }) => {
  const cells = []
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      cells.push(<GridSquare />)
    }
  }

  return <div className="Grid">{cells}</div>
}

export default Grid
