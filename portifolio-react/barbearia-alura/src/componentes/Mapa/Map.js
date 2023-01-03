import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import styles from './Mapa.module.css'

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyA5sAmxg-zjM4qbZFFMxTmsesnLXmO7FFE"
    });

    const position = {
        lat: -23.5882544,
        lng: -46.6323505
    }

    return (
        <div className={styles.map}>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '50%', height: '100%' }}
                    center={position}
                    zoom={15}
                >
                    <Marker 
                        position={position} 
                        options={{
                            label: {
                                text: "Barbearia Alura",
                                style: {
                                    color: "var(--branco)"
                                }
                            }
                        }}
                    />
                </GoogleMap>
            ) : (
                <></>
            )
            }
        </div>
    )
}

export default Map