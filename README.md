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
project contains two file <b>chat.js</b> the server,
that accepts the request at 8002 port checks the clients stores them till they are not paired.
and lastly paires them and connects them.
<br/>other is <b>wschat.html</b> this acts as client, displays the message and sends them.
<ol>
<li> run chat.js with node as <code> node chat.js</code> for testing and deamonize it for production</li>
<li> put wschat.html in you webserver or optionally can serve from node.js itself </li>
