let express = require('express');
let router = express.Router();
let HttpStatus = require('http-status-codes');
let palindromeService = require('../service/palindrome-service');


/**
 * Test
 */
router.post('/verify', (req, res) => {

    let text = req.body.word;
    palindromeService.verify(text)
        .then(() => {
            res.sendStatus(HttpStatus.OK);
        }).catch(() => {
        res.sendStatus(HttpStatus.BAD_REQUEST);
    });
});


module.exports = router;