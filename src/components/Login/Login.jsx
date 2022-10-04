import React from "react"
import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators/validatos"
import { Input } from "../common/FormControls/FormsControls"

const Login = (props) => {

    const onSugmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSugmit} />
    </div>
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name={"login"}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field placeholder="Password" name={"password"}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


export default Login