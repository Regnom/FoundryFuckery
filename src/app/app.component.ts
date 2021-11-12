import { ReadVarExpr } from '@angular/compiler';
import { Attribute, Component, ɵsetCurrentInjector } from '@angular/core';
import { 
  DndCharater, 
  DndClass, 
  DndRace, 
  Allignment, 
  PlayerCharater, 
  skillName,
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
      profBonus: 3,
      attributes: {
        str: 16,
        dex: 17,
        con: 17,
        int: 15,
        wis: 12,
        cha: 9,
      },
      skillsProf: {
        acrobatics: 1,
        animal_handling: 0,
        arcana: 0,
        athletics: 1,
        deception: 0,
        history: 0,
        insight: 0,
        intimidation: 1,
        investigation: 0,
        medicine: 0,
        nature: 0,
        perception: 0,
        preformance: 0,
        persuasion: 0,
        religion: 0,
        sleight_of_hand: 0,
        stealth: 0,
        survival: 0,
      }
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
      skillsProf: {
        acrobatics: 1,
        animal_handling: 0,
        arcana: 0,
        athletics: 1,
        deception: 0,
        history: 0,
        insight: 0,
        intimidation: 1,
        investigation: 0,
        medicine: 0,
        nature: 0,
        perception: 0,
        preformance: 0,
        persuasion: 0,
        religion: 0,
        sleight_of_hand: 0,
        stealth: 0,
        survival: 0,
      }
    }
  ];

  skills: skillName[] = []; 


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

  

  calcSkills (skill: string, player[]: number, player.skillsProf[]: number,): string {
    /** Str Skils */
    if (skill = skillName.ATHLETICS) {
      const attriBonus = Math.floor((player.attributes.str-10)/2);
      if (player.skillProf.athletics = 1) {
        const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
      }
      return attriBonus.toString();
    }
    
    /** Dex Skills */
    if (skill = skillName.ACROBATICS,skillName.SLEIGHT_OF_HAND, skillName.STEALTH) {
      const attriBonus = Math.floor((player.attributes.dex-10)/2);
      if (skill = skillName.ACROBATICS) {
        if (player.skillProf.accrobatics = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.SLEIGHT_OF_HAND) {
        if (player.skillProf.sleight_of_hand = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.STEALTH) {
        if (player.skillProf.stealth = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
    }

    /** Int Skills */
    if (skill = skillName.ARCANA, skillName.HISTORY, skillName.INVESTiGATION, skillName.NATURE, skillName.RELIGION) {
      const attriBonus = Math.floor((player.attributes.int-10)/2);
      if (skill = skillName.ARCANA) {
        if (player.skillProf.arcana = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.HISTORY) {
        if (player.skillProf.history = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.INVESTiGATION) {
        if (player.skillProf.investigation = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.NATURE) {
        if (player.skillProf.nature = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.RELIGION) {
        if (player.skillProf.religion = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
    }

    /** Wis Skills */
    if (skill = skillName.ANIMAL_HANDLING, skillName.INSIGHT, skillName.MEDICINE, skillName.PERCEPTION, skillName.SURVIVAL) {
      const attriBonus = Math.floor((player.attributes.wis-10)/2);
      if (skill = skillName.ANIMAL_HANDLING) {
        if (player.skillProf.animal_handling = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.INSIGHT) {
        if (player.skillProf.insight = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.MEDICINE) {
        if (player.skillProf.medicine = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.PERCEPTION) {
        if (player.skillProf.perception = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.SURVIVAL) {
        if (player.skillProf.survival = 1) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
    }

    /** Cha Saves */
    if (skill = skillName.DECEPTION, skillName.INTIMIDATION, skillName.PREFORMANCE, skillName.PERSUASION) {
      const attriBonus = Math.floor((player.attributes.cha-10)/2);
      if (skill = skillName.DECEPTION) {
        if (player.skillProf.deception) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.INTIMIDATION) {
        if (player.skillProf.intimidation) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.PREFORMANCE) {
        if (player.skillProf.preformance) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
      if (skill = skillName.PERSUASION) {
        if (player.skillProf.persuasion) {
          const skillBonus = player.profBonus + attriBonus;
          return skillBonus.toString();
        }
        return attriBonus.toString();
      }
    }
  }

  trackByFn (index: number): number {
    return index;
  }

}
