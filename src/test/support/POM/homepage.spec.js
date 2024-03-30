class Homepage {
    constructor(wrapper) {
        this.wrapper = wrapper;
        this.page = wrapper.page;
        this.products = "//a[@class='hrefch']";
        this.cart = "//a[text()='Add to cart']";
    }

    async findtheproduct(product_name) {
        await this.wrapper.waitForSelector(this.products);
        const prdct = await this.wrapper.page.locator(this.products).allInnerTexts();
        console.log(prdct);

        for (const product of prdct) {
            if (product === product_name) {
                console.log("Found the product", product);
                await this.wrapper.page.locator(`//a[text()='${product}']`).click();
                break;
            }
        }
        console.log("Out of For loop");
    }

    async addtocart() {
        console.log("AddtoCart")
        await this.wrapper.click(this.cart)
        }
}

module.exports = { Homepage };
