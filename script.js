function receiveMessage() 
{
    var name = document.getElementById("name").value;
    var message = `Sr(a) ${name}, agradecemos por clicar no botão.`
    console.log (message);
    document.getElementById("menssagem").textContent = message;
}