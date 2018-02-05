'use strict';
module.exports = (sequelize, DataTypes) => {
	var location = sequelize.define('location', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		image: DataTypes.STRING,
		address: DataTypes.STRING,
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

	location.associate = function(models) {
		location.belongsToMany(models.pack, {
			through: 'PackLocation'
		});
	};
	return location;
};