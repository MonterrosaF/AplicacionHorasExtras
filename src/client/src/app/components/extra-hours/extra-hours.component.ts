import { Component, OnInit } from '@angular/core';

import { ExtrahourService } from '../../services/extrahour.service';
import { Extrahour } from '../../Extrahour';
import { Time } from '@angular/common';

@Component({
  selector: 'app-extra-hours',
  templateUrl: './extra-hours.component.html',
  styleUrls: ['./extra-hours.component.css']
})
export class ExtraHoursComponent implements OnInit {
  extrahours: Extrahour[];
  documento: string;
  nombre: string;
  apellido: string;
  fechaIni: Date;
  fechaFin: Date;
  horarioIni: Time;
  horarioFin: Time;
  horarioIniExtra: Time;
  horarioFinExtra: Time;
  motivo: string;

  constructor(private extrahourService: ExtrahourService) {
    this.extrahourService.getExtrahours().subscribe(extrahours => {
      this.extrahours = extrahours;
    });
  }

  ngOnInit(): void {}

  addExtrahour(event) {
    event.preventDefault();
    const newExtrahour: Extrahour = {
      documento: this.documento,
      nombre: this.nombre,
      apellido: this.apellido,
      fechaIni: this.fechaIni,
      fechaFin: this.fechaFin,
      horarioIni: this.horarioIni,
      horarioFin: this.horarioFin,
      horarioIniExtra: this.horarioIniExtra,
      horarioFinExtra: this.horarioFinExtra,
      motivo: this.motivo
    };
    this.extrahourService.addExtrahours(newExtrahour).subscribe(extrahour => {
      this.extrahours.push(extrahour);
      console.log(this.extrahours);
      this.documento = '';
      this.documento = '';
      this.nombre = '';
      this.apellido = '';
      this.fechaIni = null;
      this.fechaFin = null;
      this.horarioIni = null;
      this.horarioFin = null;
      this.horarioIniExtra = null;
      this.horarioFinExtra = null;
      this.motivo = '';
    });
  }

  deleteExtrahour(id) {
    const response = confirm('¿Esta seguro de eliminar?');
    if (response) {
      const extrahours = this.extrahours;
      this.extrahourService.deleteExtrahours(id).subscribe(data => {
        for (let i = 0; i < extrahours.length; i++) {
          if (extrahours[i]._id == id) {
            extrahours.splice(i, 1);
          }
        }
      });
    }
    return;
  }
}
