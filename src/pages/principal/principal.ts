import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {


    /* Numero do Usuario */
    numero:string;

    /* Numero Aleatorio */
    face1:string; /* Lado 1 do Dado */
    face2:string; /* Lado 2 do Dado */
    face3:string; /* Lado 3 do Dado */
    face4:string; /* Lado 4 do Dado */
    face5:string; /* Lado 5 do Dado */
    face6:string; /* Lado 6 do Dado */

  constructor(public navCtrl: NavController, public alertCrtl: AlertController) {}

              /* Gerando um Numero aleatorio com imagem do Dado*/
    gerandojogo(){

      var sorteando = Math.floor(Math.random() * 6 + 1);
      let resultado = parseInt(this.numero);

      switch(sorteando){

          case 1:{
          this.face1 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado1.png";
          break;
        }
          case 2:{
          this.face2 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado2.png";
          break;
          }
          case 3:{
          this.face3 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado3.png";
          break;
          }
          case 4:{
          this.face4 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado4.png";
          break;
          }
          case 5:{
          this.face5 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado5.png";
          break;
          }
          case 6:{
          this.face6 = (<HTMLInputElement>document.getElementById("face")).src ="./assets/imgs/dado6.png";
          break;
          }
          default:{
            alert("Escolha um número!");
          break;
          }
      }                
    /*---------------------------------------------------------------------------*/
       /* Resultado da Partida */
       if((resultado <= 0 || resultado > 6 || this.numero == null)){
        this.coloqueumnumero(resultado.toString());
      }
       else if(resultado == sorteando)
       {
         this.Ganhou(resultado.toString());
       }
       else{
         this.Perdeu(resultado.toString());
       }
 }


        /* Alerta Do Resultado */

    coloqueumnumero(valor: String){
        let alert = this.alertCrtl.create({
          title: 'Coloque Um Número de 1 a 6!',
          buttons:[{
            text: 'OK',
          handler: () => {
            /* refresh na pagina  */
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
            /* ---------------  */
          }
          },
          ]
       });
      alert.present();
    }

    Ganhou(valor: String){

      let alert = this.alertCrtl.create({
      title: 'Você Acertou!',
      subTitle: `Seu Número da Sorte: ${valor}`,
      message:`Deseja Jogar Novamente?`,
      buttons:[
        {
          text: 'Sim',
          handler: () => {
            /* refresh na pagina  */
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
            /* ---------------  */
          }
        },
        {
          text: 'Não',
          handler: () => {
             /* voltando para home  */
            this.navCtrl.setRoot(HomePage);
             /* ---------------  */
          }
        }
      ]
      });
    alert.present();
  }

  Perdeu(valor: String){

    let alert = this.alertCrtl.create({
    title: 'Você Errou!',
    subTitle: `Seu Número: ${valor}`,
    message:'Tente Novamente',
    buttons:[
      {
        text: 'Sim',
        handler: () => {
          /* refresh na pagina  */
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
          /* ---------------  */
        }
      },
      {
        text: 'Não',
        handler: () => {
          /* refresh na pagina  */
          this.navCtrl.setRoot(HomePage);
          /* ---------------  */
        }
      }
    ]
    });
  alert.present();
  }
 /* ------Fim da Alerta---------  */
}
