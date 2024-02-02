let message = "Thank you for your purchase!";
let name = "Jhon Doe";


const emailTemplate = `
<div>
  <h1>Hi, {{name}}</h1>
  <p>{{message}}</p>
</div>`;


module.exports = {
  emailTemplate
}