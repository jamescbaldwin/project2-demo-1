module.exports = function(sequelize, DataTypes) {
    const Item = sequelize.define('Item', {
       item_name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       item_price: {
           type: DataTypes.INTEGER,
           allowNull: false,
       },
       seller_contact: {
           type: DataTypes.STRING,
           defaultValue: false
       },
       purchased: {
           type: DataTypes.BOOLEAN,
           allowNull: false,
           defaultValue: false
       },
    });
    Item.associate = function(models) {
      
        Item.belongsTo(models.Sellers, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Item;
};