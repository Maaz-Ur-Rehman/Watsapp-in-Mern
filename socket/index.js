const WebSocket = require('ws');
const http = require('http');
const cors = require('cors'); // Import the cors middleware

const server = http.createServer((req, res) => {
    // Set up CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Handle preflight request (OPTIONS)
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
});

const wss = new WebSocket.Server({ server }); // Pass the server instance to WebSocket

let users = [];

const addUser = (userData, socketId) => {
    if (!users.some(user => user.sub === userData.sub)) {
        users = [...users, { ...userData, socketId }];
    }
};

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
};

wss.on('connection', (socket) => {
    socket.send("connected");
    console.log(recieverId, "recvckl");
    
    socket.on('addUsers', userData => {
        addUser(userData, socket.id);
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ event: 'getUsers', data: users }));
            }
        });
    });

    socket.on('sendMessege', data => {
        console.log(data, "data");
        const user = getUser(data.recieverId);
        console.log('User:', user);

        if (user && user.socketId) {
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN && client.sub === user.sub) {
                    client.send(JSON.stringify({ event: 'getMessege', data: data }));
                }
            });
        } else {
            console.log('User not found or missing socketId');
        }
    });
});

// Start the HTTP server
server.listen(7071, () => {
    console.log('WebSocket server is running on port 7071');
});
