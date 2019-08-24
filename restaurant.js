
// region

// レストランクラス

class Restaurant {
    constructor(name) {
        this.name = name;
        this.menus = [];
        this.reserve = [];
    }
    hello() {
        console.log(`ようこそ${this.name}へ`)
    }
    addMenu(name, price) {
        this.menus.push({
            name: name,
            price: price
        })
    }
    reservation(name, numberCount) {
        
        this.reserve.push({
            name: name,
            numberCount: numberCount
        })
        console.log('顧客情報はこちらです')
        console.log(this.reserve)
    }
    getMenus() {
        console.log("メニューはこちらです")
        console.log(this.menus)
    }
    getCustomerList() {
    }
    getTotalSales() {
    }
}

const restaurant = new Restaurant('santos')
restaurant.hello();
restaurant.addMenu('ハンバーグ', 1000);
restaurant.addMenu(`カレー`, 300);
restaurant.reservation('オオクボ', 5);
restaurant.getMenus();
restaurant.getCustomerList();
restaurant.getTotalSales();

// endoregion

// region

// 顧客クラス

class Customer {
     constructor(restaurantName, customerName, customerCount) {
         this.restaurantName = restaurantName;
         this.customerName = customerName;
         this.customerCount = customerCount;
         this.menus = restaurant.menus;
         this.order = [];
         this.orderList = [];
     }
     postMenus(name, count) {
         
         for (var i = 0; i < this.menus.length; i ++) {
            if (this.menus[i].name === name) {
                this.order.push({
                    name: name,
                    price: this.menus[i].price,
                    count: count
                })
            }
         }
         console.log(this.order)
     }
     getTotalPrice() {
        var total = 0;
        for(var i = 0; i < this.order.length; i++){
            var totalPrice = this.order[i].count * this.order[i].price
            total += totalPrice
        }
        console.log(this.customerName + '様の合計金額はこちらです' + total + '円')
        console.log(this.orderList.length)
        this.orderList.push({
            name: this.customerName,
            total: total
        })
        console.log(this.orderList.length)
        console.log(this.orderList)
     }

}

const customer1 = new Customer('デニーズ', 'okubo', 5,)
const customer2 = new Customer('デニーズ', '大久保', 4)

customer1.postMenus('カレー', 1);
customer1.postMenus('ハンバーグ', 3);
customer1.getTotalPrice();
customer2.postMenus('カレー', 4);
customer2.getTotalPrice();

// endregion