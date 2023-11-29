import app from "./App.mjs";
import { PORT } from "./utils/utils.mjs";

app.listen(PORT,() =>{
    console.log(`server started at http://localhost:${PORT}/api/blogs`);
})