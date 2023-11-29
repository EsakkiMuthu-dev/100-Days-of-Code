const Contact =require('../models/Contact');

const contactController={
    getAllContacts:async(req,res)=>{
        try{
            const contacts = await Contact.find();
            if(!contacts)
            {
                res.status(400).json({mesage:"No Contact Found! "})
            }
            res.status(200).json(contacts);

        }catch(e)
        {
            res.status(500).json({error:"internal server error ",message:e});
        }
    },
    getContact: async(req,res)=>{
        try{
            const id = req.params.id;
            const contact = await Contact.findById(id);
            // if(!contact)
            // {
            //     res.status(400).json({message:"No Contact Found! "})
            // }
            res.status(200).json(contact);

        }catch(e)
        {
            res.status(500).json({error:"internal server error ",message:e});
        }
    },
    createContact:async(req,res)=>{
        try{
            const newContact = new Contact(req.body);
            const savedContact = await newContact.save();
            res.status(200).json(savedContact);

        }catch(e)
        {
            res.status(500).json({error:"internal server error ",message:e});

        }
    },
    updateContact:async(req,res)=>{
        try{
            const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
            if(!updatedContact)
            {
                res.status(400).json("No Contact ID ");
            }
            res.status(200).json(updatedContact);

        }catch(e)
        {
            res.status(500).json({error:"internal server error ",message:e});
        }
    },
    deleteContact:async(req,res)=>{
        try{
            const deletedContact = await Contact.findByIdAndDelete(req.params.id);
            if(!deletedContact)
            {
                res.status(404).json({error:"No Contact Found"})
            }
            res.status(200).json({message:"Contact SuccessFully deleted🌬",contactDeleted:deletedContact})

        }catch(e)
        {
            res.status(500).json({error:"internal server error ",message:e});

        }
    }
}

module.exports=contactController;