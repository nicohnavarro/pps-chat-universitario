import { Component, OnInit,ViewChild } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import { IMensaje } from 'src/app/interfaces/IMensaje';
import { IonList, IonContent } from '@ionic/angular';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-curso-uno',
  templateUrl: './curso-uno.page.html',
  styleUrls: ['./curso-uno.page.scss'],
})
export class CursoUnoPage implements OnInit {
  @ViewChild( IonContent, { read: IonContent, static:false}) content: IonContent;
  curso:string= 'PPS-4A';
  usuario = JSON.parse(localStorage.getItem('usuario'));
  mensajes: IMensaje[];
  showSpinner:boolean=true;
  mimensaje:IMensaje;
  mensaje:string;
  

  constructor(private msgService:MensajesService) { }

  ngOnInit() {
    this.getTodosMensajes();

  }

  getTodosMensajes(){
    this.msgService.getMensajesByGrupo('PPS-4A').subscribe(res => {
      this.mensajes = res.filter(res => {
        return res.grupo == 'PPS-4A';
      }).sort((a: IMensaje, b: IMensaje) => {
        return a.timestamp - b.timestamp;
      });
      
      console.log(this.mensajes);
      this.showSpinner=false;
      setTimeout(()=>{
        this.scrollDown();
      },1000);
    });
  }

  enviar(){
    let mimensaje = {} as IMensaje;
    mimensaje.fecha=new Date().toLocaleString();
    mimensaje.grupo = this.curso;
    mimensaje.timestamp = new Date().getTime();
    mimensaje.usuario= this.usuario.correo;
    mimensaje.mensaje = this.mensaje;
    
    this.msgService.addMensaje(
      mimensaje
      ).then(()=>{
      this.mensaje = '';
    }).catch(error=>{
      console.error(error);
    })
  }


  scrollDown(){
    this.content.scrollToBottom();
  }
}
