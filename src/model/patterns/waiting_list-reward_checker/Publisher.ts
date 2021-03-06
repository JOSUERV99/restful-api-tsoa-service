import { GymSessionUniqueDate } from "../../GymSession";
import { Subscriber } from "./Subscriber";

export abstract class Publisher {
    subscribers: Subscriber[] = [];
    abstract subscribe(subscriber : Subscriber) : void;
    abstract notifySubscribers(data : object) : void;
    abstract unsubscribe(subscriber : Subscriber) : void;
}