const products = [
    {
        id: '1',
        name: 'Samsung S23',
        price: 450000,
        category: 'smartphone',
        img:'https://http2.mlstatic.com/D_NQ_NP_654151-MLA53448775145_012023-O.webp',
        stock: 50,
        description: 'Samsung Galaxy S23'
        
    },

    {
        id: '2',
        name: 'Iphone 14 Pro',
        price: 500000,
        category: 'smartphone',
        img:'https://www.macstation.com.ar/img/productos/3119-2.jpg',
        stock: 50,
        description: 'Iphone 14 Pro Max 256gb'
        
    },

    {
        id: '3',
        name: 'Motorola Edge 40',
        price: 350000,
        category: 'smartphone',
        img:'https://i.blogs.es/45176e/motorola-edge-40-1/450_1000.jpeg',
        stock: 50,
        description: 'Motorola Edge 40'
        
    },

    {
        id: '4',
        name: 'Macbook Pro M2',
        price: 1500000,
        category: 'notebook',
        img:'https://istyle.mk/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/macbook_pro_13_in_space_gray_pdp_image_position-2__wwen_7_1_2.jpg',
        stock: 20,
        description: 'Macbook Pro M2 13.3 pulgadas '
        
    },

    {
        id: '5',
        name: 'Lenovo Legion 5',
        price: 900000,
        category: 'notebook',
        img:'https://http2.mlstatic.com/D_NQ_NP_724185-MLU70455827254_072023-O.webp',
        stock: 20,
        description: 'Lenovo Legion 5 Pro',
    },
    {
        id: '6',
        name: 'Asus TUF F15',
        price: 1300000,
        category: 'notebook',
        img:'https://http2.mlstatic.com/D_NQ_NP_665099-MLA71255616924_082023-O.webp',
        stock: 15,
        description: 'Asus TUF F15 15.6 pulgadas',
    },

    {
        id: '7',
        name: 'Mouse HyperX Pulsefire',
        price: 25000,
        category: 'gamming',
        img:'https://gorilagames.com/img/Public/1019-producto-mouse-pulsefire-fps-pro-7-4278.jpg',
        stock: 50,
        description: 'Mouse HyperX Pulsefire RGB'
        
    },

    {
        id: '8',
        name: 'Teclado HyperX Alloy',
        price: 65000,
        category: 'gamming',
        img:'https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-5848376.jpg',
        stock: 50,
        description: 'Teclado HyperX Alloy Fps Pro'
        
    },

    {
        id: '9',
        name: 'Auricular HyperX Cloud Stinger',
        price: 35000,
        category: 'gamming',
        img:'https://www.infinitonline.com.ar/images/00000000000014020908000004102-s26098.jpg',
        stock: 50,
        description: 'Auricular HyperX Cloud Stinger 7.1 '
        
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, )
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, )
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, )
    })
}