import mongoose from "mongoose";

// extract /destructure the schema class
import {Schema} from "mongoose";


//Creating our Schema which defines our documents in our books collection

/*

title: A required string.
author: A required string.
publicationYear: A number.
genres: An array of strings.
inStock: A boolean with a default value of true.

*/
const  bookSchema =new Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    publicationYear:Number,
    genres:[String],
    inStock :{
        type:Boolean,
        default:true
    }

})

//Use this schema to generate the model, which we use to interact with the database
const Book = mongoose.model("Book",bookSchema);

//make this model avilable throughout our application
export default Book;

