import { PlayerCharater, PlayerSkill, Skill, SkillName, SkillProficiency } from "./types/character";

export function calcPlayerSkillBonus (player: PlayerCharater, skill: Skill): number{
    const profBonus = getProfBonus(player,skill);
    const attrBonus = Math.floor((player.attributes[skill.attribute]-10)/2);
    return profBonus + attrBonus;
}

export function getProfBonus (player: PlayerCharater, skill: Skill): number{
    let profBonus = 0;
    const playerSkill = player.skills.find((playerSkill: PlayerSkill) => {
        return skill.name === playerSkill.skillName;
    });
    if (playerSkill?.skillProficiency === SkillProficiency.SKILLED) {
        profBonus = Math.ceil(player.level/4)+1;
    }
    if (playerSkill?.skillProficiency === SkillProficiency.EXPERT) {
        profBonus = (Math.ceil(player.level/4)+1)*2;
    }
    return profBonus;
}