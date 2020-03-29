import { Time } from '@angular/common';

export class Extrahour {
  _id?: string;
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
}
