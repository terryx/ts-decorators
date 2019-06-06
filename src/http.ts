import axios from 'axios'

function Get(url: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value
        descriptor.value = async function(...args: any[]) {
            const { data } = await axios.get(url)
            args.push(data)

            return fn.apply(this, args)
        }
    }
}

export default class MyApi {
    @Get("google.com")
    getGoogle(data?: any) {
        data.addons = 'More stuff here'
        return data
    }
}
