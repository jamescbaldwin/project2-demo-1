const Item = require("../models");
module.exports = function(app) {
    app.get("/api/all", (req, res) => {
        Item.findAll({}).then(function(results) {
            res.json(results);
        });
    });
};

$.get("/newseller", function(data) {
  console.log("data: ", data);
  const container = $(".card-columns")
  if (data.length !==0) {
      for (let i = 0; i < data.length; i++) {
          container.append(
          `
          <div class="card">
              <img class="card-img-top" src="..." alt="Card image cap">
              <div class="card-body">
                  <h5 class="item-name">${data[i].item_name}</h5>
                  <h6 class="item-price">$${data[i].item_price}</h6>
                  <p class="contact-info"><small class="text-muted">${data[i].seller_contact}</small></p>
                <button type="button" class="btn btn-outline-success">Purchase</button>
              </div>
            </div>
            `
          )
      }
    };
 });



//     $('.close-div').click(function(){
//    $(this).parent().parent().remove();
// });