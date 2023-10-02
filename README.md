# Api para envio de emails
 <h2>Api simples para enviar vários emails</h2> <br>
 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
 <p> O sistema tem mecânica CRUD (create, read, update e delete), autenticação, login e futuramente chatbot integrado. Se chama v2, pois a primeira versão usava o padrão mvc com o uso do ejs, esse padrão era um pouco limitado. </p><br>
- Frameworks, bibliotecas usadas e banco de dados<br>
<ul>
      <li>  Node.js  </li>
      <li>    Express </li>
      <li>    Axios   </li>
      <li>  nodemailer  </li>
</ul>
<br>     
<h2>Principais mecânicas</h2>
- Envio em massa de emails pelo gmail, está em construção usando a api oficial do nodemailer. Documentação de inspiração: https://nodemailer.com/ <br>
<br>
<h2>Intalação Backend</h2>
<p>É possível usar apenas o backend, pode-se usar para testar. Também pode ser usado para outros projetos, basta adicionar suas credenciais em algum arquivo do tipo .env.</p>
- Na pasta backend, no terminal, tanto do vscode ou poweShell. Digite: npm i (para instalar as bibliotecas)<br>

- Após use as seguinte uri: 
	-  POST: http://localhost:3005/envio/ => Enviar emails 
		- Body:

				{
					"from":  "string", //Remetente
					"to":  "string" //destinatário
					"subject":  "string", //Titulo do email
					"text":  "string", //Texto do email
				}
				 


