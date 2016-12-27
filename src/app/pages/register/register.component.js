"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validators_1 = require("../../theme/validators");
var Register = (function () {
    function Register(fb) {
        this.submitted = false;
        this.form = fb.group({
            'name': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.EmailValidator.validate])],
            'passwords': fb.group({
                'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
                'repeatPassword': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
            }, { validator: validators_1.EqualPasswordsValidator.validate('password', 'repeatPassword') })
        });
        this.name = this.form.controls['name'];
        this.email = this.form.controls['email'];
        this.passwords = this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
        this.repeatPassword = this.passwords.controls['repeatPassword'];
    }
    Register.prototype.onSubmit = function (values) {
        this.submitted = true;
        if (this.form.valid) {
        }
    };
    return Register;
}());
Register = __decorate([
    core_1.Component({
        selector: 'register',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./register.scss')],
        template: require('./register.html'),
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], Register);
exports.Register = Register;
//# sourceMappingURL=register.component.js.map