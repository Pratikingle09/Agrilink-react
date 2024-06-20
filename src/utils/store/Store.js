const sampleProducts = [
  {
    id: 1,
    product_name: "Product 1",
    product_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec lectus eu urna tincidunt aliquam at nec nunc. Proin in ipsum non odio fringilla tristique.",
    product_image:
      "https://i.shgcdn.com/7ba3793a-329d-444d-82a1-239953d48285/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    price: 100,
  },
  {
    id: 2,
    product_name: "Product 2",
    product_description:
      "Phasellus eget justo ut dolor malesuada rutrum. Morbi consectetur posuere velit, quis aliquet ex faucibus a. Duis porttitor felis ac nibh varius, non vestibulum odio feugiat.",
    product_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73RBWXqmLzFlmV0h0srW5eSECNayn0XFYIQ&s",
    price: 200,
  },
  {
    id: 3,
    product_name: "Product 3",
    product_description:
      "Fusce eu libero eu leo tincidunt mattis eget vel metus. Suspendisse potenti. Nullam ac massa nec elit volutpat consectetur vel sit amet justo.",
    product_image:
      "https://images-cdn.ubuy.co.in/655b91d4b04a7552e07b3810-dr-earth-organic-5-tomato-vegetable.jpg",
    price: 300,
  },
  {
    id: 4,
    product_name: "Product 4",
    product_description:
      "Integer sodales scelerisque velit. Etiam interdum hendrerit augue vel efficitur. Mauris fringilla ex vel libero tincidunt, eget suscipit lectus lacinia.",
    product_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2avOCZJ2fnY8ChbHjK4fPiF-poXiXSMk3A&s",
    price: 150,
  },
  {
    id: 5,
    product_name: "Product 5",
    product_description:
      "Donec faucibus sapien sed nisl pretium, in tincidunt turpis placerat. Integer ut sapien id libero varius lobortis in vitae elit.",
    product_image:
      "https://m.media-amazon.com/images/I/612PHxc4lrL._AC_UF1000,1000_QL80_.jpg",
    price: 250,
  },
  {
    id: 6,
    product_name: "Product 6",
    product_description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non urna in est bibendum volutpat at sit amet justo.",
    product_image: "https://m.media-amazon.com/images/I/81xXV4DcpCS.jpg",
    price: 350,
  },
  {
    id: 7,
    product_name: "Product 7",
    product_description:
      "Suspendisse cursus lacus sit amet lacus malesuada blandit. Proin aliquet ante sed metus luctus, vitae ultrices mi tincidunt.",
    product_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSYxpazJy_tx_lqeNw03ChiWoU5tMDEksBQ&s",
    price: 120,
  },
  {
    id: 8,
    product_name: "Product 8",
    product_description:
      "Vestibulum euismod tellus id tellus tincidunt convallis. Duis auctor metus sed tortor pellentesque, ut placerat odio rutrum.",
    product_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmuJyN8DbARhhoHI9eokA1vf9DQjAWNS93w&s",
    price: 220,
  },
  {
    id: 9,
    product_name: "Product 9",
    product_description:
      "Etiam ut lacus nec arcu lacinia viverra. In ac urna risus. Nullam vulputate, metus ut rhoncus venenatis, lectus tellus lacinia eros.",
    product_image:
      "https://m.media-amazon.com/images/I/718cMdWdk0L._AC_UF1000,1000_QL80_.jpg",
    price: 320,
  },
  {
    id: 10,
    product_name: "Product 10",
    product_description:
      "Mauris tincidunt lacus vitae neque varius, id consequat neque vehicula. Donec blandit purus eget ante congue, id mattis nunc efficitur.",
    product_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGyEnp6T6sXtwsWp5i8_5f0WqSu-9gQGU6Q&s",
    price: 180,
  },
  {
    id: 11,
    product_name: "Product 11",
    product_description:
      "Curabitur ac enim ultricies, ullamcorper purus at, bibendum dui. Vivamus euismod orci eget turpis commodo, sed vestibulum lectus congue.",
    product_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpPIDtZRj1I5eVcLOasf2W8eka7G6BmajNg&s",
    price: 280,
  },
  {
    id: 12,
    product_name: "Product 12",
    product_description:
      "In hac habitasse platea dictumst. Fusce nec libero lectus. Morbi auctor enim sed justo sodales, nec placerat nisi fringilla.",
    product_image:
      "https://5.imimg.com/data5/SELLER/Default/2021/1/YT/ML/CJ/21607742/vegetable-foliar-fertilizer-500x500.png",
    price: 380,
  },
  {
    id: 13,
    product_name: "Product 13",
    product_description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ac justo at ex lacinia congue.",
    product_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwoua4bje0tbLnXQ275tLp-uWBeUWCoMvCw&s",
    price: 130,
  },
  {
    id: 14,
    product_name: "Product 14",
    product_description:
      "Vivamus eleifend dui in sapien placerat, id vestibulum tortor pharetra. Sed vulputate augue vel lacus ultrices ultricies.",
    product_image:
      "https://m.media-amazon.com/images/I/81jxn5Q64wL._AC_UF1000,1000_QL80_.jpg",
    price: 230,
  },
  {
    id: 15,
    product_name: "Product 15",
    product_description:
      "Duis vitae turpis nec erat posuere laoreet. Donec feugiat ligula nec enim vestibulum, sed ultricies felis fermentum.",
    product_image:
      "https://gardenerspath.com/wp-content/uploads/2022/04/Vigoro-Tomato-and-Vegetable-Garden-Fertilizer.jpg",
    price: 330,
  },
  {
    id: 16,
    product_name: "Product 16",
    product_description:
      "Morbi lacinia nulla at pharetra bibendum. Curabitur dignissim quam quis nunc mattis, id sagittis odio fringilla.",
    product_image:
      "https://www.bombaygreens.com/cdn/shop/files/DAP_veggiesherbs_01_db4214ba-485d-45ea-a6c4-27f3a2c08119.jpg?v=1713867766",
    price: 140,
  },
  {
    id: 17,
    product_name: "Product 17",
    product_description:
      "Vestibulum ultrices leo eget maximus. Aliquam vel nulla eu lacus interdum luctus nec nec odio.",
    product_image:
      "https://m.media-amazon.com/images/I/61BfUPRiNYL._AC_UF1000,1000_QL80_.jpg",
    price: 240,
  },
  {
    id: 18,
    product_name: "Product 18",
    product_description:
      "Sed ullamcorper lectus ut enim scelerisque vulputate. Nullam vitae lorem quis risus consectetur sodales nec in est.",
    product_image: "https://plantic.in/image/veggied3.jpg",
    price: 350,
  },
  {
    id: 19,
    product_name: "Product 19",
    product_description:
      "Morbi lacinia nulla at pharetra bibendum. Curabitur dignissim quam quis nunc mattis, id sagittis odio fringilla.",
    product_image:
      "https://www.goinggreens.in/cdn/shop/products/GoldenWhitePamphletBrochureBestSellerCosmeticProductInstagramPost_1_e2c3a0ca-f651-4702-b033-c60f7334b3c2.png?v=1677069728",
    price: 160,
  },
  {
    id: 20,
    product_name: "Product 20",
    product_description:
      "Morbi lacinia nulla at pharetra bibendum. Curabitur dignissim quam quis nunc mattis, id sagittis odio fringilla.",

    product_image:
      "https://m.media-amazon.com/images/I/810B+mYb71L._AC_UF1000,1000_QL80_.jpg",
    price: 260,
  },
];

export default sampleProducts;
