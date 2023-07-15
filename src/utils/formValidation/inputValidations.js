/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
  name: 'first_name',
  label: 'First Name',
  type: 'text',
  id: 'first_name',
  placeholder: 'Enter Your First Name',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}
export const last_name_validation = {
  name: 'last_name',
  label: 'Last Name',
  type: 'text',
  id: 'last_name',
  placeholder: 'Enter Your Last Name',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const desc_validation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}

export const mobilenum_validation = {
  name: 'mobile_number',
  label: 'Mobile Number',
  type: 'tel',
  id: 'mobile_number',
  placeholder: 'Enter Your mobile number',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
      /\D/g,
      message: 'please enter valid number',
    },
  },
}

export const pancard_validation = {
  name: 'pan_card',
  label: 'Pancard File',
  type: 'file',
  id: 'pan_card',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const aadharcard_validation = {
  name: 'aadhar_card',
  label: 'Aadharcard File',
  type: 'file',
  id: 'aadhar_card',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const email_validation = {
  name: 'email',
  label: 'Email OR Number',
  type: 'email',
  id: 'email',
  placeholder: 'mail@gmail.com',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}
