import  {gql} from 'graphql-tag';

export const SIGNUP_USER = gql `
mutation Admin_registration($email: String!, $phoneNo: String!, $countryCode: String!, $password: String!, $name: String) {
  admin_registration(email: $email, phoneNo: $phoneNo, countryCode: $countryCode, password: $password, name: $name) {
    accessToken
  }
}
`
export const LOGIN_USER=gql `
mutation Admin_login($email: String!, $password: String!) {
  admin_login(email: $email, password: $password) {
    accessToken
  }
}`

export  const FORGET_USER=gql`
mutation Admin_forgot_password($email: String!) {
  admin_forgot_password(email: $email) {
    msg
  }
}`