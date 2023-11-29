const {reverse,average} =require("../utils/forTest.js");
test('reverse of abc',()=>{
    const result = reverse('abc');
    expect(result).toBe('cba');
});

test('reverse of a',()=>{
    const result = reverse('a');
    expect(result).toBe('a');
});

test('reverse of react',()=>{
    const result = reverse('react');
    expect(result).toBe('tcaer');
})
test('palindrome of react', () => {
    const result = reverse('react')
  
    expect(result).not.toBe('tkaer')
  })