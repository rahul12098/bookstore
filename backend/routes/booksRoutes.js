const router = require("express").Router();
const bookModel = require("../models/bookModels");

//post request
router.post("/add", async (req,res) => {
    try{
    

    const newBook = new bookModel(req.body);   //data will be in the form of scehma which was created in models
  
    //now we will store it in data base
    await newBook.save()
    .then(() => {
        res.status(200).json({message: " Book added Successfully" }); //sending status to server when succesfully data stored in data base


    });

    }catch (error) {
        console.log(error)

    }
})

//get request from database
router.get("/getBooks", async(req,res) => {
    
    let books;
    try{
     books = await bookModel.find();
     res.status(200).json({books});
    }
    catch (error) {
        console.log(error);
    }
});

//getting books by id ( databse object id)

router.get("/getBooks/:id", async (req,res) =>{
    let book;
    const id = req.params.id; //getting id from url
    try {
        book = await bookModel.findById(id);
        res.status(200).json({book});
    }catch (error) {
        console.log(error);
    }
} );

//update books by id 
router.put("/updateBook/:id", async(req,res) => {
       const id = req.params.id;
       const {bookname,description,image,price} = req.body; //destructuring 
       try {
       book = await bookModel.updateByIdAndUpdate(id,{
            bookname,
            description,
            price
        });

        await book.save().then(() => res.json({message: "data updated successfully!"}));
       } catch ( error ) {
        console.log(error);
       }
});


//delete book by id 
router.delete(".deleteBook/:id", async(req,res) => {
    const id = req.params.id;
    try {
      await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({message: "data deleted successfully!"}));
    }
    catch ( error ) {
     console.log(error);
    }


})


module.exports = router;