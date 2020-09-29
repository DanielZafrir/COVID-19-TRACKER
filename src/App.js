import React , {Component} from 'react'

// import Cards from './components/Cards/Cards'
// import Charts from './components/Charts/Charts'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import {Cards,Charts,CountryPicker} from './components/index'
import classes from './App.module.css'
import {fetchData} from './api/index'

import coronaImage from './images/image.png'

class App extends Component {

    state = {
        data: {},
        country: ''
    }
    
    async componentDidMount() {
        const fetchdata = await fetchData();
        this.setState({data:fetchdata})
    }

    countryChangeHandler = async (country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({data: fetchedData, country:country})
    };

    render () {
        
        return (
            <div className={classes.Container}>
                <img className={classes.Image} src={coronaImage} alt="COVID-19"/>
                <Cards data = {this.state.data}/>
                <CountryPicker countryChangeHandler={this.countryChangeHandler}/>
                <Charts data={this.state.data} country={this.state.country}/>
            </div>
        );
    };
};

export default App;