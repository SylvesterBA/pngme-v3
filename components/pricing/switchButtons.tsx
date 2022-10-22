import styles from '../../styles/components/SwitchButtons.module.css'

export const SwitchButtons = ({ titles, setTitle }) => (
  <>
    <input type="checkbox" id="switch" />
    <div className={`app ${styles.switchButtons}`}>
      <div className={styles.content}>
        <label htmlFor="switch">
          <div className="toggle"></div>
          <div className={`${styles.names} content-center items-center h-full`}>
            <p className="light">Monthly</p>
            <p className="dark">Annually</p>
          </div>
        </label>

        <div className="mark"></div>
      </div>
    </div>
  </>
)