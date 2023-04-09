export type DomainEventType = "addColumn" | "addCard" | "deleteColumn" | "deleteCard" | "increaseEstimative" | "decreaseEstimative";

export class DomainEvent {

    constructor(readonly name: DomainEventType, readonly data: any) { }
}
