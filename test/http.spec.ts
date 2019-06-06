import MyApi from '../src/http'

describe('MyAPI', () => {
    it('should able to get google api', async () => {
        const api = new MyApi()
        const result = await api.getGoogle()
        
        expect(result.description).toBe('Your data is mocked!')
        expect(result.addons).toBe('More stuff here')
    })
})