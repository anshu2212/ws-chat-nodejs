# WsChat
WsChat  is pure javascript  cross platform implemetation of WebSocket from html5 for a client to client unauthorized chat application using node.js as server.

<h2>Requirement</h2>
<ol>
<li>Node.js , check <a target='_blank' href='https://nodejs.org/en/'>Node.js</a> for installation instuction</li>
<li>A WebServer (optionally)</li>
</ol>

<h2>Dependency</h2>
<ol>
<li> ws , install with npm <code> sudo npm install ws -g</code></li>
</ol>

<h2>Installation</h2>
project contains two file <b>app.js</b> the server,
that accepts the request at 8002 port checks the clients stores them till they are not paired.
and lastly paires them and connects them.and a webserver at 8080 that serves just wschat.html.
<br/>other is <b>wschat.html</b> this acts as client, displays the message and sends them.
<ol>
<li> run app.js with node as <code> node chat.js</code> for testing and deamonize it for production</li>
<li> wschat.html can be accesed at 8080 port , you can also serve it from any server and at any port </li>
