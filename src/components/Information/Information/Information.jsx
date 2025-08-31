import { Component } from "react";
import { connect } from "react-redux";
import * as CONST from '../../../CONST';

class InformationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    }
  }

  // Проверка результата 
  getResult() {
    if (this.props.status === CONST.STATUS.WIN) {
      this.state.result = `Победил ${this.props.winner}`;
    } else if (this.props.status === CONST.STATUS.DRAW) {
      this.state.result = `Ничья`;
    } else {
      this.state.result = `Ход игрока ${this.props.currentPlayer}`;
    }
  }

  render() {
    this.getResult();
    return <div>{this.state.result}</div>
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  currentPlayer: state.currentPlayer,
  winner: state.winner,
})

export const Information = connect(mapStateToProps)(InformationContainer);