const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product", // Name of the referenced model
        key: "id", // Key in the referenced model
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag", // Name of the referenced model
        key: "id", // Key in the referenced model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Product_tag",
  }
);

module.exports = ProductTag;
