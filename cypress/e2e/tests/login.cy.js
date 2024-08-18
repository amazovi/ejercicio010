import LoginPage from '../pageObjects/LoginPage';

describe('Pruebas de inicio de sesión', () => {
  const loginPage = new LoginPage();

  it('Debería iniciar sesión con credenciales válidas', () => {
    loginPage.visit();
    loginPage.enterUsername('anamazovi');
    loginPage.enterPassword('curso2024');
    loginPage.submit();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Inicio de sesión exitoso');
    });
  });
});
