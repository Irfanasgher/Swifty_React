export default function foo(identifier, value) {

    let isValid = true;
    let errMsg = '';

    switch (identifier) {
        case ('phone'):
            if (value.trim() === '' && isValid) {
                isValid = false;
                errMsg = 'Phone must have a value';
            } else if (value.length < 2 && isValid) {
                isValid = false;
                errMsg = 'Phone must be more than one characters long';
            } else if (!value.match(/^[89]\d{7}$/) && isValid) {
                isValid = false;
                errMsg = 'Please key in a valid Singapore Number';
            }
            break;

        case ('name'):
            if (value.trim() === '' && isValid) {
                isValid = false;
                errMsg = 'Name must have a value';
            } else if (!value.match(/^[a-zA-Z]*$/) && isValid) {
                isValid = false;
                errMsg = 'Name must be letters only';
            } else if (value.length < 2 && isValid) {
                isValid = false;
                errMsg = 'Name must be more than one characters long';
            }
            break;

        case ('postal'):
            if (value.trim() === '' && isValid) {
                isValid = false;
                errMsg = 'Postal must have a value';
            } else if (!value.match(/^[0-9]{6}$/) && isValid) {
                isValid = false;
                errMsg = 'Postal must be numbers only';
            } else if (value.length < 2 && isValid) {
                isValid = false;
                errMsg = 'Postal must be more than one characters long';
            }
            break;

        case ('unit'):
            if (value.trim() === '' && isValid) {
                isValid = false;
                errMsg = 'Unit must have a value';
            } else if (!value.match(/^[0-9]+(-[0-9]+)$/) && isValid) {
                isValid = false;
                errMsg = 'Unit must be in the form xx-xx';
            } else if (value.length < 2 && isValid) {
                isValid = false;
                errMsg = 'Unit must be more than one characters long';
            }
            break;

        // case ('email'):
        //     if (value.trim() === '' && isValid) {
        //         isValid = false;
        //         errMsg = 'Email Address Must have a value';
        //     } else {
        //         const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        //         if (!pattern.test(value)) {
        //             isValid = false;
        //             errMsg = "Please enter a valid email address"
        //         }
        //     }
        //     break;

        default:

    }

    return { isValid: isValid, errorsMsg: errMsg };
}