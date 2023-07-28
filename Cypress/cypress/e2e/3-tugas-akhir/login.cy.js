// cypress/e2e/login.cy.js
/// <reference types="cypress" />

import Navigation from '../../support/PageObject/Navigation';
import userData from '../../data/userData';

describe('Login Test Suite', () => {
    beforeEach(() => {
        Navigation.visitHomepage();
        cy.contains('Sign In').click();
    });

    it('Verifikasi tidak dapat login dengan user yang tidak terdaftar', () => {
        cy.contains('Sign In').click();
        cy.get('#email').type(userData.invalidUser6.email);
        cy.get('#pass').type(userData.invalidUser2.password);
        cy.get('button[name="send"]').click();
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)
    });

    it('Verifikasi tidak dapat login dengan email yang salah ', () => {
        cy.contains('Sign In').click();
        cy.get('#email').type(userData.invalidUser6.email);
        cy.get('#pass').type(userData.validUser.password);
        cy.get('button[name="send"]').click();
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)

    });

    it('Verifikasi tidak dapat login dengan password yang salah', () => {
        cy.contains('Sign In').click();
        cy.get('#email').type(userData.validUser.email);
        cy.get('#pass').type(userData.invalidUser2.password);
        cy.get('button[name="send"]').click();
        cy.get('.message-error > div').should('be.visible');

    });

    it('Verifikasi dapat masuk dengan username dan password yg benar', () => {
        cy.contains('Sign In').click();
        cy.get('#email').type(userData.validUser.email);
        cy.get('#pass').type(userData.validUser.password);
        cy.get('button[name="send"]').click();
        cy.get('.page-wrapper').should('be.visible');
        cy.contains("What's New").should('be.visible');

    });

    // Assumsikan user sudah berhasil masuk dan berada pada halaman dashboard
    it('Verifikasi dapat menampilkan halaman informasi akun dan menampilkan nama pelanggan', () => {
        cy.contains('Sign In').click();
        cy.get('#email').type(userData.validUser.email);
        cy.get('#pass').type(userData.validUser.password);
        cy.get('button[name="send"]').click();
        Navigation.visitAccount();
        cy.contains("My Orders").should('be.visible');
        cy.wait(500)

        // Click pada "My Account" link atau button
        cy.contains('My Orders').click();

        // Verifikasi user dapat masuk ke halaman informasi akun dan menampilkan informasi
        cy.contains('Account Information').should('be.visible').click();
        cy.wait(5000)

    });

    // Add more test cases to verify other scenarios related to login.
});

