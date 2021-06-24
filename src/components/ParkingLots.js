
import { ParkingLot } from './ParkingLot'

function ParkingLots({ parkingLots }) {
  return (
    <div className="parkingLots">
      {!!parkingLots & parkingLots.length > 0 && 
        parkingLots.map(({ id, zone, floor, parkingCell, free }) => (
          <div className="ParkingLot" key={id}>
          { free && 
             <ParkingLot 
              zone={zone}
              floor={floor}
              parkingCell={parkingCell}
             />
          }
          </div>
      ))}
    </div>
  )
}

export default ParkingLots