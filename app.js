var clients=[];
var connected_clients=[];
var active_client=[];
var Msg = '';
const http = require('http')  
const port = 8080
const fs = require('fs')
const path= require('path')
const url = require('url');


const requestHandler = (request, response) => {  
	urlpath=url.parse(request.url).pathname
  console.log(urlpath)
  if('/'===urlpath){
fs.readFile(path.join(__dirname,'wschat.html'),'UTF-8' ,function (err, data) {
	  if (err) throw err;
	  response.end(data);
	});
	}else{
		response.writeHead(404);
		response.end("NOT FOUND");
	}
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});


console.log("chat Server starting");
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: 8002});
    
wss.on('connection', function(ws) {
	clients.push(ws);
	console.log((clients.indexOf(ws)+1)+ ' client connected');
	console.log(ws.readyState);
	readystate=ws.readyState;
	if(1==readystate){
	ws.send("SERVER:Please Wait while We are connecting you to a User");
	if(clients.length>1){
		readystate1=0
		noclient=false;
		while(1!==readystate1){
			pair1=clients.shift();
			if(pair1==ws){
				noclient=true;
				break;
			}
			readystate1=pair1.readyState;
		}
		if(true==noclient){
			clients.push(ws);
		}else{
		var pair2=clients.pop();
		connected_clients.push(pair1);
		connected_clients.push(pair2);
		
		active_client[connected_clients.indexOf(pair2)]=connected_clients.indexOf(pair1);
		active_client[connected_clients.indexOf(pair1)]=connected_clients.indexOf(pair2);
		console.log(active_client);
	ws.send("You are success fully connected start sending message");
	readystate1=pair1.readyState;
	console.log('ready state of pair'+readystate1);
	pair1.send("You are success fully connected start sending message");
	}
	}
    ws.on('message', function(message) {
        console.log('Received from client: %s',message);
        if(connected_clients.indexOf(ws)>-1){
        	connected_pair=connected_clients[active_client[connected_clients.indexOf(ws)]];
        	connected_pair.send( message);
        }else{
        	ws.send('SERVER:You are shouting in wild . noone is there to listen')
        }
    });
    }
});
 wss.on('close', function (ws)
{
	id1=connected_clients.indexof(ws);
	console.log(id1+ "closed connection");
	id2=active_client[connected_clients.indexOf(ws)];
	connected_pair=connected_clients[id2];
	connected_pair.send("SERVER:stranger has closed the connection . Please reload to start again");
	connectet_pair.splice(id1,1);
	connected_pair.splice(id2,1);
	connect_clients.splice(connected_clients.indexof(ws),1);
	
	connect_clients.splice(connected_clients.indexof(connected_pair),1);
	clients.push(connected_pair);
});
 
