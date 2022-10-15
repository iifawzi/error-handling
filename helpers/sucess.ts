export class Success<S> {
    readonly value: S;

    constructor(value: S) {
        this.value = value
    }

    isSuccess() {
        return true;
    }

    isFailure() {
        return false;
    }
}