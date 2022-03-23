import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onChangeBalance = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="name-container">
            <p className="circle">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="description">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="amount-in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdrawn">Withdrawn</p>
          <p className="withdrawn-description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul-list-container">
            {denominationsList.map(eachAmount => (
              <DenominationItem
                eachValue={eachAmount}
                onChangeBalance={this.onChangeBalance}
                key={eachAmount.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
