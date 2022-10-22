export const SwitchButtons = ({ titles, setTitle, styles }) => {

  return (
    <>
      <input type="checkbox" id="switch" />
      <div className={`app ${styles}`}>
        <div className="content">
          <label htmlFor="switch">
            <div className="toggle"></div>
            <div className="names content-center items-center h-full">
              <p className="light">Monthly</p>
              <p className="dark">Annually</p>
            </div>
          </label>
          
          <div className="mark"></div>
        </div>
      </div>
    </>
  )
}