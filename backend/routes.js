import express from 'express'
import { allTrnasaction, deleteTransaction, newTransaction, updateTransaction} from './controller/transaction.js'
import { editUser, loginUser, logoutUser, newUser, upload } from './controller/user.js'

const routes=express()

routes.get('/',(req,res)=>{
    res.status(200).json({message:'all its work'})
})
routes.get('/allTransaction',allTrnasaction)
routes.post('/addTransaction',newTransaction)
routes.put('/updateTransaction/:id',updateTransaction)
routes.delete('/deleteTransaction/:id',deleteTransaction)

routes.post('/register',upload.single('image'),newUser)
routes.post('/login',loginUser)
routes.post('/logout',logoutUser)
routes.put('/edituser/:id',editUser)
export default routes 