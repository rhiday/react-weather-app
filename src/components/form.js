import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Type City" />
        <input type="text" name="country" placeholder="Type Country" />
        <button>Get weather</button>

    </form>

);

export default Form;