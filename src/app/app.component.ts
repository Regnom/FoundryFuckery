import { ReadVarExpr } from '@angular/compiler';
import { Attribute, Component, ɵsetCurrentInjector } from '@angular/core';
import { 
  DndCharater, 
  DndClass, 
  DndRace, 
  Allignment, 
  PlayerCharater, 
} from './types/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foundryfuckery';

  players: PlayerCharater[] = [
    {
      playerName: "Verp",
      name: "Chazland",
      race: DndRace.HUMAN,
      allignment: Allignment.NEUTRAL,
      dndClass: DndClass.FIGHTER,
      level: 4,
      attributes: {
        str: 16,
        dex: 17,
        con: 17,
        int: 15,
        wis: 12,
        cha: 9,
      }
    },
    {
      playerName: "Grundis",
      name: "Askos",
      race: DndRace.HUMAN,
      allignment: Allignment.NEUTRAL,
      dndClass: DndClass.FIGHTER,
      level: 4,
      attributes: {
        str: 16,
        dex: 17,
        con: 17,
        int: 15,
        wis: 12,
        cha: 9,
      }
    }
  ];

  calculateAttributeBonus (attribute: number): number {  
    return Math.floor((attribute-10)/2);
  }

  displayAttributeBonus (attribute: number): string {
    const attributeBonus = this.calculateAttributeBonus(attribute);
    if (attributeBonus > 0) {
      return `+${attributeBonus.toString()}`; 
    }
    return attributeBonus.toString();
  }

  calculateSkills (attribute: number): number {
    const attributeBonus = this.calculateAttributeBonus(attribute);
    return attribute
  }


  trackByFn (index: number): number {
    return index;
  }

}
