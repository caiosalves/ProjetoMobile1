# ProjetoMobile1

Este projeto foi gerado com [Ionic CLI](https://ionicframework.com/docs/cli) usando o template **sidemenu**. Ele serve como ponto de partida para aplicações híbridas (Android/iOS) e aplicações web que utilizam o [Angular](https://angular.io/).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
- [Ionic CLI](https://ionicframework.com/docs/cli) (instalado globalmente via `npm install -g @ionic/cli`)

## Instalação

1. **Clonar ou baixar este repositório**
   ```bash
   git clone https://git@github.com:caiosalves/ProjetoMobile1.git
   cd ProjetoMobile1
   ```

2. **Instalar as dependências**
   ```bash
   npm install
   ```

## Executando o projeto

### Servidor de desenvolvimento (Browser)
Para rodar o aplicativo no navegador e acompanhar as mudanças em tempo real:

```bash
ionic serve
```

O Ionic abrirá automaticamente uma aba do seu navegador em http://localhost:8100 (por padrão).

### Executando no Android

1. Adicionar a plataforma Android (caso esteja usando Capacitor):
   ```bash
   ionic capacitor add android
   ```

2. Compilar o projeto:
   ```bash
   ionic build
   ionic capacitor copy android
   ```

3. Abrir o Android Studio para executar em dispositivo real ou emulador:
   ```bash
   ionic capacitor open android
   ```

### Executando no iOS

1. Adicionar a plataforma iOS:
   ```bash
   ionic capacitor add ios
   ```

2. Compilar o projeto:
   ```bash
   ionic build
   ionic capacitor copy ios
   ```

3. Abrir o Xcode para executar em dispositivo real ou emulador:
   ```bash
   ionic capacitor open ios
   ```

**Observação:** Para compilar o projeto no iOS, é necessário ter um ambiente de desenvolvimento compatível com macOS e Xcode instalado.

## Estrutura de Pastas

```
src/
  app/          # Código principal da aplicação (módulos, componentes, serviços, etc.)
  assets/       # Recursos estáticos (imagens, ícones, etc.)
  theme/        # Arquivos de tema (CSS/SCSS)
index.html      # Página HTML principal
package.json    # Lista de dependências e scripts npm
```

## Contribuição

1. Faça o fork deste repositório
2. Crie sua branch
   ```bash
   git checkout -b feature/novaFuncionalidade
   ```
3. Commit suas mudanças
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Faça o push para a branch
   ```bash
   git push origin feature/novaFuncionalidade
   ```
5. Abra um Pull Request

