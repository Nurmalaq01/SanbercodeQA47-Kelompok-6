// cypress/support/PageObject/ProductLocator.js
class ProductLocator {
    getProductLink() {
        return ':nth-child(2) > .product-item-info > .product-item-details > .product-item-name > .product-item-link';
    }
    getProduct() {
        return ':nth-child(4) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo';
    }
    getZoom() {
        return '.fotorama__active > .fotorama__img';
    }
}

export default new ProductLocator();