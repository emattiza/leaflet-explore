import "./style.css";
import "leaflet/dist/leaflet.css";
import { Layer, Map, TileLayer } from "leaflet";

const mapRoot = document.querySelector<HTMLElement>("#map");

if (mapRoot !== null) {
  const map = new Map(mapRoot);
  map.addLayer(
    new TileLayer(
      "https://maps.mattiza.net/services/arkansas-latest/tiles/{z}/{x}/{y}.pbf",
      {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
      }
    )
  );
}
