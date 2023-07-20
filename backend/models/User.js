module.exports = (sequleize, DataTypes) => {
    const user_model = sequleize.define("User", {
        firstname: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(255),
            allowNull:false
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        tableName: "users",
        timestamps: false
    })

    return user_model
}