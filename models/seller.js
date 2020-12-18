module.exports = function (sequelize, DataTypes) {
    const Sellers = sequelize.define('Sellers', {
  
      seller_name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true,
       // validate: {
         // is: ["^[a-z]+$", 'i'],
        // }
      },
  
      sellers_address: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
  
      sellers_email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
        // validate: {
        //   isEmail: true
        // }
      },
  
   
   });
      Sellers.associate = function (models) {
      
        Sellers.hasMany(models.Item, {
          onDelete: "cascade"
        });
      }
  
    return Sellers;
  
  };