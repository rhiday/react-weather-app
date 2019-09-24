import React from 'react';

const Weather = props => (
    <div className="weather">
        {
            props.city && props.country && <p className="weather-key">Location:
                <label className="weather-value"> { props.city }, { props.country}</label>
            </p>
        }
        { 
            props.temperature && <p className="weather-key">Temperature: 
                <label className="weather-value"> { props.temperature }</label>
            </p>
        }
        { 
            props.humidity && <p className="weather-key">Humidity:
                <label className="weather-value"> { props.humidity }</label>
            </p>
        }
        { 
            props.condutitions && <p className="weather-key">Conditions: 
                <label className="weather-value"> { props.description }</label>
            </p>
        }
        { 
            props.error && <p className="weather-error"> {props.error}</p>
        }
    </div>
);

export default Weather;