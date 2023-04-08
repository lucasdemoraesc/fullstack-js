export type DomainEventType = "addColumn";

export class DomainEvent {

    constructor(readonly name: DomainEventType, readonly data: any) { }
}
