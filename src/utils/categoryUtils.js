export const CATEGORY_DATA = {
    smartphones: {
        name: 'Celulares y Telefonía',
        description: 'Conectividad sin límites',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&h=1200&q=90',
    },
    laptops: {
        name: 'Computadoras y Notebooks',
        description: 'Rendimiento y portabilidad',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&h=600&q=90',
    },
    'home-decoration': {
        name: 'Decoración de Interiores',
        description: 'Detalles que inspiran',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&h=600&q=90',
    },
    'womens-dresses': {
        name: 'Vestidos y Moda Mujer',
        description: 'Moda y tendencia femenina',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&h=1200&q=90',
    },
    'womens-bags': {
        name: 'Carteras y Bolsos',
        description: 'Accesorios indispensables',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&h=600&q=90',
    },
    beauty: {
        name: 'Belleza y Cosmética',
        description: 'Cuidado y frescura premium',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&h=600&q=90',
    },
    furniture: {
        name: 'Muebles y Decoración',
        description: 'Diseño para tu espacio',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=1200&q=90',
    },
    'mens-shoes': {
        name: 'Calzado Masculino',
        description: 'Estilo y pisadas con actitud',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&h=600&q=90',
    },
    'mens-watches': {
        name: 'Relojes de Hombre',
        description: 'Elegancia para tu tiempo',
        image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1000&h=600&q=90',
    },
};

export const PREFERRED_ORDER = [
    'smartphones',
    'laptops',
    'home-decoration',
    'womens-dresses',
    'womens-bags',
    'beauty',
    'furniture',
    'mens-shoes',
    'mens-watches',
];

const FALLBACK_IMAGE =
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&h=600&q=90';

export function formatearNombrePorDefecto(slug, rawName) {
    const textoBase = rawName || slug || 'Categoría';
    const palabras = textoBase.split('-');

    const palabrasFormateadas = palabras.map((palabra) => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });

    return palabrasFormateadas.join(' ');
}

export function ordenarYCompletarCategorias(categoriasApi) {
    const seleccionadas = [];

    PREFERRED_ORDER.forEach((slugBuscado) => {
        const encontrada = categoriasApi.find((c) => {
            const slugActual = typeof c === 'object' ? c.slug : c;
            return slugActual === slugBuscado;
        });

        if (encontrada) {
            seleccionadas.push(encontrada);
        }
    });

    for (const c of categoriasApi) {
        const slugActual = typeof c === 'object' ? c.slug : c;
        if (seleccionadas.length < 9) {
            const yaLaAgregamos = PREFERRED_ORDER.includes(slugActual);
            if (!yaLaAgregamos) {
                seleccionadas.push(c);
            }
        }
    }

    return seleccionadas;
}

export async function buscarImagenDinamica(slug, indiceGrilla) {
    const esTarjetaGrande = indiceGrilla % 3 === 0;

    const fotoDeReserva = esTarjetaGrande
        ? 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=1200&q=90'
        : FALLBACK_IMAGE;

    try {
        const res = await fetch(`https://dummyjson.com/products/category/${slug}?limit=1`);
        const data = await res.json();

        const primerProducto = data.products?.[0];

        return primerProducto?.images?.[0] || primerProducto?.thumbnail || fotoDeReserva;
    } catch (err) {
        console.error('Uy, falló buscar la foto dinámica de ' + slug + ', usamos fallback', err);
        return fotoDeReserva;
    }
}

export async function procesarCategoria(cat, index) {
    const esObjeto = typeof cat === 'object' && cat !== null;
    const slug = esObjeto ? cat.slug : cat;
    const rawName = esObjeto ? cat.name : cat;

    const infoLocal = CATEGORY_DATA[slug];
    if (infoLocal) {
        return {
            slug: slug,
            name: infoLocal.name,
            description: infoLocal.description,
            image: infoLocal.image,
        };
    }

    const nombreFinal = formatearNombrePorDefecto(slug, rawName);
    const descripcionFinal = 'Explorar productos';
    const fotoFinal = await buscarImagenDinamica(slug, index);

    return {
        slug: slug,
        name: nombreFinal,
        description: descripcionFinal,
        image: fotoFinal,
    };
}

export function formatCategory(cat = '') {
    return cat.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}
