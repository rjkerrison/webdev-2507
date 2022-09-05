import React, { Component } from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: 2022,
    }
  }

  componentDidMount() {
    console.log('MOUNTED THE FOOTER')
  }

  render() {
    return (
      <footer onClick={() => this.setState({ year: this.state.year + 1 })}>
        This website was made by {this.props.name} &copy; {this.state.year}
      </footer>
    )
  }
}

export default Footer
