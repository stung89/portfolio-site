// function handleSubmit(e){
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     axios({
//         method: "POST", 
//         url:"http://localhost:3002/send", 
//         data: {
//             name: name,   
//             email: email,  
//             messsage: message
//         }
//     }).then((response)=>{
//         if (response.data.msg === 'success'){
//             alert("Message Sent."); 
//             this.resetForm()
//         }else if(response.data.msg === 'fail'){
//             alert("Message failed to send.")
//         }
//     })
// }


// function resetForm(){
//     document.getElementById('contact-form').reset();
// }