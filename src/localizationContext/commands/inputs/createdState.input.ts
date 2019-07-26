import { State } from "src/localizationContext/domain/state.entity";

export class CreateStateInput {
    public name: string;
    public initials: string;

    public getState(): State {
        let state = new State(this.name, this.initials);
        state.createdAt = new Date().toLocaleString();;
        console.log(state);
        return state;
    }
}