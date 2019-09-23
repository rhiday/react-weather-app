import React from 'react';

class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Type City" />
                <input type="text" name="country" placeholder="Type Country" />
                <button>Get weather</button>

            </form>
        );
    }  
};

export default Form;