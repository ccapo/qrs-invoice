'use strict';
module.exports = (sequelize, DataTypes) => {
  const InvoiceItem = sequelize.define('InvoiceItem', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      defaultValue: 0.0
    }
  }, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    version: true
  });
  InvoiceItem.associate = models => {
    InvoiceItem.hasMany(models.Item);
    InvoiceItem.hasMany(models.Invoice);
  };
  return InvoiceItem;
};
