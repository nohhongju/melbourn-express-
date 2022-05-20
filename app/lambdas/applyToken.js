const applyToken = headers => {
    if (headers && headers.authorization) {
        var parted = headers
            .authorization
            .split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }

}

export default applyToken
