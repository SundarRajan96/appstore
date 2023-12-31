// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'btn active-btn' : 'active-btn'

  return (
    <li className="list-container">
      <button
        type="button"
        onClick={onClickTabItem}
        className={activeTabClassName}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
