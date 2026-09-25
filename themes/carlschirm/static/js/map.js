// OpenStreetMap on the Anfahrt page. Leaflet is served locally; only the map
// tiles are loaded from the OpenStreetMap tile servers. No cookies are set.
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('map');
  if (!el || typeof L === 'undefined') {
    return;
  }

  const position = [48.53166, 9.13512];
  const map = L.map(el, { scrollWheelZoom: false }).setView(position, 16);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'
  }).addTo(map);

  L.marker(position, { alt: 'Gewerbepark Carl Schirm' })
    .addTo(map)
    .bindPopup('<strong>Gewerbepark Carl Schirm</strong><br>Bahnhofstraße 26<br>72138 Kirchentellinsfurt');
});
