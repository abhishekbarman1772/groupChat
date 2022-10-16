    const loginDto = (data, token) =>{
        return { 
            user: {
                username: data.username,
                email: data.email,
                role: data.role
            },
            token
        }
    }



module.exports = {
    loginDto
};