module.exports = function(sequelize, DataTypes) {
    const Buyer = sequelize.define('Buyer', {
       seller_name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       seller_item: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       item_image: {
            type: DataTypes.BLOB,
            allowNull: false
       },
       item_price: {
           type: DataTypes.BOOLEAN,
           defaultValue: false
       },
       seller_rating: {
           type: DataTypes.DECIMAL(2),
           allowNull: true,
           defaultValue: null
       }
    })
};