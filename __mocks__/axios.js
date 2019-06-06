const axios = require('axios')

axios.get = jest.fn(
    () =>
        new Promise(resolve =>
            resolve({
                data: {
                    id: Math.random(10),
                    description: 'Your data is mocked!',
                },
            }),
        ),
)

module.exports = axios