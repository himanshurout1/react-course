import { BehaviorSubject, Subject } from "rxjs";
// export const prodSubject = new Subject();
export const prodSubject = new BehaviorSubject("initial product");
// prodSubject.getValue(); // for behavior subjects