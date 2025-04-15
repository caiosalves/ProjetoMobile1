import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public menuItems = [
    { 
      title: 'Localização Atual', 
      url: '/folder', 
      icon: 'map-outline',
      disabled: false
    },
    { 
      title: 'Histórico', 
      url: '/folder/historico', 
      icon: 'time-outline',
      disabled: true // Exemplo de item desabilitado
    }
  ];

  constructor() {}
}