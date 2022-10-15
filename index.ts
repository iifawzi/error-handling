import { Either, failure, success } from "./helpers/either";
import { EmailInvalid } from "./errors/EmailInvalid";
import { CreateUserRequest } from "./types"
import { CreateUserSuccess } from "./success/CreateUserSuccess";
import { UserAlreadyExists } from "./errors/UserAlreadyExists";
import { UsernameTaken } from "./errors/UsernameTaken";


type CreateUserError = UserAlreadyExists | EmailInvalid | UsernameTaken

function createUser(request: CreateUserRequest): Either<CreateUserSuccess, CreateUserError> {
    const isEmailValid = () => { return true };
    const userAlreadyExists = () => { return false };
    const isUsernameTaken = () => { return false };

    if (!isEmailValid()) {
        return failure<CreateUserSuccess, CreateUserError>(new EmailInvalid(request.email));
    }

    if (userAlreadyExists()) {
        return failure<CreateUserSuccess, CreateUserError>(new UserAlreadyExists(request.email))
    }

    if (isUsernameTaken()) {
        return failure<CreateUserSuccess, CreateUserError>(new UsernameTaken(request.email));
    }

    return success<CreateUserSuccess, CreateUserError>(new CreateUserSuccess('12'))
};

const userResult = createUser({
    email: "iifawzie@gmail.com",
    password: "testpass"
});


if (userResult.isFailure()) {
    let error = userResult.value;

    switch (error.constructor) {
        case EmailInvalid:
        case UserAlreadyExists:
        case UsernameTaken:
        default:
    }
}