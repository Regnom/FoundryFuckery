

import { PlayerCharater, Attribute, Skill } from "./types/character";

export function getAttributeBonus (attribute: number): number {
   return Math.floor((attribute-10)/2);
}

export function rollAttribute (player: PlayerCharater, attribute: Attribute): number {
    const attributeBonus = getAttributeBonus(player.attributes[attribute]);
    const randNumber = rollD20() + attributeBonus;
    return randNumber;
}

export function rollSkill (player: PlayerCharater, attribute: Attribute): number {
    const attributeBonus = getAttributeBonus(player.attributes[attribute]);
    const skillProfBonus = 0;
    const randNumber = rollD20() + attributeBonus + skillProfBonus;
    return randNumber;
}

export function rollD20 (): number {
    return getRandomInt(1,20);
}

function getRandomInt (min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}