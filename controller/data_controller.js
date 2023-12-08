import Data from "../model/data_model.js"

const get_data = async (req, res)=>{
    try{
        // Finding all data
        const allData = await Data.find();
        res.json({body: allData, status: 200});
    } catch(error){
        res.json({messgae: error.messgae, status: 400});
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
            res.json({messgae: "Data created", status: 200});
        } else{
            res.json({messgae: "Data exists", status: 401});
        }
    } catch(error){
        res.json({messgae: error.messgae, status: 400});
    }
};

export default {get_data, send_data};