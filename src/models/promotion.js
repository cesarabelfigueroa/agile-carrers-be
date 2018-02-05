'use strict';
module.exports = (sequelize, DataTypes) => {
	var promotion = sequelize.define('promotion', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		price: DataTypes.DOUBLE,
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		}
	});

	promotion.associate = function(models) {
		promotion.belongsTo(models.pack);
	};
	return promotion;
};