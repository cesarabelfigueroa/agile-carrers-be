'use strict';
module.exports = (sequelize, DataTypes) => {
	var user = sequelize.define('user', {
		email: {
			type: DataTypes.STRING,
			unique: true
		},
		image: DataTypes.STRING,
		password: DataTypes.STRING,
		name: DataTypes.STRING,
		lastname: DataTypes.STRING,
		type: DataTypes.STRING,
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

	user.associate = function(models) {
		user.hasMany(models.reservation, {as: 'reservations'});

		user.belongsToMany(models.trophy, {
			through: 'UserTrophy'
		});
	};
	return user;
};