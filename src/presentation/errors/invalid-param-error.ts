export class InvalidParamError extends Error {
    constructor (paramEmail: string){
        super(`Invalid param: ${paramEmail}`)
        this.name = 'InvalidParamError'
    }
}