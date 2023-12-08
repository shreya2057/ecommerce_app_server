import Data from "../model/data_model.js"

const get_data = (req, res)=>{
    res.send("Hello World from server");
}

const send_data = async (req, res)=>{
    try {
        const request = Data(req.body)
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
}

export default {get_data, send_data};