require('dotenv').config()

module.exports = {
    port: process.env.PORT || 8000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.jwtSecret || "academlo",
    databaseName: process.env.database,
    user: process.env.username,
    password: process.env.password,
    url: process.env.DOMAIN_HOST || "http://localhost:",
    urlData: process.env.DATABASE_URL
}