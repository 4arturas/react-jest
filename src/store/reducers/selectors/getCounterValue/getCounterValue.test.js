import {getCounterValue} from "./getCounterValue";

describe('getCounterValue',  () => {
    test('getCounterValue - empty state', () => {
        expect( getCounterValue( {} ) ).toBe(0);
    })
    test('getCounterValue - filled state', () => {
        expect( getCounterValue( {
            counter: {
                value: 100
            }
        } ) ).toBe(100);
    })
})