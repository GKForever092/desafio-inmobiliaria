const propenventa = document.querySelector("#prop-en-venta")
const propalquiler = document.querySelector("#prop-en-alquiler")





const propventa1 = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://www.hogares.cl/wp-content/uploads/2018/06/2-Macul-52-1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5.000,
        smoke: false,
        pets: false
    }
]

const propventa2 = [
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://www.hogares.cl/wp-content/uploads/2018/06/2-Macul-52-1.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1.200,
        smoke: true,
        pets: true
    }
]

const propventa3 = [
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://www.hogares.cl/wp-content/uploads/2018/06/2-Macul-52-1.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4.500,
        smoke: false,
        pets: true
    }
]



const propalquiler1 = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://www.hogares.cl/wp-content/uploads/2019/08/proy4.jpg',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2.000,
        smoke: false,
        pets: true
    }
]

const propalquiler2 = [
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://www.hogares.cl/wp-content/uploads/2019/08/proy4.jpg',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2.500,
        smoke: true,
        pets: true
    }
]

const propalquiler3 = [
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://www.hogares.cl/wp-content/uploads/2019/08/proy4.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2.200,
        smoke: false,
        pets: false
    }
    
]



propenventa.innerHTML = `
    <div class="card-container" id="prop-en-venta">
        <img src=" ${propventa1.src} " alt="">
    </div>
`
