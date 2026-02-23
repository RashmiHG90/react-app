import styles from './MyComponent.module.css'
import './App.css' // equal to linking external css file

function MyComponent(){

return(
    <div>
        <h2 className={styles.myClass}>Applying styling using React CSS module</h2>
        <p className = "info">Have used external css file for styling</p>
    </div>
)

}

export default MyComponent;