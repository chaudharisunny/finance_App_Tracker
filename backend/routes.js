import express from 'express'
import {  allTransaction, deleteTransaction, newTransaction, transactionSummary, updateAccountAmount, updateTransaction} from './controller/transaction.js'
import { editUser, loginUser, logoutUser, newUser, upload } from './controller/user.js'
import { createToken, verifyToken } from './middleware/createToken.js'
import { allAccount, deleteAccount, editAccount, getEditAccount, newAccount } from './controller/account.js'

const routes=express()

routes.get('/',(req,res)=>{
    res.status(200).json({message:'all its work'})
})
routes.get('/transaction/all',verifyToken,allTransaction)
routes.post('/addTransaction',verifyToken,newTransaction)
routes.put('/updateTransaction/:id',updateTransaction)
routes.put("/updateaccamount", verifyToken, updateAccountAmount);
routes.get("/summary", verifyToken, transactionSummary);
routes.delete('/deleteTransaction/:id',deleteTransaction)

routes.post('/register',upload.single('image'),newUser)
routes.post('/login',loginUser)
routes.post('/logout',logoutUser)
routes.put('/edituser/:id',editUser)

routes.get('/allaccount',verifyToken,allAccount)
routes.post('/newaccount',verifyToken,newAccount)
routes.put('/updateaccount/:id',verifyToken,editAccount)
routes.get('/geteditacc/:id',verifyToken,getEditAccount)
routes.delete('/deleteaccount/:id',deleteAccount)

export default routes 