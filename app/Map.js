import { GoogleMap, Marker } from '@react-google-maps/api'
import React, { useState } from 'react'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
import stations from './stationsData.json'

const addMarkers = (map) => {
    const infoWindow = new google.maps.InfoWindow();

    const markers = stations.elements.slice(0,500).map(({lat, lon, tags: {name}}) => {
        const marker = new google.maps.Marker({position: {lat, lng: lon}})
        marker.addListener('click', ()=>{
            infoWindow.setPosition({lat, lng:lon})
            infoWindow.setContent(<div style={{width: '50px', height: '50px'}}>
                {name}
            </div>)
            infoWindow.open(map)
        })
        return marker;
    })
    
    new MarkerClusterer({
        markers,
        map
    })

}

const center = {lat: 51, lng: 20}
export default function MapTest() {
    const [mapContainer, setMapContainer] = useState(null)


  return (
    <GoogleMap zoom={10} center={center} mapContainerStyle={{width: '100%', height: '100vh'}} onLoad={(map) => addMarkers(map) }>
        <div ref={(node) => setMapContainer(node)} style={{width: '100%', height: '100vh'}}/> </GoogleMap>
  )
}