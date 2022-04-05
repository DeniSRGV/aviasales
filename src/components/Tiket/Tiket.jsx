const Tiket = () => {
  return (
    <div className="tiket-wrapper">
      <div className="tiket-header">
        <div className="price">13400Р</div>
        <div className="photo">
          <img src="#" alt="avia-logo" />
        </div>
      </div>
      <div className="tiket-block">
        <span className="subtitle">MOW – HKT</span>
        10:45 – 08:00
      </div>
      <div className="tiket-block">
        <span className="subtitle">В пути</span>
      </div>
      <div className="tiket-block">
        <span className="subtitle">2 пересадки</span>
      </div>
      <div className="tiket-block">
        <span className="subtitle">MOW – HKT</span>
      </div>
      <div className="tiket-block">
        <span className="subtitle">В пути</span>
      </div>
      <div className="tiket-block">
        <span className="subtitle">1 пересадка</span>
      </div>
    </div>
  )
}
export default Tiket
