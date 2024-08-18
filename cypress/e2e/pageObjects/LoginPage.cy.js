class LoginPage {
  visit() {
    cy.visit('http://localhost:8080'); // URL de la aplicación
  }

  enterUsername(username) {
    cy.get('#anamazovi').type(username);
  }

  enterPassword(password) {
    cy.get('#curso2024').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default LoginPage;
