import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements AfterViewInit {

  ngAfterViewInit(): void {
    const map = L.map('map').setView([-23.5505, -46.6333], 13); // São Paulo

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-23.5505, -46.6333]).addTo(map)
      .bindPopup('Você está aqui.')
      .openPopup();
  }
}
