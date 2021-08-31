require('dotenv').config()


const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DBNAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING
    }
})
/* 
One to One

*/
const Profile = sequelize.define("Profile", {
    birthday: {
        type: DataTypes.DATE
    }
})

User.hasOne(Profile,{
    onDelete: "CASCADE"
});
Profile.belongsTo(User)
/* 
One to Many

*/
const Order = sequelize.define("Profile", {
    shipDate: {
        type: DataTypes.DATE
    }
})
User.hasMany(Order)
Order.belongsTo(User)


/* 
Many to Many

*/

;(async () => {
    await sequelize.sync({force: true});
})();

// ((async () =>{
//     try {
//         await sequelize.sync();
//         console.log("Connection has been established successfully")
//     } catch (error){
//         console.error("Unable to connect to the database", error)
//     }
// })());
