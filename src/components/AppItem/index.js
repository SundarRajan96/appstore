// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp

  return (
    <>
      <li className="section-list">
        <img src={imageUrl} alt={appName} className="image" />
        <p className="app-name">{appName}</p>
      </li>
    </>
  )
}
export default AppItem
