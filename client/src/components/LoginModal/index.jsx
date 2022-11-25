import React, { useState } from 'react'
import "./LoginModal.css"
import Axios from "axios"
import {UseStateContext} from "../../context/ContextProvider"


const LoginModal = () => {

    const { login, setLogin } = UseStateContext()

    const [modalEmail, setModalEmail] = useState("")
    const [modalPass, setModalPass] = useState("")
    const [register, setRegister] = useState(false)

    const HandleSignButton = ()=>{
        document.getElementById("invalidModal-email").style.display= "none"
        document.getElementById("invalidModal-pass").style.display = "none"
        if(!validateModalInfos()){
            Axios.post("https://cooper-mysql.herokuapp.com/login",{
                email: modalEmail,
                password: modalPass,
            }).then((resp)=>{
                if(resp.data.returnCode ===1){
                    document.getElementById("invalidModal-email").style.display= "flex"
                    setLogin(false)
                }else if(resp.data.returnCode ===2){
                    document.getElementById("invalidModal-pass").style.display = "flex"
                    setLogin(false)
                }
                else{
                    setLogin(true)
                }
            })
        }
    }
    const HandleRegisterButton =()=>{
        document.getElementById("success-register").style.display= "none"
        document.getElementById("erro-register").style.display = "none"
        if(!validateModalInfos()){
            Axios.post("https://cooper-mysql.herokuapp.com/register",{
                email: modalEmail,
                password: modalPass,
            }).then((resp)=>{
                if(resp.data.returnCode === 4){
                    document.getElementById("success-register").style.display= "flex"
                }else if(resp.data.returnCode === 5){
                    document.getElementById("erro-register").style.display= "flex"

                }else alert('erro ao registrar usuario')
            })
        }
    }

    const validateModalInfos = ()=>{
        const email= document.getElementById("login-email")
        let usuario = email.value.substring(0, email.value.indexOf("@"))
        let dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
        let aux = false
        if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")===-1) &&
        (dominio.search("@")===-1) &&
        (usuario.search(" ")===-1) &&
        (dominio.search(" ")===-1) &&
        (dominio.search(".")!==-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            document.getElementById('invalidModal-email').style.display ="none"
        }else{
            aux = true
            document.getElementById('invalidModal-email').style.display = 'flex'
  

        }

        const pass = document.getElementById("login-pass").value
        if(pass<5){
            document.getElementById('invalidModal-pass').style.display ="flex"
            aux = true
        }
        return aux
    }


  return (
    <div className='modal-content'>
        <div className='loginModal-closeButtoncontainer'>
            <button className='loginModal-buttonClose' onClick={()=>{
                if(login){
                    document.getElementById("modalLogin").style.display = "none";
                }else{
                    document.getElementById("modalLogin").style.display = "none";
                    document.getElementById("invalidModal-email").style.display= "none"
                    document.getElementById("invalidModal-pass").style.display = "none"
                }
                setRegister(false)
            }
            }>close</button>
        </div>
        <div className='loginModal-imgTitleContainer'>
            <img className='loginModal-img' alt="img" src = {require(`../../data/image6.png`)}/>
            <div className='loginModal-titleContainer'>
                <h1 className='loginModal-titleText loginModal-signTitle'>{register ? "Register" : "Sign in"}</h1>
                <h2 className='loginModal-titleText loginModal-accessTitle'>to access your list</h2>
            </div>
        </div>
        {login ? <div className='loginModal-titleText'>Login sucess</div> :
            <div className='loginModal-inputsContainer'>
                <div className='loginModal-inputContent'>
                    <p className='loginModal-pText'>User:</p>
                    <input className='loginModal-input' type={"email"} id="login-email" value={modalEmail} placeholder="example@example.com" onChange={()=>{setModalEmail(document.getElementById("login-email").value)}}/>
                    <p id="invalidModal-email" className='loginModal-pTextInvalid'>Email inválido</p>
                </div>
                <div className='loginModal-inputContent'>
                    <p className='loginModal-pText'>Password</p>
                    <input className='loginModal-input' type={"password"} id="login-pass" value={modalPass} placeholder="********" onChange={()=>{setModalPass(document.getElementById("login-pass").value)}}/>
                    <p id="invalidModal-pass" className='loginModal-pTextInvalid'>Senha inválida</p>
                </div>
                {register ?
                    <div className="loginModal-buttonContainer loginModal-RegisterButtonContainer">
                        <button onClick={()=>{HandleRegisterButton()}} className='loginModal-signButton'>Register now</button>
                        <p id='success-register' className='loginModal-pTextInvalid'>Registrado com sucesso!</p>
                        <p id='erro-register' className='loginModal-pTextInvalid'>Usuario já cadastrado</p>
                    </div>
                :
                    <div className='loginModal-buttonContainer'>
                        <button onClick={()=>{HandleSignButton()}} className='loginModal-signButton'>Sign in</button>
                        <button onClick={()=>{
                            setRegister(true)
                            document.getElementById("invalidModal-email").style.display= "none"
                            document.getElementById("invalidModal-pass").style.display = "none"
                        }}
                          className='loginModal-registerButton'
                        >
                            Register now
                        </button>
                    </div>
                }
            </div>
        }
    </div>
  )
}

export default LoginModal