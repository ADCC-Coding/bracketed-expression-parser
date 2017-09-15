import 'core-js/es6';
import 'core-js/es7/reflect';

let openers: Array<string> = ['{', '[', '('];
let closers: Array<string> = [')', ']', '}'];

function validateBrackets(input: string): Array<string> {

    let stackOfChars: Array<string> = new Array();
    let indexOfChars: Array<number> = new Array();
    let returnValue: Array<string> = new Array();

    for (let _i = 0; _i < input.length; _i++) {

        let char: string = input[_i];

        if (openers.includes(char)) {
            stackOfChars.push(char);
            indexOfChars.push(_i);
        } else if (closers.includes(char)) {
            if (stackOfChars.length <= 0) {
                return null;
            } else {
                let lastOpener: string = stackOfChars.pop();
                let lastOpenerIndex: number = indexOfChars.pop();
                switch (lastOpener) {
                    case '{':
                        if (char != '}')
                            return null;
                        break;
                    case '(':
                        if (char != ')')
                            return null;
                        break;
                    case '[':
                        if (char != ']')
                            return null;
                        break;
                }
                returnValue.push(input.substring(lastOpenerIndex, _i + 1));
            }
        }
    }

    if (stackOfChars.length === 0) {
        return returnValue;
    } else {
        return null;
    }
}


let main = function () {
    let inputs: Array<string> = [
        '{adf(asd)[ee](asdfadsf[adsfadfs{adfsasdf}aasdf]asdfa)}',
        '{ [ ] ( ) }',
        '{ [ ( ] ) }',
        '{ [ }',
        ')))(((',
        '()()()',
        '()()())',
        'a (b c) d',
        '[ a { b c } (e [f g] h) (i j) ]',
        '(* (+ a (^ b 2)) c)',
        '(defun first-child (tree) (if (null tree) nil (cdr (car tree)) ) )'
    ];

    for (let entry of inputs) {
        console.log(`Processing: ${entry}`);
        let output = validateBrackets(entry);
        if (output == null) {
            console.log(`Invalid input`);
        } else {
            for (let outVal of output) {
                console.log(outVal);
            }
        }
        console.log('');
    }

}();