const applyDotenv = dotenv => {
    dotenv.config()
    return {
        mongoUri : process.env.MONGO_URI,
        port : process.env.PORT,
        jwtSecret : process.env.JWT_SECERT,
        origin : process.env.ORIGIN
    }
}

export default applyDotenv
