import {createReduxStore} from "../../store/store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../routes/AppRouter";

const renderTestApp = ( component, options ) => {
    const store = createReduxStore(options?.initialState);

    return (
        <Provider store={store}>
            <MemoryRouter initialEntries={[options?.route]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>
    )
}
export default renderTestApp;