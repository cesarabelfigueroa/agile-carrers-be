'use strict';
module.exports = (sequelize, DataTypes) => {
	var trophy = sequelize.define('trophy', {
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

	trophy.associate = function(models) {
		trophy.belongsToMany(models.user, {
			through: 'UserTrophy'
		});
	};
	return trophy;
};