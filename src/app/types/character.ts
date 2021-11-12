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

export enum skillName {
    ACROBATICS = "ACROBATICS",
    ANIMAL_HANDLING = "ANIMAL HANDLING",
    ARCANA = "ARCANA",
    ATHLETICS = "ATHLETICS",
    DECEPTION = "DECEPTION",
    HISTORY = "HISTORY",
    INSIGHT = "INSIGHT",
    INTIMIDATION = "INTIMIDATION",
    INVESTiGATION = "INVESTIGATION",
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
    skillsProf: {
        acrobatics: number;
        animal_handling: number;
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
        sleight_of_hand: number;
        stealth: number;
        survival: number;
    }
}

export interface PlayerCharater extends DndCharater {
    playerName: string;
}

export interface NPCharater extends DndCharater {
    challengeRating: number;
}