import * as Yup from "yup";

//regex password rules
const passwordRequrements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

//regex for language
const arabicRegex = /^[\u0600-\u06FF0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\-]+$/
const englishRegex = /^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\-]+$/

export default Yup.object({

  //first name
  firstName: Yup.string()
    .trim()
    .required("Please enter a valid First name ")
    .matches(englishRegex, " Please enter text in English"),

  //last name 
  lastName: Yup.string()
    .trim()
    .required("Please enter a valid Last name ")
    .matches(englishRegex, " Please enter text in English"),


  //gender
  gender: Yup.string().required("Please enter a valid Gender "),

  //email
  email: Yup.string().email(),

  age: Yup.number()
    .typeError('Please enter a valid number')
    .required('Number is required')
    .min(10, 'Number must be at least 10')
    .max(100, 'Number must be at most 100'),

  //password
  password: Yup.string()
    .required()
    .matches(
      passwordRequrements,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  retypePss: Yup.string()
    .required()
    .matches(
      passwordRequrements,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ).oneOf([Yup.ref('password')], 'Passwords must match'),
});
