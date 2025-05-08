import Transaction from '../models/transaction.js'

export const allTrnasaction=async(req,res)=>{
    try{
        const allTransaction=await Transaction.find()
        res.status(200).json({data:allTransaction})
    }catch(error){
        res.status(500).json({error:'server error'})
    }
}


export const newTransaction = async (req, res) => {
  try {
    const { item, category, payment,transactionType, amount, date } = req.body;

    if (!item || !category || !payment ||!transactionType|| !amount || !date) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    let formattedDate;
    if (typeof date === 'string' && date.includes('/')) {
      const [day, month, year] = date.split('/');
      formattedDate = new Date(`${year}-${month}-${day}`);
    } else {
      formattedDate = new Date(date);
    }
    
    const newTransaction = await Transaction.create({
      item,
      category,
      payment,
      amount,
      transactionType,
      date: formattedDate
    });

    res.status(201).json({
      message: 'New transaction added',
      data: newTransaction
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateTransaction=async(req,res)=>{
    try {
        const{id}=req.params 
        if(!id){
            res.status(401).json({error:'id is not found'})
        }
        const updateTransaction=await Transaction.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.status(200).json({message:'update data'},updateTransaction)
    } catch (error) {
        console.log(error);
        
        res.status(500).json({error:"server error"})
    }
}

  export const deleteTransaction=async(req,res)=>{
    try{
        const{id}=req.params 
        if(!id){
            res.status(401).json({error:'id is not found'})
        }
        const deleteTransaction=await Transaction.findByIdAndDelete(id)
        res.status(200).json({message:'delete this data'},deleteTransaction)
    }catch(error){
        res.status(500).json({error:'server error'})
    }
 }
