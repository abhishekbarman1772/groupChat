const createUserDto = (user, token) =>{
    return { 
        user: {
            username: user.username,
            email: user.email,
            role: user.role
        },
        token
    }
}

const updateUserDto = (user) =>{
    return {
        username: user.username,
        email: user.email,
        role: user.role,
    }
}


module.exports = {
    createUserDto,
    updateUserDto
};