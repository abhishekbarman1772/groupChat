const createGroupDto = (group) =>{
    return { 
        id: group._id,
        name: group.name,
        users: group.users,
    }
}

const updateGroupDto = (group) =>{
    return {
        id: group._id,
        name: group.name,
        users: group.users,
    }
}

const groupsDto = (groups) =>{
    return groups.map(group=>{
        return {
            id: group._id,
            name: group.name,
            users: group.users.map(user=>{
                return user
            })
        }
    })
}

module.exports = {
    createGroupDto,
    updateGroupDto,
    groupsDto,
};