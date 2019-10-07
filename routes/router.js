const express = require('express');
const router = express();
const exec = require('child_process').execFile;


const authPath = 'scripts/authenticate.sh';
const backupDataBasePath = 'scripts/backupDataBase.sh';
const storageBackup = 'scripts/storageBackup.sh';

router.get('/auth' , (req , res) =>{
    try {
        exec(authPath,
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    throw error;
                }
                res.send('Script Executed');
            });
    }
    catch (e) {
        console.error(e);
        res.statusCode(500);
    }

});

router.get('/storage' , (req , res) =>{
    try {
        exec(storageBackup,
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    throw error;
                }
                res.send('Script Executed');
            });
    }
    catch (e) {
        console.error(e);
        res.statusCode(500);
    }
});

router.get('/firestore' , (req , res) =>{
    try {
        exec(backupDataBasePath,
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    throw error;
                }
                res.send('Script Executed');
            });
    }
    catch (e) {
        console.error(e);
        res.statusCode(500);
    }
});

module.exports = router;