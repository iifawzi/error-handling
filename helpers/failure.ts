export class Failure<F> {
    readonly value: F;

    constructor(value: F) {
        this.value = value
    }

    isSuccess() {
        return false;
    }

    isFailure() {
        return true;
    }
}