import React, { useState } from 'react'
import "./GetInTouch.css"
import InputMask from 'react-input-mask';

const GetInTouch = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")

  const handleSendNowButton = ()=>{
    document.getElementById('invalid-name').style.display ="none"
    document.getElementById('invalid-email').style.display ="none"
    document.getElementById('invalid-telephone').style.display ="none"
    document.getElementById('invalid-mensage').style.display ="none"

    let usuario = email.substring(0, email.indexOf("@"))
    let dominio = email.substring(email.indexOf("@")+ 1, email.length);
    if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById('invalid-email').style.display ="none"
    }else{
        document.getElementById('invalid-email').style.display ="flex"
    }
    if(name.length < 3){
        document.getElementById('invalid-name').style.display ="flex"
    }
    if(telephone.length<10){
        document.getElementById('invalid-telephone').style.display ="flex"

    }
    if(document.getElementById('textArea').value.length < 1){
        document.getElementById('invalid-mensage').style.display ="flex"
    }
  }

  return (
    <div className='getInTouch-container'>
        <div className='getInTouch-imageContainer'>
            <img className='getInTouch-img' alt="img" src = {require(`../../data/image4.png`)}/>
            <svg style={{"marginRight" : "150px"}} width="166" height="23" viewBox="0 0 166 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="166" height="23" fill="#46BD62"/>
            </svg>
        </div>
        <div className='getInTouch-content'>
            <div className='getInTouch-TitleContainer'>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4.24264C0 1.89949 1.89949 0 4.24264 0L55.7574 0C58.1005 0 60 1.89949 60 4.24264V55.7574C60 58.1005 58.1005 60 55.7574 60H4.24264C1.89949 60 0 58.1005 0 55.7574V4.24264Z" fill="#46BD62"/>
                    <path d="M44.0696 26.7456L44.0699 26.7456L44.0673 26.7381C44.06 26.7168 44.0495 26.6969 44.0434 26.6851C44.0359 26.6705 44.0327 26.6638 44.0309 26.6587L44.0286 26.6518L44.0258 26.6465C44.0257 26.6459 44.0249 26.6435 44.0232 26.6376C44.0219 26.6333 44.0192 26.6241 44.0148 26.6143C44.0102 26.604 44.0021 26.5892 43.9878 26.5753C43.9772 26.565 43.9663 26.5579 43.9585 26.5535C43.932 26.5228 43.9006 26.5019 43.8796 26.4883C43.8522 26.4639 43.8154 26.4411 43.7762 26.4284C43.7461 26.4187 43.7267 26.4122 43.7163 26.4071L43.7167 26.4062L43.7034 26.4019C43.6755 26.3929 43.6316 26.3812 43.5908 26.3796C43.5891 26.379 43.587 26.3782 43.5847 26.3774C43.5777 26.375 43.5635 26.3706 43.5453 26.3706H41.3719V15.4412C41.3719 15.1361 41.1242 14.9 40.8172 14.9H17.174C16.867 14.9 16.6193 15.1361 16.6193 15.4412V26.3706H14.4459C14.4277 26.3706 14.4135 26.375 14.4065 26.3774C14.4042 26.3782 14.402 26.379 14.4004 26.3796C14.3674 26.3811 14.3336 26.3899 14.3095 26.3962C14.3041 26.3976 14.2993 26.3988 14.295 26.3999L14.2949 26.3996L14.2878 26.4019L14.206 26.4284C14.1601 26.4432 14.1287 26.4714 14.1105 26.489C14.0889 26.503 14.0568 26.5246 14.0304 26.5564C14.0241 26.5606 14.0127 26.5694 14.0026 26.5833C13.9957 26.5929 13.9906 26.6032 13.9873 26.6137C13.9831 26.6232 13.9804 26.6309 13.9786 26.6361L13.9785 26.6366C13.9776 26.6392 13.977 26.6408 13.9766 26.642C13.9539 26.6773 13.9421 26.7116 13.9339 26.7354L13.933 26.7381C13.9233 26.7664 13.9103 26.8122 13.9094 26.8545L13.908 26.8603L13.9078 26.861C13.9068 26.865 13.905 26.8721 13.9035 26.8796C13.9019 26.8878 13.9003 26.8989 13.9003 26.9118V44.5571C13.89 44.8648 14.1404 45.1 14.4459 45.1H43.5453C43.8523 45.1 44.1 44.8639 44.1 44.5588V26.9118C44.1 26.8989 44.0984 26.8878 44.0968 26.8796C44.0953 26.872 44.0935 26.865 44.0925 26.861L44.0923 26.8603L44.0909 26.8547V26.8421L44.0855 26.8263C44.0841 26.8222 44.0829 26.8169 44.0806 26.8024C44.0785 26.7892 44.0755 26.7688 44.0696 26.7456ZM17.7286 28.6256V15.9824H40.2626V28.6256L33.5108 33.5368L33.5108 33.5368L28.9956 36.8292L17.7286 28.6256ZM41.3719 27.4529H41.8739L41.3719 27.8183V27.4529ZM16.6193 27.4529V27.8183L16.1173 27.4529H16.6193ZM15.0006 44.0176V27.9906L28.6626 37.9328C28.6628 37.933 28.6631 37.9331 28.6633 37.9333C28.7643 38.0092 28.8767 38.0412 28.9956 38.0412C29.1145 38.0412 29.2269 38.0092 29.3279 37.9333C29.3281 37.9331 29.3284 37.933 29.3286 37.9328L42.9906 27.9906V44.0176H15.0006ZM20.8114 19.5118H31.7237C32.0307 19.5118 32.2784 19.2757 32.2784 18.9706C32.2784 18.6655 32.0307 18.4294 31.7237 18.4294H20.8114C20.5044 18.4294 20.2567 18.6655 20.2567 18.9706C20.2567 19.2757 20.5044 19.5118 20.8114 19.5118ZM20.8114 23.0412H37.1798C37.4868 23.0412 37.7345 22.8051 37.7345 22.5C37.7345 22.1949 37.4868 21.9588 37.1798 21.9588H20.8114C20.5044 21.9588 20.2567 22.1949 20.2567 22.5C20.2567 22.8051 20.5044 23.0412 20.8114 23.0412ZM20.8114 26.5706H37.1798C37.4868 26.5706 37.7345 26.3345 37.7345 26.0294C37.7345 25.7243 37.4868 25.4882 37.1798 25.4882H20.8114C20.5044 25.4882 20.2567 25.7243 20.2567 26.0294C20.2567 26.3345 20.5044 26.5706 20.8114 26.5706ZM37.7345 29.5588C37.7345 29.2537 37.4868 29.0176 37.1798 29.0176H20.8114C20.5044 29.0176 20.2567 29.2537 20.2567 29.5588C20.2567 29.8639 20.5044 30.1 20.8114 30.1H37.1798C37.4868 30.1 37.7345 29.8639 37.7345 29.5588Z" fill="white" stroke="white" strokeWidth="0.2"/>
                </svg>
                <div className='getInTouch-textContainer'>
                    <h1 className='getInTouch-text getInTouch-textTitle'>Get In</h1>
                    <h2 className='getInTouch-text getInTouch-textTitle getInTouch-textUpper'>Touch</h2>
                </div>
            </div>
            <div className='inputs-container'>
                <div>
                    <p className='getInTouch-text'>Your name*</p>
                    <input className='getInTouch-input' type={'text'} placeholder={"type your name here..."} id={"name"} value={name} onChange={()=>{setName(document.getElementById("name").value.replace(/[0-9]/,""))}} />
                    <p id='invalid-name' className='getInTouch-text' style={{color: 'red', display: 'none'}}>Name invalid</p>
                </div>
                <div className='emailTell-container'>
                    <div className='emailTell'>
                        <p className='getInTouch-text'>Email*</p>
                        <input className='getInTouch-input' type={"email"} placeholder={"example@example.com"} id={"email"} value={email} onChange={()=>{setEmail(document.getElementById("email").value)}}/>
                        <p id='invalid-email' className='getInTouch-text' style={{color: 'red', display: 'none'}}>Email invalid</p>
                    </div>
                    <div className='emailTell'>
                        <p className='getInTouch-text'>Telephone*</p>
                        <InputMask mask={"(99)9999-99999"} className='getInTouch-input' placeholder={"(  ) ____-____"} id={"telephone"} value={telephone} onChange={()=>{setTelephone(document.getElementById("telephone").value)}} />
                        <p id='invalid-telephone' className='getInTouch-text' style={{color: 'red', display: 'none'}}>Telephone invalid</p>
                    </div>
                </div>
                <div>
                    <p className='getInTouch-text'>Mensage</p>
                    <div className='getInTouch-input getInTouch-inputMensageContainer'>
                        <textarea id='textArea' className='getInTouch-inputMensage' type={"text"} placeholder={"Type what you want to say to us"}/>
                    </div>
                    <p id='invalid-mensage' className='getInTouch-text' style={{color: 'red', display: 'none'}}>Mensage invalid</p>
                </div>
                <div className='sendNow-buttonContainer'>
                    <button onClick={()=>{handleSendNowButton()}} className='sendNow-button'>Send Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch