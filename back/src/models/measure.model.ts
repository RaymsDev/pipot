import { Greenhouse } from './greenhouse.model';
import { IGreenhouse } from './../interfaces/greenhouse.interface';
import {
  IMeasure
} from './../interfaces/measure.inteface';

export class Measure implements IMeasure {
  public temperature: string;
  public airMoisture: number;
  public soilMoisture: number;
  public waterLevel: number;
  public luminosity: boolean;
  public lampIsOn: boolean;
  public doorIsOpen: boolean;
  public greenhouse : string;

  constructor(data ? : Partial < IMeasure > ) {
    if (!data) {
      return;
    }

    this.temperature = data.temperature ? data.temperature : "";
    this.airMoisture = data.airMoisture ? data.airMoisture : 0;
    this.soilMoisture = data.soilMoisture ? data.soilMoisture : 0;
    this.waterLevel = data.waterLevel ? data.waterLevel : 0;
    this.luminosity = data.luminosity ? data.luminosity : false
    this.lampIsOn = data.lampIsOn ? data.lampIsOn : false;
    this.doorIsOpen = data.doorIsOpen ? data.doorIsOpen : false;
    this.greenhouse = data.greenhouse;
  }
}