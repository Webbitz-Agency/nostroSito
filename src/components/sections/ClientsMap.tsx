import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { ExternalLink } from 'lucide-react'
import L from 'leaflet'
import clientLocations from '../../data/clientLocations'
import 'leaflet/dist/leaflet.css'

const customIcon = L.divIcon({
  className: 'webbitz-map-marker',
  html: '<span></span>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
})

function MapSelection({ index }: { index: number }) {
  const map = useMap()
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (index < 0) map.setView([45, 10], 5, { animate: false })
    else {
      const location = clientLocations[index]
      map.flyTo([location.lat, location.lng], 10, { animate: !reduced, duration: 1 })
    }
  }, [index, map])
  return null
}

export default function ClientsMap() {
  const [selected, setSelected] = useState(-1)
  return <section className="py-12 md:py-16 px-4" aria-labelledby="map-title">
    <div className="max-w-6xl mx-auto">
      <h2 id="map-title" className="heading-lg text-white text-center mb-4">I nostri clienti <span className="text-primary-400">sulla mappa</span></h2>
      <p className="text-gray-300 text-sm text-center mb-7">Dalla Toscana alla Sardegna, fino ai progetti all’estero.</p>
      <div className="mb-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <label htmlFor="map-client" className="text-gray-300 text-sm">Esplora i progetti per località</label>
        <select id="map-client" value={selected} onChange={event => setSelected(Number(event.target.value))} className="map-client-select">
          <option value={-1}>Vista generale</option>
          {clientLocations.map((location, index) => <option key={location.name} value={index}>{location.name}</option>)}
        </select>
      </div>
      <div className="client-map-frame h-[350px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-premium" role="region" aria-label="Mappa interattiva dei clienti">
        <MapContainer center={[45, 10]} zoom={5} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapSelection index={selected} />
          {clientLocations.map((location, index) => <Marker key={location.name} title={location.name} alt={location.name} position={[location.lat, location.lng]} icon={customIcon} eventHandlers={{ click: () => setSelected(index) }}>
            <Popup><div className="client-map-popup"><h3>{location.name}</h3><a href={location.link} target="_blank" rel="noopener noreferrer">Visita il sito <ExternalLink size={13} aria-hidden="true" /><span className="sr-only"> (nuova scheda)</span></a></div></Popup>
          </Marker>)}
        </MapContainer>
      </div>
      <p className="text-xs text-gray-400 mt-3">I punti indicano le località dei progetti, non gli indirizzi precisi.</p>
    </div>
  </section>
}
