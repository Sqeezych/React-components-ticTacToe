import { Component } from "react";
import { connect } from 'react-redux';
import { FieldLayout } from "../FieldLayout/FieldLayout.jsx";
import * as CONST from '../../../CONST.js';
import { SET_CURRENT_PLAYER, SET_STATUS, SET_FIELD, SET_WINNER } from '../../../actions.js';

class FieldContainer extends Component {
  constructor(props) {
    super(props);
  }

  // Функция для проверки окончания игры
  isEnd(field) {
    // Проверка на победу 
    for (let subarr of CONST.WIN_PATTERNS) {
      if (field[subarr[0]] !== '' 
        && field[subarr[0]] === field[subarr[1]] 
        && field[subarr[0]] === field[subarr[2]]) {
          return CONST.STATUS.WIN;
      }
    }
    // Проверка на ничью
    if (!field.some(elem => elem === '')) {
      return CONST.STATUS.DRAW;
    }
  }

  // Обработчик нажатия на ячейку
  onPush(id) {
      if (this.props.status === CONST.STATUS.WIN || this.props.status === CONST.STATUS.DRAW || this.props.field[id]) {
        return;
      } else {
          let arr = [...this.props.field];
          arr[id] = this.props.currentPlayer;
          this.props.dispatch(SET_FIELD(arr));
          let result = this.isEnd(arr);
          if (result === CONST.STATUS.WIN) {
            this.props.dispatch(SET_STATUS(CONST.STATUS.WIN));
            this.props.dispatch(SET_WINNER(this.props.currentPlayer));
          } else if (result === CONST.STATUS.DRAW) {
            this.props.dispatch(SET_STATUS(CONST.STATUS.DRAW));
          }
      }      
      const currentPlayerForDispatch = this.props.currentPlayer === CONST.PLAYER.X ? CONST.PLAYER.O : CONST.PLAYER.X;
      this.props.dispatch(SET_CURRENT_PLAYER(currentPlayerForDispatch));
      return;
    }

  render() {
    return <FieldLayout field={this.props.field} onPush={this.onPush.bind(this)}/>
  }
}

const mapStateToProps = (state) => ({
  field: state.field,
  currentPlayer: state.currentPlayer,
  status: state.status,
})

export const Field = connect(mapStateToProps)(FieldContainer);