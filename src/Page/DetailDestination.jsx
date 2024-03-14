import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import './DetailDestination.scss'
import MarkerClusterGroup from "react-leaflet-cluster"

const DetailDestination = () => {
    const position = [9.999163, 105.740440]

    return (
        <div style={{ width: '100px' }}>
            <MapContainer center={position} zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup
                    chunkedLoading
                >
                    <Marker position={position}>
                        <Popup>
                            Cần Thơ nè
                        </Popup>
                    </Marker>
                    <Marker position={[9.999163, 105.750440]}>
                        <Popup>
                            Cần Thơ nè
                        </Popup>
                    </Marker>
                    <Marker position={[9.999163, 105.760440]}>
                        <Popup>
                            Cần Thơ nè
                        </Popup>
                    </Marker>
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    )
}

export default DetailDestination