//Filter Array for Products

//Filter By Category

function Product(){
    let products = [
        {
            "name": "Laptop",
            "category": "Electronics",
            "price": 1000,
            stock :4
        },
        {
            "name": "Shirt",
            "category": "Apparel",
            "price": 20,
            stock :0
              },
            
              {
                "name": "Coffe Maker",
            "category": "Appliances",
            "price": 100,
            stock :3
                  },
                  
                  {
                    "name": "Book",
            "category": "Stationery",
            "price": 15,
            stock :20
                      }
        ]

        var filteredArray = products.filter(function(product){
            return product.price >=100 && product.price<=1200;
            });
            console.log(filteredArray);

            var filteredArray1 = products.filter(function(product){
                return product.category=="Stationery";
                });
                console.log(filteredArray1);  
                
                
                var filteredArray2 = products.filter(function(product){
                    return product.stock<=0;
                    });
                    console.log(filteredArray2);               
            
        }

        export default Product;