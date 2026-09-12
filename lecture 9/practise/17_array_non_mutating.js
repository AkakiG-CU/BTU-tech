// Methods that don't mutate the original array
const base = [1, 2, 3, 4, 5];
console.log('concat:', [1, 2].concat([3, 4]));
console.log('slice(1,3):', base.slice(1, 3));
console.log('map x*2:', base.map((x) => x * 2));
console.log('filter evens:', base.filter((x) => x % 2 === 0));
console.log('flat:', [1, [2, 3]].flat());
console.log('join:",":', [1, 2, 3].join(','));
console.log('includes 3:', base.includes(3));
console.log('indexOf 4:', base.indexOf(4));
console.log('find >3:', base.find((x) => x > 3));
console.log('findIndex >3:', base.findIndex((x) => x > 3));
console.log('some >4:', base.some((x) => x > 4));
console.log('every <=5:', base.every((x) => x <= 5));
