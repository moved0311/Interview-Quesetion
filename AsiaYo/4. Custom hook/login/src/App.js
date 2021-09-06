import React from 'react'
import { useForm } from './customHooks/useForm'
import styled from 'styled-components'

const Container = styled.div`
  width: 300px;
  border: 1px solid #eee;
  padding: 10px;
  margin: 10px;
`
const FormContainer = styled.div`
  margin: 0 auto;
  width: 200px;
`
const FormItem = styled.div`
  margin-top: 10px;
`
const ErrorMsg = styled.div`
  color: red;
  font-size: 12px;
`

function App() {
  const { handleSubmit, handleChange, values, errors } = useForm({
    initialValues: { account: '', password: '', rememberMe: false },
    validation: (values) => {
      const errors = {}
      if (!values.account) {
        errors.account = '請輸入帳號'
      } else if (!values.password) {
        errors.password = '請輸入密碼'
      }
      return errors
    },
    onSubmit: (values) => {
      console.table(values)
    },
  })
  return (
    <Container>
      <FormContainer>
        <FormItem>
          Account:
          <input name="account" onChange={handleChange} value={values.account} />
          {errors.account && <ErrorMsg>{errors.account}</ErrorMsg>}
        </FormItem>
        <FormItem>
          Password:
          <input name="password" type="password" onChange={handleChange} value={values.password} />
          {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
        </FormItem>
        <FormItem>
          <label>
            <input type="checkbox" name="rememberMe" onChange={handleChange} checked={values.rememberMe} />
            Remember Me
          </label>
        </FormItem>
        <FormItem>
          <button onClick={handleSubmit}>Login</button>
        </FormItem>
      </FormContainer>
    </Container>
  )
}

export default App
