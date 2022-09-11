import {Counter} from "./Counter";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";
import renderWithRedux from "../../tests/helpers/renderWithRedux";
import renderTestApp from "../../tests/helpers/renderTestApp";

describe('Counter', () => {

    test( 'Counter - increment', () => {
        // render( <Counter/> );
        /*const {getByTestId} = render(
            <Provider store={createReduxStore()}>
                <Counter/>
            </Provider>
        );*/
        // const {getByTestId} = render( renderWithRedux(<Counter/>) );
        const {getByTestId} = render( renderTestApp(<Counter/>) );

        const incrementBtn = screen.getByTestId('increment-btn');
        expect( getByTestId('value-title') ).toHaveTextContent('0');
        userEvent.click( incrementBtn );
        expect( getByTestId('value-title') ).toHaveTextContent('1');
    });

    test( 'Counter - increment, init value', () => {
        // render( <Counter/> );
/*        const {getByTestId} = render(
            <Provider store={createReduxStore({
                counter: {
                    value: 10
                }
            })}>
                <Counter/>
            </Provider>
        );*/

        /*const {getByTestId} = render( renderWithRedux(<Counter/>, {
            counter: {
                value: 10
            }
        }) );*/

        const {getByTestId} = render( renderTestApp(null, {
            route: '/',
            initialState: {
                counter: { value: 10 }
            }
        }) );

        const incrementBtn = screen.getByTestId('increment-btn');
        expect( getByTestId('value-title') ).toHaveTextContent('10');
        userEvent.click( incrementBtn );
        expect( getByTestId('value-title') ).toHaveTextContent('11');
    });
})