const BASE_URL = "http://localhost:3000"

export const getUser = async () => {
    const response = await fetch(`${BASE_URL}/api/user`)
    const data = response.json()
    return data
}

// to fetch datas

export const addUser = async (formdata) => {
    try {
        const Options = {
            method: 'POST',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify(formdata)
        }
        const response = await fetch(`${BASE_URL}/api/user`, Options)
        const data = response.json
        return data;

    } catch (error) {
        console.log("can't adduser", error);
        return error;
    }
}

export const updateUser = async (userId, formdata) => {
    try {
        const options = {
            method: 'PUT',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify(formdata)
        }
    } catch (error) {
        console.log("can't updateUser");
        return error

    }
    const response = await fetch(`${BASE_URL}/api/user/${userId}`, options)
    const data = response.json()
    return data;
}

export const delUser = async (userId) => {
    try {
        const options = {
            method: 'DELETE',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify()
        }
    } catch (error) {
        console.log(" can't delete user ");
        return error

    }
    const response = await fetch(`${BASE_URL}/api/user/${userId}`, options)
    const data = response.json()
    return data;
}


