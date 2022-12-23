function cetakNama(nama) {
    return `Hello nama saya ${nama}`;
}

const person = {
    nama: 'Agisna',
    umur: 20,
    showPerson() {
        return `Halo, nama saya ${this.nama}, umur ${this.umur} tahun.`;
    },
};

const PI = 3.14;

class Orang {
    constructor() {
        console.log('Object Orang telah dibuat');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.person = person;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     person: person,
//     PI: PI,
//     Orang: Orang,
// }

module.exports = {cetakNama, person, PI, Orang};