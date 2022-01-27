export class Form {
    constructor(form, controls) {
        this.form = form
        this.controls = controls
    }

    value() {
        const value = {}
        Object.keys(this.controls).forEach(control => {
            value[control] = this.form[control].value
        })
        return value
    }
    // clearing of the form after creation
    clear() {
        Object.keys(this.controls).forEach(control => {
            this.form[control].value = ''
        })
    }

    isValid() {
        let isFormValid = true

        Object.keys(this.controls).forEach(control => {
            // getting list of validators
            const validators = this.controls[control]
            // creating boolean variable for specific validator
            let isValid = true
            // checking if the current control is valid considering previous value
            validators.forEach(validator => {
                isValid = validator(this.form[control].value) && isValid
            })
            // warning for the user
            if (!isValid) {
                setError(this.form[control])
            } else {
                clearError(this.form[control])
            }
            // overall validation for all controls
            isFormValid = isFormValid && isValid
        })
        return isFormValid
    }
}
// function that warns the user 
function setError($control) {
    clearError($control)
    const error = '<p class="validation-error">Length is too short</p>'
    $control.classList.add('invalid')
    $control.insertAdjacentHTML('afterend', error)
}
// function that avoids repeating of warning after next wrong validation
function clearError ($control) {
    $control.classList.remove('invalid')
    // finding and removing needed child element of div form control
    if ($control.nextSibling) {
        $control.closest('.form-control').removeChild($control.nextSibling)
    }
}