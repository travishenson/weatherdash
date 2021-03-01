import { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

export default function SearchBar (props) {
  return(
    <div>
      <input 
        type='text'
        placeholder='Search for a location'
        id='weather-search'
        value={props.searchTerm}
        onChange={props.handleChange}
        onKeyUp={props.handleKeyUp}
      />
    </div>
  );
};