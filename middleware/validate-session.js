// const jwt = require('jsonwebtoken');
// const {UserModel} = require('../models');

// const validateJWT = async( req, res, next ) => {
//     if (req.method == 'OPTIONS') {
//         next();
//     } else if (
//         req.headers.authorization &&
//         req.headers.authorization.include(process.env.SECRET_KEY)
//         ) {
        
//             const {authorization} = req.headers;

//             const payload = authorization ? jwt.verify(
//                 authorization.includes(process.env.SECRET_KEY)
//                 ? authorization.split(' ')[1]
//                 : authorization, process.env.SECRET_KEY
//             )
//             : undefined;

//             if (payload) {
//                 let foundUser = await UserModel.findOne({
//                     where: {id: payload.id}
//                 })

//                 if (foundUser) {
//                     req.user = foundUser;
//                     next();
//                 } else {
//                     req.status(400).send({ message: 'Not Authorized' })
//                 }

//             } else {
//                     req.status(401).send({ message: 'Invalid token' });
//                 }
//     } else {
//         res.status(403).send({message: 'Forbidden'});
//     }
// };

// module.exports = validateJWT;