import { InvalidParamError } from "./../errors/invalid-param-error";
import { HttpResponse, HttpRequest } from "../protocols/http";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { EmailValidator } from "../protocols/email-validator";

export interface ValidatorRequest {
  name: string;
}
export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: any) {
    this.emailValidator = emailValidator;
  }
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      "name",
      "email",
      "password",
      "passwordConfirmation",
    ];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email);
    if (!isValid) {
      return badRequest(new InvalidParamError("email"));
    }
  }
}
