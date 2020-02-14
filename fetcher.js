const request = require('request');
const fs = require('fs'); // essa eh a library que faz o http request 

const args = process.argv;


console.log("args", args)
//What should happen if the local file path given is invalid?
request(args[2], (error, response, body) => {//args[2] eh o file pathway  /// pedindo o conteudo
  fs.appendFile(args[3], body, error => { // appendiFile junta pesquisar o prepend tambem trazendo o conteudo
    if (error) throw error;
  })
});
