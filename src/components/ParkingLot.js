
export function ParkingLot({ zone, floor, parkingCell }) {
  return (
    <div className="parkingLot">
      <h1>{zone}</h1>
      <h3>{floor}</h3>
      <h4>{parkingCell}</h4>
    </div>
  )
}