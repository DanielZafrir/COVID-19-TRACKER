import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import classes from './CountryPicker.module.css';

import { getCountries } from '../../api/index'

const CountryPiacker = (props) => {

    const [fetchCountries, setFetchCountries] = useState([]);

    useEffect(()=> {
        const fetchApi = async () => {
            setFetchCountries( await getCountries()); 
        }

        fetchApi();

    }, [setFetchCountries])

    

    return (
        <FormControl className={classes.FormControl}>
            <NativeSelect defaultValue="" onChange={(event) =>{props.countryChangeHandler(event.target.value)}}>
                <option value="">Global</option>
                {fetchCountries.map((country,index) =>
                <option key={index} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPiacker;