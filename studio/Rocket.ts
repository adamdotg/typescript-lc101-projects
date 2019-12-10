import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number{
        let sum: number = 0;
        for (let i=0; i<items.length; i++){
            sum += items[i].massKg;
        }
        return sum;
    }
    currentMassKg(): number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item: Payload): Boolean{
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }
    addCargo(cargo: Cargo){
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    };
    addAstronaut(astronaut: Astronaut){
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    };
}