import { GroupedObservable } from "rxjs";

const chazland = {
    name: "Chazland",
    race: "Human",
    allignment: "Neutral",
    dndClass: "Fighter",
    level: 4,
    attributes: {
        str: 16,
        dex: 17,
        con: 17,
        int: 15,
        wis: 12,
        cha: 9,
    }
};

export enum DndRace {
    HUMAN = "HUMAN",
    ELF = "ELF",
    DWARF = "DWARF",
    
};

export enum Allignment {
    LAWFUL_GOOD = "LAWFUL_GOOD",
    LAWFUL_NEUTRAL = "LAWFUL_NEUTRAL",
    NEUTRAL = "NEUTRAL",
    
};

export enum DndClass {
    FIGHTER = "FIGHER",
    ROGUE = "ROGUE",
}

export enum SkillProficiency {
    UNSKILLED = "UNSKILLED",
    SKILLED = "SKILLED",
    EXPERT = "EXPERT",
}

export enum SkillName {
    ACROBATICS = "ACROBATICS",
    ANIMAL_HANDLING = "ANIMAL HANDLING",
    ARCANA = "ARCANA",
    ATHLETICS = "ATHLETICS",
    DECEPTION = "DECEPTION",
    HISTORY = "HISTORY",
    INSIGHT = "INSIGHT",
    INTIMIDATION = "INTIMIDATION",
    INVESTIGATION = "INVESTIGATION",
    MEDICINE = "MEDICINE",
    NATURE = "NATURE",
    PERCEPTION = "PERCEPTION",
    PREFORMANCE = "PREFORMANCE",
    PERSUASION = "PERSUASION",
    RELIGION = "RELIGION",
    SLEIGHT_OF_HAND = "SLEIGHT OF HAND",
    STEALTH = "STEALTH",
    SURVIVAL = "SURVIVAL",
}

export enum Attribute {
    STR = "str",
    DEX = "dex",
    CON = "con",
    INT = "int",
    WIS = "wis",
    CHA = "cha",
}

export interface Skill {
    name: SkillName;
    attribute: Attribute;
    skillRoll: number;
}

export interface PlayerSkill {
    skillProficiency: SkillProficiency;
    skillName: SkillName;
}



export interface DndCharater {
    name: string;
    race: DndRace;
    allignment: Allignment;
    dndClass: DndClass;
    level: number;
    profBonus: number;
    spellDC?: number; 
    attributes: {
        str: number;
        dex: number;
        con: number;
        int: number;
        wis: number;
        cha: number;
    }
    skills: PlayerSkill[];
    skillsProf: {
        acrobatics: number;
        animalHandling: number;
        arcana: number;
        athletics: number;
        deception: number;
        history: number;
        insight: number;
        intimidation: number;
        investigation: number;
        medicine: number;
        nature: number;
        perception: number;
        preformance: number;
        persuasion: number;
        religion: number;
        sleightOfHand: number;
        stealth: number;
        survival: number;
    };
    
}

export interface PlayerCharater extends DndCharater {
    playerName: string;
}

export interface NPCharater extends DndCharater {
    challengeRating: number;
}