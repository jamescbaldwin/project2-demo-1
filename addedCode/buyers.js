module.exports = function(sequelize, DataTypes) {
    const Buyer = sequelize.define('Buyer', {
       buyer_name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       buyer_budget: {
           type: DataTypes.INTEGER,
           allowNull: false,
       },
       purchased: {
           type: DataTypes.BOOLEAN,
           defaultValue: false
       },
       buyer_rating: {
           type: DataTypes.DECIMAL(2),
           allowNull: true,
           defaultValue: null
       }
    })
};