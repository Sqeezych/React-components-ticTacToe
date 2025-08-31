import { Component } from "react";
import { connect } from 'react-redux';
import { RESTART_GAME } from '../../actions';

class RestartButtonContainer extends Component {
    constructor(props) {
        super(props);
    }

    restartGame() {
        this.props.dispatch(RESTART_GAME());
    }

    render() {
        return <button onClick={this.restartGame.bind(this)} className='hover:opacity-65 bg-zinc-100 border-1 w-[210px] h-[80px]'>Начать заново</button>
    }
    
}

export const RestartButton = connect()(RestartButtonContainer);