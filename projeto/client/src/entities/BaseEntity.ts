import { DomainEvent, DomainEventType } from "../events/DomainEvents";

export class BaseEntity {

    callbacks: { eventName: DomainEventType, callback: (event: DomainEvent) => void; }[];

    constructor() {
        this.callbacks = [];
    }

    on(eventName: DomainEventType, callback: (event: DomainEvent) => void) {
        this.callbacks.push({ eventName, callback });
    }

    publish(event: DomainEvent) {
        this.callbacks.forEach(caller => {
            if (caller.eventName === event.name)
                caller.callback(event);
        });
    }
}
