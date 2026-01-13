import * as yup from "yup";

export const registerSchema = yup.object({
    userName: yup 
    .string()
    .required("Username required")
    //ete dashty datark e namaka grvelu vor Username required
    .min(3, "Minimum 3 characters"),
    //ete toghy 3 nishic pakas e,namaka grvelu minimumy 3 tar lini 

    email: yup 
    .string()
    .required("Please provide a valid password")
    .email("the mail is wrong"),
    //nuyn dzevy emaili hamar 

    password: yup
    .string()
    .required("Please provide a valid password")
    .min(8,"error")
    //nvazaguyny lini 8 nish ete che error da 
    .matches(/^[A-Z]/, "The first letter must be capitalized")
    //togh skzbum ^ petq e lini a-z metsatar
    .matches(/[.\\+\-&#]/, "Must include at least one special character"),
    //stuguma vor toghy unena nshaner 

})

