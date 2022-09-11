import {createReduxStore} from "../../store/store";
import {Provider} from "react-redux";

const renderWithRedux = (component, initialState) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {component}
        </Provider>
    )
}

export default renderWithRedux;