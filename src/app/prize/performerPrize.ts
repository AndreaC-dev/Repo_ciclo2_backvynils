export class PerformerPrize {

    constructor(private idA: number, private premiationDateA: string) {
  
    }
    get id(): number { return this.idA; }
    get premiationDate(): string { return this.premiationDateA; }
  }