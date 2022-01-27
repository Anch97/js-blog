export class Validators {
    static required(value = '') { 
        // this validator checks if the control in the form is empty or not
        return value && value.trim()
    }

    static minLength(length) {
        // this validator checks the minimum length of text
        return value => {
            return value.length >= length
        }
    }
}