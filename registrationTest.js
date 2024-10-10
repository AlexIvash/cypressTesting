import * as registrationMethods from "./registrationMethods.spec.cy";
import EnterIncorrectConfirmationPassword from "./registrationMethods.spec.cy";
import verifyUserNameProfile from "./registrationMethods.spec.cy";
import verifyPasswordError from "./registrationMethods.spec.cy";

describe('RegistrationOnBooking', () => {
    it('Register an account with email', () => {
registrationMethods.openSite();
registrationMethods.EnterTheEmail();
registrationMethods.EnterThePassword();
registrationMethods.verifyHomePageOpened();
registrationMethods.verifyUserNameProfile();
    })
})

describe('RegistrationOnBooking', () => {
    it('Check Error is presented, when wrong confirmation password entered', () => {
        registrationMethods.openSite();
        registrationMethods.EnterTheEmail();
        registrationMethods.EnterIncorrectConfirmationPassword();
        registrationMethods.verifyHomePageIsNotOpened();
        registrationMethods.verifyConfirmationPasswordError();
    })

    describe('RegistrationOnBooking', () => {
        it('Check Error is presented, when not correct password entered', () => {
            registrationMethods.openSite();
            registrationMethods.EnterTheEmail();
            registrationMethods.EnterIncorrectPassword();
            registrationMethods.verifyHomePageIsNotOpened();
            registrationMethods.verifyPasswordError();
        })
})

