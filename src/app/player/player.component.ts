import { Component, Input, OnInit } from '@angular/core';
import { rollAttribute, rollSkill } from '../rollUtil';
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
  skillRoll= 0;


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

  handleSkillRoll (player: PlayerCharater, attribute: Attribute): void {
    this.skillRoll = rollSkill (player, attribute);
  }

  trackByFn (index: number): number {
    return index;
  }


  allSkills: Skill[] = [
    {
      name: SkillName.ACROBATICS,
      attribute: Attribute.DEX,
      skillRoll: 0,
    },
    {
      name: SkillName.ANIMAL_HANDLING,
      attribute: Attribute.WIS,
      skillRoll: 0,
    },
    {
      name: SkillName.ARCANA,
      attribute: Attribute.INT,
      skillRoll: 0,
    },
    {
      name: SkillName.ATHLETICS,
      attribute: Attribute.STR,
      skillRoll: 0,
    },
    {
      name: SkillName.DECEPTION,
      attribute: Attribute.CHA,
      skillRoll: 0,
    },
    {
      name: SkillName.HISTORY,
      attribute: Attribute.INT,
      skillRoll: 0,
    },
    {
      name: SkillName.INSIGHT,
      attribute: Attribute.WIS,
      skillRoll: 0,
    },
    {
      name: SkillName.INTIMIDATION,
      attribute: Attribute.CHA,
      skillRoll: 0,
    },
    {
      name: SkillName.INVESTIGATION,
      attribute: Attribute.INT,
      skillRoll: 0,
    },
    {
      name: SkillName.MEDICINE,
      attribute: Attribute.WIS,
      skillRoll: 0,
    },
    {
      name: SkillName.NATURE,
      attribute: Attribute.INT,
      skillRoll: 0,
    },
    {
      name: SkillName.PERCEPTION,
      attribute: Attribute.WIS,
      skillRoll: 0,
    },
    {
      name: SkillName.PREFORMANCE,
      attribute: Attribute.CHA,
      skillRoll: 0,
    },
    {
      name: SkillName.PERSUASION,
      attribute: Attribute.CHA,
      skillRoll: 0,
    },
    {
      name: SkillName.RELIGION,
      attribute: Attribute.INT,
      skillRoll: 0,
    },
    {
      name: SkillName.SLEIGHT_OF_HAND,
      attribute: Attribute.DEX,
      skillRoll: 0,
    },
    {
      name: SkillName.STEALTH,
      attribute: Attribute.DEX,
      skillRoll: 0,
    },
    {
      name: SkillName.SURVIVAL,
      attribute: Attribute.WIS,
      skillRoll: 0,
    },

]; 


  constructor() { }

  ngOnInit(): void {
  }

}
