const products = [
    {
        id: 1,
        name: "Gà nướng Buôn Đôn",
        image: "asset/img/anNgay/gaNuongBuonDon.jpg",
        description: "Gà thả vườn nướng thơm lừng, da vàng giòn, thịt ngọt chắc.",
        category: "anNgay",
        categoryName: "Món ăn ngay",
        price: 280000
    },
    {
        id: 2,
        name: "Lẩu rau rừng cá lăng",
        image: "asset/img/anNgay/lauRauRungCaLang.jpg",
        description: "Cá lăng kết hợp rau rừng và nước lẩu đậm đà.",
        category: "anNgay",
        categoryName: "Món ăn ngay",
        price: 250000
    },
    {
        id: 3,
        name: "Cơm lam Tây Nguyên",
        image: "asset/img/anNgay/comLamTayNguyen.jpg",
        description: "Gạo nếp nướng trong ống tre thơm ngon, dẻo mềm.",
        category: "anNgay",
        categoryName: "Món ăn ngay",
        price: 140000
    },
    {
        id: 4,
        name: "Gỏi lá Kon Tum",
        image: "asset/img/anNgay/goiLaKonTum.webp",
        description: "Nhiều loại lá rừng ăn cùng thịt, tôm và nước chấm đặc biệt.",
        category: "anNgay",
        categoryName: "Món ăn ngay",
        price: 180000
    },
    {
        id: 5,
        name: "Rượu cần Tây Nguyên",
        image: "asset/img/dongHop/ruouCan.jpg",
        description: "Thức uống truyền thống mang đậm bản sắc Tây Nguyên.",
        category: "dongHop",
        categoryName: "Sản phẩm đóng gói",
        price: 690000
    },
    {
        id: 6,
        name: "Ca Cao nguyên chất",
        image: "asset/img/dongHop/caCaoNguyenChat.jpg",
        description: "Bột cacao nguyên chất thơm ngon và đậm vị.",
        category: "dongHop",
        categoryName: "Sản phẩm đóng gói",
        price: 200000
    },
    {
        id: 7,
        name: "Hạt Kơ-nia",
        image: "asset/img/dongHop/hatKoNia.jpg",
        description: "Hạt Kơ-nia rang thơm, vị bùi béo tự nhiên.",
        category: "dongHop",
        categoryName: "Sản phẩm đóng gói",
        price: 180000
    },
    {
        id: 8,
        name: "Hạt điều rang muối",
        image: "asset/img/dongHop/hatDieuRangMuoi.jpg",
        description: "Hạt điều giòn, béo bùi hòa cùng vị mặn nhẹ.",
        category: "dongHop",
        categoryName: "Sản phẩm đóng gói",
        price: 180000
    },
    {
        id: 9,
        name: "Hạt Mắc Ca",
        image: "asset/img/dongHop/hatMacCa.jpg",
        description: "Hạt mắc ca thơm, giòn và béo tự nhiên.",
        category: "dongHop",
        categoryName: "Sản phẩm đóng gói",
        price: 180000
    }
];

function renderProductCard(product) {
    return `
        <article class="product-card">
            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <button class="favorite" type="button">
                    <i class="bx bx-heart"></i>
                </button>
            </div>

            <div class="product-info">
                <span class="product-category">
                    ${product.categoryName}
                </span>

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="product-bottom">
                    <span class="price">
                        ${product.price.toLocaleString("vi-VN")}đ
                    </span>

                    <button
                        class="quick-buy"
                        type="button"
                        onclick="addToCart(${product.id})"
                    >
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </article>
    `;
}
function renderProducts(productList) {
    const productContainer = document.getElementById("product-list");

    productContainer.innerHTML = "";

    productList.forEach(function(product) {
        productContainer.innerHTML += renderProductCard(product);
    });
}

// Tìm kiếm sản phẩm
const searchForm = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-box input");

searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    const result = products.filter(function(product) {

        return product.name
            .toLowerCase()
            .includes(keyword);

    });

    renderProducts(result);
});