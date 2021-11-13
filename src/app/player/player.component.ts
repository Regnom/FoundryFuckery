import { Component, Input, OnInit } from '@angular/core';
import { rollAttribute } from '../rollUtil';
import { calcPlayerSkillBonus } from '../skillUtil';
import { Attribute, PlayerCharater, Skill, SkillName } from '../types/character';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: PlayerCharater | null = null;
  calcPlayerSkillBonus = (player: PlayerCharater | null, skill: Skill): number => {
    if (player !== null) {
      return calcPlayerSkillBonus(player, skill);
    }
    return NaN;
  };
  Attribute = Attribute;

  strRoll = 0;

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

  handleRoll (player: PlayerCharater, attribute: Attribute): void {
    this.strRoll = rollAttribute (player, attribute);
  }

  trackByFn (index: number): number {
    return index;
  }


  allSkills: Skill[] = [
    {
      name: SkillName.ACROBATICS,
      attribute: Attribute.DEX,
    },
    {
      name: SkillName.ANIMAL_HANDLING,
      attribute: Attribute.WIS,
    },
    {
      name: SkillName.ARCANA,
      attribute: Attribute.INT,
    },
    {
      name: SkillName.ATHLETICS,
      attribute: Attribute.STR,
    },
    {
      name: SkillName.DECEPTION,
      attribute: Attribute.CHA,
    },
    {
      name: SkillName.HISTORY,
      attribute: Attribute.INT,
    },
    {
      name: SkillName.INSIGHT,
      attribute: Attribute.WIS,
    },
    {
      name: SkillName.INTIMIDATION,
      attribute: Attribute.CHA,
    },
    {
      name: SkillName.INVESTIGATION,
      attribute: Attribute.INT,
    },
    {
      name: SkillName.MEDICINE,
      attribute: Attribute.WIS,
    },
    {
      name: SkillName.NATURE,
      attribute: Attribute.INT,
    },
    {
      name: SkillName.PERCEPTION,
      attribute: Attribute.WIS,
    },
    {
      name: SkillName.PREFORMANCE,
      attribute: Attribute.CHA,
    },
    {
      name: SkillName.PERSUASION,
      attribute: Attribute.CHA,
    },
    {
      name: SkillName.RELIGION,
      attribute: Attribute.INT,
    },
    {
      name: SkillName.SLEIGHT_OF_HAND,
      attribute: Attribute.DEX,
    },
    {
      name: SkillName.STEALTH,
      attribute: Attribute.DEX,
    },
    {
      name: SkillName.SURVIVAL,
      attribute: Attribute.WIS,
    },

]; 


  constructor() { }

  ngOnInit(): void {
  }

}
