let http = require('http');
function getBooks () {
    return [
        {
            name: 'Shiva Trilogy',
            author: 'Amish Tripathi'
        },
        {
            name: 'Rich Dad Poor Dad',
            author: 'Gumnaam Chourasia'
        }
    ]
}
function getAuthors () {
    return [
        {
           name: 'Gumnaam Chourasia'
        },
        {
            name: 'Amish Tripathi'
        }
    ]
}
let requestListener = function (request, response) {
    if (request.url === '/books') {
        response.setHeader ('content-type', 'application/json');
        response.end (JSON.stringify (getBooks()));
    } else if (request.url === '/authors') {
        response.writeHead (200);
        response.end (getAuthors().toString());
    }
}
const server = http.createServer (requestListener);
server.listen(5000);