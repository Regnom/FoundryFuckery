import { ReadVarExpr } from '@angular/compiler';
import { Component, ɵsetCurrentInjector } from '@angular/core';
import { 
  DndCharater, 
  DndClass, 
  DndRace, 
  Allignment, 
  PlayerCharater, 
  SkillName,
  Skill,
  Attribute,
  SkillProficiency,
} from './types/character';

import {
  calcPlayerSkillBonus,
} from './skillUtil';
import { rollAttribute } from './rollUtil';

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
      profBonus: 3,
      attributes: {
        str: 16,
        dex: 17,
        con: 17,
        int: 15,
        wis: 12,
        cha: 9,
      },
      skills: [
        {
          skillName: SkillName.HISTORY,
          skillProficiency: SkillProficiency.SKILLED
        },
        {
          skillName: SkillName.ACROBATICS,
          skillProficiency: SkillProficiency.SKILLED,
        }
      
      ],
      
      
      
    },
    {
      playerName: "Grundis",
      name: "Askos",
      race: DndRace.HUMAN,
      allignment: Allignment.NEUTRAL,
      dndClass: DndClass.FIGHTER,
      level: 4,
      profBonus: 3,
      attributes: {
        str: 16,
        dex: 17,
        con: 17,
        int: 15,
        wis: 12,
        cha: 9,
      },
      skills: [],
      
      
    }
  ];

  


  


  

  trackByFn (index: number): number {
    return index;
  }

}
