import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ViewDidEnter, LoadingController, AlertController } from '@ionic/angular';
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
  coordenadas: { latitude: number; longitude: number } | null = null;
  loading = false;

  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngAfterViewInit() {
    this.fixLeafletIcons();
    this.initMap();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.map?.invalidateSize();
    }, 200);
  }

  private fixLeafletIcons() {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png',
    });
  }

  private initMap() {
    const initialCoords: L.LatLngExpression = [-15.8, -47.9]; // Coordenadas iniciais
    this.map = L.map(this.mapElement.nativeElement, {
      center: initialCoords,
      zoom: 4,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    this.marker = L.marker(initialCoords).addTo(this.map);
  }

  async obterLocalizacao() {
    const loading = await this.loadingCtrl.create({
      message: 'Obtendo localização...',
      spinner: 'crescent'
    });

    try {
      this.loading = true;
      await loading.present();

      const position: Position = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      
      // Atualiza as coordenadas para exibição
      this.coordenadas = { latitude, longitude };
      
      // Atualiza o mapa
      const userLatLng = L.latLng(latitude, longitude);
      this.map.setView(userLatLng, 15);
      this.marker.setLatLng(userLatLng);

    } catch (error) {
      console.error('Erro ao obter localização:', error);
      await this.showErrorAlert();
    } finally {
      this.loading = false;
      await loading.dismiss();
    }
  }

  private async showErrorAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Erro',
      message: 'Não foi possível obter a localização. Verifique as permissões do aplicativo.',
      buttons: ['OK']
    });
    await alert.present();
  }
}