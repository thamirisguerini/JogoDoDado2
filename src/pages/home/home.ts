import { PrincipalPage } from './../principal/principal';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCrtl: AlertController) {}

  /* -------Alerta Do Sobre --------  */
  sobre(){
    let alert = this.alertCrtl.create({
      title: 'Dice Games',
      subTitle: 'Nome: Thamiris Alves Guerini',
      message: 'Atividade: Desenvolver um jogo de dados' ,
      buttons:["ok"]
    });

    alert.present();
  }

   openPrincipal(){
     this.navCtrl.push(PrincipalPage);
  }
   /* -------------------------  */
}
