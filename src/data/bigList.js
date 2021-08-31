import faker from 'faker';
// import { FixedSizeList } from 'react-window';

// export const bigList = [...Array(5000)].map(()=> ({
//     name: faker.name.findName(),
//     email: faker.internet.email(),
//     avatar: faker.internet.avatar()
// }));

export const bigList = [...Array(5000)].map(()=> ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
}));