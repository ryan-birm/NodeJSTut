// Import fs module
const fs = require('fs');

// Present Working Directory: C:\Desktop\NodeJSTut
// Making a new directory called ./myFolder:

fs.mkdir('./myFolder', (err) => {
    if(err){
        console.log(err);
    } else{
        console.log('Folder Created Successfully');
    }
})