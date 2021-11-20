import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { rollAttribute, rollSkill } from '../rollUtil';
import { calcPlayerSkillBonus } from '../skillUtil';
import { Allignment, Attribute, DndClass, DndRace, PlayerCharater, Skill, SkillName, SkillProficiency } from '../types/character';
import { players } from '../data/players';
import { allSkills } from '../data/skills';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {
  player?: PlayerCharater;
  allSkills = allSkills;
  subscriptions: Subscription = new Subscription();
  calcPlayerSkillBonus = (player: PlayerCharater | null, skill: Skill): number => {
    if (player !== null) {
      return calcPlayerSkillBonus(player, skill);
    }
    return NaN;
  };
  Attribute = Attribute;

  strRoll = 0;
  skillRolls:{[skill: string]: number} = {};


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

  handleSkillRoll (player: PlayerCharater, attribute: Attribute, skill: Skill): void {
    this.skillRolls[skill.name] = rollSkill (player, attribute);
  }

  trackByFn (index: number): number {
    return index;
  }







 


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    allSkills.forEach((skill: Skill) => {
      this.skillRolls[skill.name] = 0;
    });
    this.subscriptions.add(this.route.paramMap.subscribe((params: ParamMap) => {
      const playerIndex = parseInt(params.get("playerIndex") as string);
      this.player = players[playerIndex];
    }));
      
    
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
