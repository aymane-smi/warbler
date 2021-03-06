function errorHandler(err, req, res, next){
    console.log(JSON.stringify(err.message));
    return res.status(err.status || 500).json({
        error: {
            message: err.message || 'Oooops something went wrong'
        }
    });
}
module.exports = errorHandler;