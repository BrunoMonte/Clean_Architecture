import { SignUpController } from './signup'

describe ('SignUp Controller', () => {
    test('Should return 400 if no name is provided', () => {
        const sut =  new SignUpController()
        const httpRequest = {
            body: {
                email: 'bruno@gmail.com',
                password: '123456',
                passwordConfirmation: '123456'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBE(400)
    })
})