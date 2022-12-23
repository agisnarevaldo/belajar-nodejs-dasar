// Syncronus

// const getUserSync = (id) => {
//     // let nama = '';
//     // if (id === 1) {
//     //     nama = 'Agisna';
//     // } else {
//     //     nama = 'Revaldo';
//     // }

//     // operator ternary
//     const nama = id === 1 ? 'Agisna' : 'Revaldo';
//     return {id: id, nama: nama};
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hello World!';
// console.log(halo);

// Asyncronus
const getUser = (id, callback) => {
    const time = id === 1 ? 2000 : 3000;
    setTimeout(() => {
        const nama = id === 1 ? 'Agisna' : 'Revaldo';
        callback({ id, nama });
    }, time);
};

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});

const halo = 'Hello World';
console.log(halo);