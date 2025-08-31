import { Component } from "react";

import { Information } from '../Information/Information/Information.jsx';
import { Field } from '../Field/Field/Field.jsx';
import { RestartButton } from '../RestartButton/RestartButton.jsx';

export class App extends Component {
  render() {
    return (
      <div className="flex flex-col text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Information />
        <Field />
        <RestartButton /> 
      </div>
    )}
}