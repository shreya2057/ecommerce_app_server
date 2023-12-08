const validate_data = (req, res, next)=>{
    const request = req.body
    if(request.data == null){
        res.json({message: "All fields are required", status: 400});
    }

    next();
} 

export default validate_data;