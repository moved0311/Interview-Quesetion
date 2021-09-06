import { useState } from 'react'
export const useForm = ({ initialValues, validation, onSubmit }) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'account':
        setValues((v) => {
          return { ...v, account: e.target.value }
        })
        break
      case 'password':
        setValues((v) => {
          return { ...v, password: e.target.value }
        })
        break
      case 'rememberMe':
        setValues((v) => {
          return {
            ...v,
            rememberMe: !v.rememberMe,
          }
        })
        break
      default:
        return
    }
  }

  const handleSubmit = () => {
    const error = validation(values)
    const errorLen = Object.keys(error).length
    setErrors(error)
    if (errorLen > 0) return
    onSubmit(values)
  }

  return { values, handleSubmit, handleChange, errors }
}
