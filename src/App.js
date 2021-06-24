
import { Component } from 'react'
import Form from './components/Form'
import ParkingLots from './components/ParkingLots'
import { data } from './data'
import './App.css';


class App extends Component {

  state = {
    zone: "",
    floor: "",
    parkingCell: "",
    free: true,
    parkingLots: data
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })    
  }

  handleSubmit = e => {
    e.preventDefault()

    const { zone, floor, parkingCell, free, parkingLots } = this.state 

    const newParking = {
      id: 4,
      zone,
      floor,
      parkingCell,
      free,
    }

    this.setState({
      zone: "",
      floor: "",
      parkingCell: "",
      free: false,
      parkingLots: [ newParking, ...parkingLots ]
    })
  }

  render() {
    console.log(this.state)
    const { zone, floor, parkingCell, parkingLots } = this.state

    return (
      <div className="App">
        <Form 
          zone={zone}
          floor={floor}
          parkingCell={parkingCell}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ParkingLots 
          parkingLots={parkingLots}
        />
      </div>
    );
  }
}

export default App;