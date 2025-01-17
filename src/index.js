import app from "./app.js";
import "./database.js"
app.listen(app.get('port'),
()=>console.log('server listening on port ' + app.get('port')));