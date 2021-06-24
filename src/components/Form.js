

function Form({
  zone,
  floor,
  parkingCell,
  handleChange,
  handleSubmit
}) {

    return (
      <div className="App">
        <h1>Parking Lots</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="zone"> zone </label>
          <select name="zone" id="zone" onChange={handleChange}>
            <option value=""> -- Escoge una opción -- </option>
            <option value="Plaza Palmas">Plaza Palmas</option>
            <option value="Plaza Cines">Plaza Cines</option>
            <option value="Plaza Fuente">Plaza Fuente</option>
          </select>

          <label htmlFor="floor"> floor </label>
          <select name="floor" id="floor" onChange={handleChange}>
            <option value=""> -- Escoge una opción -- </option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
          </select>

          <label htmlFor="parkingCell"> parkingCell </label>
          <input 
            id="parkingCell"
            name="parkingCell"
            type="text"
            onChange={handleChange}
            value={parkingCell}
          />
          <button>Guardar</button>
        </form>
      </div>
    )
}

export default Form