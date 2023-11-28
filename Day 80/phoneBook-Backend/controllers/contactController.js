//get contact model to make changes to contact
const Contact = require('../models/contact');
const contactControler={
    createContact: async(req,res)=>{
        try{
            const newContact = new Contact(req.body);
            const savedContact = await newContact.save();
            res.status(201).json(savedContact);
        }catch(e)
        {
            console.log(e);
            res.status(500).json({error:"Internal server Error",message:e});
        }
    },
    getAllContacts: async(req,res)=>{
        try{
            const contacts = await Contact.find();
            res.status(200).json(contacts);

        }catch(e){
            console.log(e);
            res.status(500).json({error:"internal sever Error",message:e})
        }
    },
    getContactById : async(req,res)=>{
        try{
            const contactId = req.params.id;
            const contact = await Contact.findById(contactId);
            if(!contact)
            {
                return res.status(404).json({message:"No Contacts Found"})
            }
            res.status(200).json(contact);
        }catch(e){
            console.log(e);
            res.status(500).json({error:"Internal Server Error",message:e});
        }
    },
    updateContact : async(req,res)=>{
        try{
            const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
            if(!updatedContact)
            {
                return res.status(404).json({error:"No Contacts Found!"})
            }
            res.status(200).json(updatedContact);
        }catch(e)
        {
            console.log(e);
            res.status(500).json({error:"Internal Server Error",message:e});
        }
    },
    deleteContact: async(req,res)=>{
        try{ 
            const deletedContact = await Contact.findByIdAndDelete(req.params.id);
            if(!deletedContact)
            {
                return res.status(404).json({error:"No Contacts Found!"});
            }   
            res.status(204).json({message:"Contact Deleted",})
        }catch(e){
            console.log(e);
            res.status(500).json({error:"Internal Server Error",message:e});
        }
    }
}

module.exports = contactControler;