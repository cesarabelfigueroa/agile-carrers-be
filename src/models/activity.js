'use strict';

module.exports = (sequelize, DataTypes) => {
	var activity = sequelize.define('activity', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		image: DataTypes.STRING,
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
	return activity;
};