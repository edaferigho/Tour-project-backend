const Tour = require('./tourModel');



exports.getAll = async(req,res) => {
    try {
        const tours = await Tour.find({})
        if (tours) {
           res.status(200).json(tours)
        }
        else {
            throw new Error('Data missing!')
        }
    }
    catch (error) {
        console.log(error)
    }
}