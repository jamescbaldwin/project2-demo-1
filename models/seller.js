module.exports = function (sequelize, DataTypes) {
    const Sellers = sequelize.define('Sellers', {
  
      seller_name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
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
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
  
   
   });
      Sellers.associate = function (models) {
      
        Sellers.hasMany(models.Item, {
          onDelete: "cascade"
        });
      }
  
    return Sellers;
  
  };