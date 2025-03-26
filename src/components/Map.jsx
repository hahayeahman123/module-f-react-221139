// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
// --- ---------------------------------- ---

export function Map() {
    let position = [54.6525,24.9342]
    const fetchcoords= async ()=>{
            const responce = await fetch('https://konkursas.kitm.lt/backend/368565/api/v1/places',);
            const data = await responce.json();

            position[0] = await data.data[2].latitude;
            position[1] = await data.data[2].longitude;
            // dont fully understadn how to assign the coordinates, but I know Im close
    }
    fetchcoords();   


  // --- (6) Create a custom marker ---
  const customIcon = new Icon({
    iconUrl: './marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [1, 1],
    popupAnchor: [-0, -76]
  })

  return (
    <section className='map-component' >
      {/* --- (5) Add leaflet map container --- */}
      <div className='map'>
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}
          icon={customIcon}
        >
          <Popup>
          </Popup>
        </Marker>
      </MapContainer>
      {/* --- ---------------------------- --- */}
      </div>
    </section>
  )
}