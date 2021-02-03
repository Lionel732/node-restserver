//  puerto.
port = process.env.PORT || 3000;

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Base de datoss
let urlDB;

if (process.env.NODE_ENV === 'dev') {
     urlDB = 'mongodb://localhost:27017/cafe';
 } else {
    urlDB = 'mongodb+srv://strider:sLpmRmieB5Umnb2K@cluster0.zmgsv.mongodb.net/cafe'
}

process.env.URLDB = urlDB;


