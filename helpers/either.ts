import { Failure } from "./failure";
import { Success } from "./sucess";
export type Either<S, F> = Success<S> | Failure<F>;


export const success = <S, F>(l: S): Either<S, F> => {
    return new Success<S>(l);
};

export const failure = <S, F>(a: F): Either<S, F> => {
    return new Failure<F>(a)
} 