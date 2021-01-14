import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Ulist from "../components/Ulist";
import Fave from "../components/Fave";
import Weather from "../components/Weather";
import Footer from "../components/Footer";
import API from "../utils/API";

class MainPage extends Component {
  state = {
    styling: "none",
    faveZips: [],
    weatherStats: [],
    search: ""
  }

  componentDidMount() {
    if (!this.state.faveZips.length) {
      this.obtainFaves();
    }
  }

  obtainFaves = () => {
    API.getZips()
      .then(res => this.setState({ faveZips: res.data }))
      .catch(err => console.log(err));
  }

  focus = () => {
    this.setState({ styling: " " });
  }

  blur = () => {
    setTimeout(() => {
      this.setState({ styling: "none" });
    }, 500);
  }

  searchZip = (query) => {
    API.search(query)
      .then(res => this.setState({ weatherStats: res.data }))
      .catch(err => console.log(err));
  }

  inputChange = event => {
    const value = event.target.value;
    this.setState({ search: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.searchZip(this.state.search);
  };

  handleXClick = id => {
    API.deleteZip(id)
      .then(res => this.obtainFaves())
      .catch(err => console.log(err));
  }

  addFave = zip => {
    API.saveZip(zip)
      .then(res => this.obtainFaves())
      .catch(err => console.log(err));
  }

  renderWeather = () => {
    if (this.state.weatherStats.length === undefined) {
      return <Weather
        city={this.state.weatherStats.name}
        temp={(((this.state.weatherStats.main.temp - 273.15) * 1.80 + 32).toFixed(0))}
        weather={this.state.weatherStats.weather[0].main}
        pressure={this.state.weatherStats.main.pressure}
        humidity={this.state.weatherStats.main.humidity}
        speed={this.state.weatherStats.wind.speed}
        addFave={() => this.addFave({ zip: this.state.search, city: this.state.weatherStats.name })} />
    } else { return <h4>Search a Zip Code to get the Weather</h4> }
  }

  render() {
    return (
      <Wrapper>
        <Nav
          focus={this.focus}
          blur={this.blur}
          handleSubmit={this.handleSubmit}
          inputChange={this.inputChange}
          value={this.state.search} />
        <Main>
          <Ulist>
            {this.state.faveZips.length ? this.state.faveZips.map(faved => (
              <Fave
                styling={this.state.styling}
                faveCity={faved.city}
                favedZip={faved.zip}
                handleCityClick={() => this.searchZip(faved.zip)}
                handleXClick={() => this.handleXClick(faved._id)}
                key={faved._id} />
            )) : <Fave styling={this.state.styling} faveCity="No favorites yet" favedZip={`use the "Add to favorites" button`} />}
          </Ulist>
          {this.renderWeather()}
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default MainPage;