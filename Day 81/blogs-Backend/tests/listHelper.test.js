const listHelper = require('../utils/listHelper');

describe(
    'listHelper',()=>{
        test('dummy returns one',()=>{
            const blogs = [];
            const result = listHelper.dummy(blogs);
            expect(result).toBe(undefined);
        })
    }
)