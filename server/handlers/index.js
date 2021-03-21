module.exports.errors = (err, req, res, next) =>{
    res.status(err.status || 500).json({
        err: err.message || 'Something went wrong'
    });
};