function Mahasiswa(nama,energi){
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat makan`
}

Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat main`
}

Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam*2;
    return `Halo ${this.nama}, Selamat tidur`
}

let umar = new Mahasiswa("Umar",10)