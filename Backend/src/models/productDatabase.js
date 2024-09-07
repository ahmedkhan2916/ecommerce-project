import  mongoose,{ Schema } from "mongoose"

const ProductDetails=new Schema({

    company_name:{
        type:String,
        require:true,
    },

    product_name:{
        type:String,
        require:true,
    },

    price:{

        type:String,
        require:true,
        
    },

    product_details:{

        type:String,
        require:true,
    },

    product_image:{ 

        type:String,
        unique:true,

    }

},{ timestamps : true });

export const ProductD=mongoose.model("productdetail",ProductDetails);