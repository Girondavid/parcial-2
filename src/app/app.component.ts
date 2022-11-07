import { Component } from '@angular/core';

import { Estudiantes } from './models/estudiantes';
import { NavedComponent } from './naved/naved.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  [x: string]: any;
  Estudiantesarray: Estudiantes[] = [
    { id: 1, name: 'brayan', lugarr: 'Quinchia' },
    { id: 2, name: 'david', lugarr: 'pereira' },
    { id: 4, name: 'caro', lugarr: 'bogota' },
  ];

  selectedEstudiante: Estudiantes = new Estudiantes();

  addorEdit() {
    if(this.selectedEstudiante.id === 0){
      this.selectedEstudiante.id = this.Estudiantesarray.length + 1;
      this.Estudiantesarray.push(this.selectedEstudiante);
    }
 
   /*  if (this.selectedEstudiante.id === 0) {
      
    } */


    this.selectedEstudiante = new Estudiantes();
  }


  openForEdit(estudi: Estudiantes) {
    this.selectedEstudiante = estudi;
  }

 eliminar(){
    if(confirm('Estas seguro de eliminar este registro')){
      this.Estudiantesarray = this.Estudiantesarray.filter(x => x != this.selectedEstudiante)
      this.selectedEstudiante = new Estudiantes();
    } 
    
  } 
}
