import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather'
import './App.css';


const API_KEY = "23ca906d8c6e4038aa78ad0beaa0eb44";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Location is empty!"
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="title">
          <Titles />
        </div>
        <div className="form">
          <Form getWeather={this.getWeather}/>
        </div>
        <div className="weather">
          <Weather
            temperature = {this.state.temperature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            description = {this.state.description}
            error = {this.state.error}
        />  
        </div>
        
      </div>
    );
  }
};

export default App;