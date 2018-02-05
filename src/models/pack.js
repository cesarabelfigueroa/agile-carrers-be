'use strict';
module.exports = (sequelize, DataTypes) => {
	var pack = sequelize.define('pack', {
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

	pack.associate = function(models) {
		pack.belongsToMany(models.reservation, {
			through: 'ReservationPack'
		});

		pack.belongsToMany(models.location, {
			through: 'PackLocation'
		});

		pack.hasMany(models.activity, {as: 'activities'});
	};
	return pack;
};