import { store } from '../../../store';

export default function InformationLayout() {
    const { getState } = store;

    return (
        <div>{getState().result}</div>
    )
}