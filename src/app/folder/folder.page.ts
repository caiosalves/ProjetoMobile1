import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import * as L from 'leaflet';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false
})
export class FolderPage implements AfterViewInit, ViewDidEnter {
  @ViewChild('map', { static: true }) mapElement!: ElementRef;

  map!: L.Map;
  marker!: L.Marker;

  constructor() {}

  // Após a view ser iniciada (div #map disponível), criamos o mapa
  ngAfterViewInit() {
    this.fixLeafletIcons(); 
    this.initMap();
  }

  // Assim que a página Ionic terminar de entrar na tela, chamamos invalidateSize()
  ionViewDidEnter() {
    setTimeout(() => {
      if (this.map) {
        this.map.invalidateSize();
      }
    }, 200);
  }

  /**
   * Ajusta o path dos ícones padrão do Leaflet para usar os arquivos em /assets
   * (Somente se você copiou marker-icon.png etc. para src/assets)
   */
  fixLeafletIcons() {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png',
    });
  }

  /**
   * Cria a instância do mapa
   */
  initMap() {
    const initialCoords: L.LatLngExpression = [-15.8, -47.9]; // Ex.: Brasil

    this.map = L.map(this.mapElement.nativeElement, {
      center: initialCoords,
      zoom: 4,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    // Marcador inicial (opcional)
    this.marker = L.marker(initialCoords).addTo(this.map);
  }

  /**
   * Obtém a localização do usuário via Capacitor e centraliza no mapa
   */
  async obterLocalizacao() {
    try {
      const position: Position = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = position.coords;

      console.log('Coordenadas do usuário:', latitude, longitude);

      const userLatLng = L.latLng(latitude, longitude);
      this.map.setView(userLatLng, 15);

      if (this.marker) {
        this.marker.setLatLng(userLatLng);
      } else {
        this.marker = L.marker(userLatLng).addTo(this.map);
      }
    } catch (error) {
      console.error('Erro ao obter localização:', error);
    }
  }
}
