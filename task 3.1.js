const products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Shoes", price: 2000, category: "Fashion" },
  { id: 3, name: "Mobile", price: 30000, category: "Electronics" },
  { id: 4, name: "T-Shirt", price: 1000, category: "Fashion" },
  { id: 5, name: "Headphones", price: 2500, category: "Electronics" }
];

// create an array containing only product names
const productNames = products.map(p => p.name);
console.log("productNames:")
console.log(productNames.join(","));

//create a new array with 10% discount price for each product
const discountedProducts = products.map(p => ({
  ...p,
  price: p.price * 0.9
}));
console.log(discountedProducts);

//display only Electronics products
const electronicProducts = products.filter(p => p.category == "Electronics");
console.log("Electronics Products:");
electronicProducts.forEach(p => console.log(p.name));

//display products costing more than ₹5,000
const costlyproducts=products.filter((product)=>{
    return product.price>5000;
});
console.log(costlyproducts);

//calculate the total price of all products
const totalprice = products.reduce((sum,current)=>{
    return sum+current.price;
},0);
console.log("Total price :");
console.log(totalprice);

//find the most expensive product
const mostExpensive = products.reduce((max, p) =>
  p.price > max.price ? p : max
);
console.log("Most Expensive Product:");
console.log(`${mostExpensive.name} - ${mostExpensive.price}`);

//display names of Electronics products only
const electronicsNames = products
  .filter(p => p.category === "Electronics")
  .map(p => p.name);
console.log("Electronic products:"+electronicsNames);

//count the number of products in each category
const categoryCount = products.reduce((count, p) => {
  count[p.category] = (count[p.category] || 0) + 1;
  return count;
}, {});
console.log(categoryCount);