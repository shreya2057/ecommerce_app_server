import Data from "../model/data_model.js"

const get_data = async (req, res)=>{
    try{
        // Finding all data
        const allData = await Data.find();
        res.json({body: allData, status: 200});
    } catch(error){
        res.json({message: error.message, status: 400});
    }
    
};

const send_data = async (req, res)=>{
    try {
        const request = Data(req.body)
        // Finding single data
        const existingData = await Data.findOne({
            data: request.data
        });
        if(existingData == null){
            // Saves new instance
            const saveData = request.save(); 
            res.json({message: "Data created", status: 200});
        } else{
            res.json({message: "Data exists", status: 401});
        }
    } catch(error){
        res.json({message: error.message, status: 400});
    }
};

const update_data = async(req, res)=>{
    try{
        const request = Data(req.body);
        const existingData = await Data.findOne({data: "data1"})
        if(existingData!==null){
            // updateOne()-> Updating single data
            const updated_data = await Data.updateOne({data: request.data});
            res.json({message: "Data updated", status: 200});
        } else{
            res.json({message: "Data not found", status: 401});
        }
    } catch(error){
        res.json({message: error.message, status: 400});
    }   
};

export default {get_data, send_data, update_data};