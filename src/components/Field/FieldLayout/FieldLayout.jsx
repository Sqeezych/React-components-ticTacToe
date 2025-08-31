import { Component } from "react";

export class FieldLayout extends Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (<div className='bg-zinc-100 flex flex-wrap w-[210px] h-[210px]'>
                    {this.props.field.map((elem, id) => <button className='hover:opacity-50 border-1 text-center text-[24px] w-[70px] h-[70px]' onClick={() => this.props.onPush(id)} key={id}>{elem}</button>)}
                </div>)}
}