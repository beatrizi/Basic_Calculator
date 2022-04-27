/*GET http://127.0.0.1:5500/calculation net::ERR_ABORTED 404 (Not Found)
*I tried to run in my local browser but It doesn't work because I imported in main.js and in html I used type module.
 * Type module only run on the server side.
 * si eso usar un servidor como XAMPP  para que funcione.
 * Para ejecutar módulos tienes que asegurarte de utilizar un servidor y ejecutar desde ahí los archivos. Por ejemplo, un XAMPP. Y cuando accedes no lo haces a file:///... sino a localhost/
 */

function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}
export { sumar, restar, dividir, multiplicar }
