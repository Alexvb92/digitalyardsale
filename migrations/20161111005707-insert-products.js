'use strict';
var product = require('../models')['products']
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return product.bulkCreate(
      [
        {productname: "Pearl Drums", price: "550", location: "Cary, NC", departmentname: "Music", imageurl: "http://pearldrum.com/common/assets/pdf/catalog/2016-price-list.jpg"},
        {productname: "Iron Gym Pull Up Bar", price: "29.99", location: "San Francisco, CA", departmentname: "Athletics", imageurl: "http://03526f9.netsolhost.com/wp-content/uploads/2011/11/irongym.jpg"},
        {productname: "evga sc-17", price: "2700", location: "Chapel Hill, NC", departmentname: "Technology", imageurl: "http://www.ozone3d.net/public/jegx/201601/evga_sc17_gaming_laptop_01.jpg"},
        {productname: "Ps4 Pro", price: "399", location: "Albany, NY", departmentname: "Gaming", imageurl: "https://media.playstation.com/is/image/SCEA/playstation-4-pro-vertical-product-shot-01-us-07sep16?$TwoColumn_Image$"},
        {productname: "Superman Figure", price: "299", location: "Efland, NC", departmentname: "Toys/Figures", imageurl: "http://img.amiami.jp/images/product/review/132/FIG-KAI-5621_01.jpg"},
        {productname: "Yahmaha Revstar", price: "499", location: "Baltimore, MD", departmentname: "Music", imageurl: "http://uk.yamaha.com/en/news_events/musical_instruments/new_electric_guitar_series_revstar/images/info1512150101_dl.jpg"},
        {productname: "Casio PX-350 Black Digital Piano Bundle", price: "549", location: "Raleigh, NC", departmentname: "Music", imageurl: "https://s-media-cache-ak0.pinimg.com/236x/03/06/d3/0306d340b835bbc1cfe50d404af1a26c.jpg"},
        {productname: "Metal Gear Solid V", price: "39", location: "Chapel Hill, NC", departmentname: "Gaming", imageurl: "https://farm1.staticflickr.com/556/19487626499_9f2e33fd01_o.png"},
        {productname: "Fire Emblem Fates", price: "27", location: "Durham, NC", departmentname: "Gaming", imageurl: "http://www.nintendowire.com/wp-content/uploads/2016/06/FireEmblemFates-BirthrightConquest-Boxes.png"},
        {productname: "Fifa 17", price: "17", location: "Nottingham, MD", departmentname: "Gaming", imageurl: "http://gearnuke.com/wp-content/uploads/2016/06/fifa-17-box-art.jpg"},
        {productname: "20lb Dumbells", price: "10", location: "Austin, TX", departmentname: "Athletics", imageurl: "http://www.360fitnesssuperstore.com/images/product-images/cross-training/cast-iron-hex-dumbbells.jpg"},
        {productname: "Jump Rope", price: "6", location: "Orlando, FL", departmentname: "Athletics", imageurl: "http://pure2improve.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/u/jumprope-medium.png"},
        {productname: "Blue Snowball Mic", price: "24", location: "Raliegh, NC", departmentname: "Technology", imageurl: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/f44c1b67-f26c-4fa6-8ce8-141a2bf70cf0.jpg._CB293101985__SR285,285_.jpg"},
        {productname: "Beats by Dre(blue)", price: "31", location: "Burbank, CA", departmentname: "Technology", imageurl: "https://images-na.ssl-images-amazon.com/images/G/01/aplus/detail-page/B00F5OOSHW_1._CB341024636_.jpg"},
        {productname: "Gi Joe", price: "4", location: "Durham, NC", departmentname: "Toys", imageurl: "http://generalsjoes.com/wp-content/gallery/gijoe-retaliation-wave-3-pre-order-gallery/11-g-i-joe-3-75-movie-figure-ultimate-flint-a2681.jpg"},
        {productname: "Saitama Figure", price: "122", location: "Watertown, NY", departmentname: "Toys", imageurl: "https://d3ieicw58ybon5.cloudfront.net/ex/300.300/97.320.316.316/shop/product/a84b57c08f164ab29ac1ef21e8064a8a.jpg"},
        {productname: "SwordFish II", price: "789", location: "Las Vegas, NV", departmentname: "Toys", imageurl: "http://i50.photobucket.com/albums/f303/Biskup0/Swordfish%20II/Swordfish06.jpg"},
        {productname: "Crock Pot", price: "16", location: "Greensboro, NC", departmentname: "Cooking", imageurl: "http://www.seriouseats.com/images/20091015crockpot.jpg"},
        {productname: "George Foreman Grill", price: "34", location: "Richmond, VA", departmentname: "Cooking", imageurl: "http://cdn.spectrumbrands.com/~/media/HobbsUS/George%20Foreman/Images/Product/Classic%20Plate/GR2144Pfeature.ashx?w=1000&h=1000&bc=white"},
        {productname: "Blender", price: "59", location: "Atlanta, GA", departmentname: "Cooking", imageurl: "http://static4.consumerreportscdn.org/content/dam/cro/news_articles/appliances/CR-BG-Blender-Conventional-Oster.jpg"},
        {productname: "Skullduggery Pleasant Box Set", price: "52", location: "Salisbury, NY", departmentname: "Books", imageurl: "https://images-na.ssl-images-amazon.com/images/I/51jBRyGxVwL._SX258_BO1,204,203,200_.jpg"},
        {productname: "A Darker Shade of Magic ", price: "7", location: "Virginia Beach, VA", departmentname: "Books", imageurl: "http://cdn.collider.com/wp-content/uploads/2016/02/a-darker-shade-of-magic-ve-schwab-book-cover.jpg"},
        {productname: "Ms Marvel", price: "18", location: "Belcamp, MD", departmentname: "Books", imageurl: "https://images-na.ssl-images-amazon.com/images/I/51LGrM5dxoL._SX321_BO1,204,203,200_.jpg"},
        {productname: "Black Curtains", price: "11", location: "Cleveland, OH", departmentname: "Home", imageurl: "http://www.homextextiles.com/wp-content/uploads/2015/07/black-curtains-4.jpg"},
        {productname: "Computer Desk", price: "23", location: "Durham, NC", departmentname: "Home", imageurl: "http://www.interiordesigndestin.com/wp-content/uploads/2015/06/computer-desk-4.jpg"},
        {productname: "Water Hose", price: "13", location: "Richmond, VA", departmentname: "Yard/Outdoor", imageurl: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Garden_hose.jpg"},
        {productname: "Bird Bath", price: "27", location: "San Francisco, CA", departmentname: "Yard/Outdoor", imageurl: "http://www.massarelli.com/sites/default/files/products/9065.jpg"},
        {productname: "Weather Tech Floor Mats", price: "46", location: "Durham, NC", departmentname: "Automotive", imageurl: "http://assets.weathertech.com/assets/1/19/713x535/444691_444692.jpg"},
        {productname: "Spare Tire", price: "80", location: "Ashville, NC", departmentname: "Automotive", imageurl: "https://cparente.files.wordpress.com/2011/09/dscn1440.jpg"},
        {productname: "Brake Pads", price: "17", location: "Goldsboro, NC", departmentname: "Automotive", imageurl: "http://www.cartuningcentral.com/wp-content/uploads/2007/09/brake-pads.jpg"},
        {productname: "Assassins' Creed Hoodie", price: "72", location: "Short Pump, NC", departmentname: "Clothing", imageurl: "https://s-media-cache-ak0.pinimg.com/originals/a7/a8/f7/a7a8f7fce8b9507f422fe3de61f7a83a.jpg"},
        {productname: "Reaper Cloak", price: "10", location: "Aberdeen. MD", departmentname: "Clothing", imageurl: "http://g02.a.alicdn.com/kf/HTB139WqNXXXXXbeXFXXq6xXFXXXp/2016-New-Arrival-Halloween-Props-font-b-Grim-b-font-font-b-Reaper-b-font-font.jpg"},
        {productname: "Punisher T-Shirt", price: "15", location: "Raleigh, NC", departmentname: "Clothing", imageurl: "http://g01.a.alicdn.com/kf/HTB1XxLBJpXXXXXjXXXXq6xXFXXX6/Cool-Style-Skull-T-font-b-Shirt-b-font-The-font-b-Punisher-b-font-white.jpg"},
        {productname: "$#*! I'm on Master T-Shirt", price: "20", location: "Chapel Hill, NC", departmentname: "Clothing", imageurl: "https://s-media-cache-ak0.pinimg.com/236x/33/19/8f/33198f39e806e8dd1958d1788932133f.jpg"},
        {productname: "Dresser", price: "127", location: "Eastern Shore, VA", departmentname: "Custom Makes", imageurl: "https://img0.etsystatic.com/103/0/5486590/il_340x270.836635010_gy67.jpg"},
        {productname: "Bed Frame", price: "37", location: "Salisbury, MD", departmentname: "Custom Makes", imageurl: "http://www.decorlove.com/ideas/photos/pi560x520/6/custom-made-king-size-bed-frame-with-storage-and-bench-on-foot-board.jpg"},
        {productname: "New 3ds XL", price: "129", location: "Raliegh, NC", departmentname: "Gaming", imageurl: "https://tctechcrunch2011.files.wordpress.com/2015/02/new-3ds-xl-2.jpg?w=1279&h=727&crop=1"}


      ]
    )


  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return product.destroy({ where:{productname: [

      "Pearl Drums",
      "Iron Gym Pull Up Bar",
      "evga sc-17",
      "Ps4 Pro",
      "Superman Figure",
      "Yahmaha Revstar",
      "Casio PX-350 Black Digital Piano Bundle",
      "Metal Gear Solid V",
      "Fire Emblem Fates",
      "Fifa 17",
      "20lb Dumbells",
      "Jump Rope",
      "Blue Snowball Mic",
      "Beats by Dre(blue)",
      "Gi Joe",
      "Saitama Figure",
      "Swordfish II",
      "Crock Pot",
      "George Foreman Grill",
      "Blender",
      "Skullduggery Pleasant Box Set",
      "A Darker Shade of Magic",
      "Ms Marvel",
      "Black Curtains",
      "Computer Desk",
      "Water Hose",
      "Bird Bath",
      "Weather Tech Floor Mats",
      "Spare Tire",
      "Break Pads",
      "Assassins' Creed Hoodie",
      "Reaper Cloak",
      "Punisher T-Shirt",
      "$#*! I'm on Master T-Shirt",
      "Dresser",
      "Bed Frame",
      "New 3ds XL"

      ]},
      truncate: true
    })
  }
};
