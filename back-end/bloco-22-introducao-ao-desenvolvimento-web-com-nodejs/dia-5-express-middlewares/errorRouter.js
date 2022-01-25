function erroRota(err, _req,res, _next) {
    res.status(err.statusCode).json({ message: err.message });
};

module.exports = { erroRota };
