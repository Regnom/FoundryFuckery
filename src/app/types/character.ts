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

export interface DndCharater {
    name: string;
    race: DndRace;
    allignment: Allignment;
    dndClass: DndClass;
    level: number;
    spellDC?: number; 
    attributes: {
        str: number;
        dex: number;
        con: number;
        int: number;
        wis: number;
        cha: number;
    }
}

export interface PlayerCharater extends DndCharater {
    playerName: string;
}

export interface NPCharater extends DndCharater {
    challengeRating: number;
}