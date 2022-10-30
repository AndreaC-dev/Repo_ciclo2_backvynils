export class Prize {

    constructor(private idA: number, private organizationA: string, private nameA: string, private descriptionA: string) {
  
    }
    get id(): number { return this.idA; }
    get organization(): string { return this.organizationA; }
    get name(): string { return this.nameA; }
    get description(): string { return this.descriptionA; }
  }