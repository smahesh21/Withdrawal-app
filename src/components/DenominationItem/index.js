import './index.css'

const DenominationItem = props => {
  const {eachValue, onChangeBalance} = props
  const {value} = eachValue
  const updateBalance = () => {
    onChangeBalance(value)
  }
  return (
    <li className="list-container">
      <button className="amount-button" type="button" onClick={updateBalance}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
