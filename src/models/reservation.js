'use strict';
module.exports = (sequelize, DataTypes) => {
	var reservation = sequelize.define('reservation', {
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

	reservation.associate = function(models) {
		reservation.belongsToMany(models.pack, {
			through: 'ReservationPack'
		});
	};
	return reservation;
};