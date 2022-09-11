import {useState} from "react";

export const HelloWorld = () => {
    const [value,setValue] = useState('');
    const [visible,setVisible] = useState(false);
    const toggle = () => value === 'hello' && setVisible( prev => !prev );
    const OnChange = (e) => setValue( e.target.value );
    return (
        <div>
            <input id='search' type='text' onChange={OnChange}/>
            <button id='toggle' onClick={toggle}>HELLO WORLD</button>
            { visible && <h1 id='hello'>HELLO WORLD</h1> }
        </div>
    );
}