import counterReducer, {decrement, increment} from "../counterReducer";

describe( 'counterReducer', () => {
    test( 'counterReducer - increment', () => {
        expect( counterReducer( { value: 0 }, increment() ) ).toEqual({value:1})
    });

    test( 'counterReducer - decrement', () => {
        expect( counterReducer( { value: 0 }, decrement() ) ).toEqual( {value: -1})
    });

    test( 'counterReducer - decrement increment undefined value', () => {
        expect( counterReducer( undefined, decrement() ) ).toEqual( {value: -1})
        expect( counterReducer( undefined, increment() ) ).toEqual( {value: 1})
    });

    // test( 'counterReducer - ')
})