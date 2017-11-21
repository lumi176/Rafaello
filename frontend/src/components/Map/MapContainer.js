import React, { Component } from 'react';

 import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
export class MapContainer extends React.Component {

     
	render() {

		return (
      <Map google={this.props.google} zoom={12}
	  
	  initialCenter={{
            lat:46.7712,
            lng: 23.6236
          }}

		  style={{
           width: '100%',
          height: '400px'
          }}
	  >
    
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
          
            </div>
        </InfoWindow>
      </Map>
    );
	}
}
 

export default GoogleApiWrapper({
  apiKey: ('AIzaSyARzFh5kiqvaDHtLWNGaDscDaCc-phxTOU')
})(MapContainer)