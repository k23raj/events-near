import React from 'react'
import axios from '../../config/axios'
import { setUser } from '../../actions/user'
import {connect} from 'react-redux'
import '../../styleSheet/login.css'
class UserRegister extends React.Component{ 
    constructor(props){
        super(props)
        this.state={
            name:'',
            username:'',
            email:'',
            password: '',
            mobile:'',
            errMsg:'',
            successMsg:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        e.persist()
        this.setState ({ [e.target.name]: e.target.value })
    }

    handleReset(e){
        this.setState(()=>({
            name:'',
            username:'',
            email:'',
            password: '',
            mobile:'',
            errorMsg: "",
            successMsg: ""
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            name:this.state.name,
            username:this.state.username,
            email: this.state.email,
            mobile:this.state.mobile,
            password:this.state.password
        }
        axios.post('/users/register', formData)
            .then((response) => {
                console.log("response")
                if(response.data.hasOwnProperty('errors')){
                    this.setState({errorMsg:response.data.message})
                }
                else {
            
                    this.props.dispatch(setUser(response.data))
                    this.setState( { successMsg:'User Successfully                            register',
                                         name:'',
                                         errorMsg: '',
                                         email: '',
                                         username:'',
                                         password: '',
                                         mobile:''
                 })
                }
            }).catch(err => {
                console.log(err)
            })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <h3>Register</h3>
                    {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                    {this.state.successMsg && <p>{this.state.successMsg}</p>}
                </div>
                <form >
                <div className="row">
                    <label>
                    Name <input type="text" value ={this.state.name} onChange={this.handleChange} name='name'/>
                    </label>
                    </div>
                    <div className="row">
                <label>
                    User Name <input type = "text" value = {this.state.username} onChange={this.handleChange} name='username' />
                        </label>
                    </div>
                    <div className="row">
                <label>
                    E-mail <input type = 'email' value = {this.state.email} onChange = {this.handleChange} name= 'email' />
                        </label>
                    </div>
                    <div className="row">
                    
                <label>
                    Password <input type='password' value={this.state.password} onChange ={this.handleChange} name='password'/>
                        </label>
                    </div>
                    <div className="row">
                <label>
                    Mobile <input type = 'number' value = {this.state.mobile} onChange = {this.handleChange} name= 'mobile' />
                        </label>
                    </div>
                    <div className="row">
                        

                        <button onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.handleReset}>Reset</button>
                        </div>
            </form>
            </div>
        )
    }
}
export default connect()(UserRegister)