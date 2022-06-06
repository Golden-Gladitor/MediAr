const express =require('express')
const app=express()
const mysql=require('mysql')
const cors=require('cors')

app.use(cors())
app.use(express.json())

app.listen(3001,()=>{
    console.log("Background is runnning")
})

const db= mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'root@',
    database:'channeldoctor'
})
db.connect(function(err) {
    if(err){
        console.log(err)
    }
    else{ 
        
        console.log('You are  connected with database')
    }
   
})

app.post('/SignUp' , (req,res) =>{
    const userName=req.body.userName
    const email=req.body.email
    const password =req.body.password
    

    db.query(
        "INSERT INTO channeldoctor.user (User_name,email,Password) VALUES(?,?,?)",
        [userName,email,password],(err,result) =>  {
            if(err){
                console.log(err)
            }
            else{
                res.send('value inserted')
            }
        }
    )

})

app.post('/SignIn' , (req,res) =>{
    const email=req.body.email
    const Password =req.body.password
   db.query(
       "SELECT * FROM user WHERE email=? AND password=?",
       [email,Password],
       (err,result)=>{
           if(err){
            res.send({err:err})
           console.log(err);}
           if(result.length>0){
               res.send({result});
               console.log('welcome to home page')
           }
           else{

               console.log('Wrong user name and password')
           }
       }
   );
    		

})


