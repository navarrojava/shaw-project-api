const autoBind = require('auto-bind');


class PalindromeService {


    constructor() {
        autoBind(this);
    }

    /**
     *
     * @param {String} text
     * @returns {Promise}
     */
    verify(text) {

        return new Promise((resolve, reject) => {
            let leftCharPosition = 0;
            let rightCharPosition = text.trim().length -1;
            let breakChar = this.midChar(text);
            let isPalindrome = true;

            while (leftCharPosition <= breakChar) {
                 isPalindrome = text.charAt(leftCharPosition++) == text.charAt(rightCharPosition--);

                if(!isPalindrome){
                    reject();
                }
            }
            resolve();

        });
    }

    midChar(text) {
        let textLength = text.length;
        return textLength % 2 === 0 ? (textLength / 2) : ((textLength + 1) / 2);
    }

}

const palindromeService = new PalindromeService();
module.exports = palindromeService;