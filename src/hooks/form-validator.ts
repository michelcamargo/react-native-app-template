import { AddressFormData } from "../lib/customer";
// import { FormInputError } from "../types/form";

class FormValidator {

  public static validateAddress(formData: AddressFormData): Array<string> {
    for (const input in formData) {
      console.log('FormValidator.validateAddress', input);
    }
		
    return [];
  }

}

export default FormValidator;

