import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';
import { ListafichasPage } from '../listafichas/listafichas';
import { ContaPage } from '../conta/conta';
import { RoomPage } from '../room/room';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = WelcomePage;
  tab2Root = HomePage;
  tab3Root = ContactPage;
  tab4Root = ListafichasPage;
  tab5Root = ContaPage;
  tab6Root = RoomPage;
  constructor() {

  }
}
