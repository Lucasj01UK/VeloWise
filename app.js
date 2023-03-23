    // Change style of navbar on scroll
    window.onscroll = function () {
        myFunction()
      };
  
      function myFunction() {
        var navbar = document.getElementById("myNavbar");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
        } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
        }
      }
  
      // Used to toggle the menu on small screens when clicking on the menu button
      function toggleFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
        } else {
          x.className = x.className.replace(" w3-show", "");
        }
      }
  
  // document.getElementById('button1').addEventListener('click', loadCustomer);  
  document.getElementById('button2').addEventListener('click', loadAllBrands);
  document.getElementById('button3').addEventListener('click', getBikes);  
  document.getElementById('button4').addEventListener('click', getAcc);
  document.getElementById('button5').addEventListener('click', getComponent);
  document.getElementById('button6').addEventListener('click', getClothing);
  //document.getElementById('button7').addEventListener('click', getHoliday);
  document.getElementById('button8').addEventListener('click', getInsurance);
  document.getElementById('button9').addEventListener('click', getNutrition);

  
  // Load Default outputs
  function getDefultText() {
    document.getElementById('output').innerHTML = `<div class="w3-display-container w3-display-middle">
      <h4 class="tagLine w3-center w3-margin-top">Velo<span class="wiseColour">Wise</span>.cc | The Top 3 Brands This Month
      cycling-specific companies.<br>Building brand awareness for the UK's cycling community.<br></h4>
      </div>`
  };
  
  // Load all Brands
  function loadAllBrands(e) {
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', 'brands.json', true);
  
    xhr.onload = function() {
      if(this.status === 200) {
        // console.log(this.responseText);
  
        const customers = JSON.parse(this.responseText);
  
        let output = '<div class="w3-card-4 card-margin"><h1>All Brands</h1></div>';
        
        customers.forEach(function(item) {
          output += `
            <div class="w3-card-4 w3-large card-margin">
              <ul>
                <h2 class="card-title">${item.company}</h2>
                <li><i>&ldquo;${item.tagLine}</i>&rdquo;</li>
                <li><a href="${item.webAddress}" class="w3-text-blue">${item.webAddress}</a></li>
                <li>Location: ${item.location}</li>            
                <li>Accessories: ${item.accessories}</li>
                <li>Bikes: ${item.bike}</li>
                <li>Components: ${item.component}</li>
                <li>Clothing: ${item.clothing}</li>
                <li>Nutrition: ${item.nutrition}</li>
              </ul>
            </div>
            `;
        })
          document.getElementById('output').innerHTML = output;
      }
    }  
    xhr.send();
  };
  
  // Get Bikes data:
  function getBikes() {
    fetch('brands.json')
    .then(res => res.json())
    .then(data => {
  
      let output = '<div class="w3-card-4 card-margin"><h1>Bikes</h1></div>';
  
      data.forEach(item => {
        if(item.bike === "Yes") {
          // console.log(item)
          output += `
            <div class="w3-card-4 w3-large card-margin">
              <ul>
              <h2 class="card-title">${item.company}</h2>
                <li><i>&ldquo;${item.tagLine}</i>&rdquo;</li>
                <li>Company Web Address: <a href="${item.webAddress}" class="w3-text-blue">${item.webAddress}</a></li>
                <li>Company Location: ${item.location}</li>              
                <li>Sells Bikes: ${item.bike}</li>
              </ul>
            </div>
            `
        }
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err))  
  };
  
  // Get Accessories data:
  function getAcc() {
    fetch('brands.json')
    .then(res => res.json())
    .then(data => {
  
      let output = '<div class="w3-card-4 card-margin"><h1>Accessories</h1></div>';
  
      data.forEach(item => {
        if(item.accessories == "Yes") {
          // console.log(item)
          output += `
            <div class="w3-card-4 w3-large card-margin">
              <ul>
              <h2 class="card-title">${item.company}</h2>
                <li><i>&ldquo;${item.tagLine}</i>&rdquo;</li>
                <li>Company Web Address: <a href="${item.webAddress}" class="w3-text-blue">${item.webAddress}</a></li>
                <li>Company Location: ${item.location}</li>              
                <li>Sells Accessories: ${item.accessories}</li>
              </ul>
            </div>
            `
        }
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
  };
  
  // Get Components data:
  function getComponent() {
    fetch('brands.json')
    .then(res => res.json())
    .then(data => {
  
      let output = '<div class="w3-card-4 card-margin"><h1>Components</h1></div>';
  
      data.forEach(item => {
        if(item.component == "Yes") {
          // console.log(item)
          output += `
            <div class="w3-card-4 w3-large card-margin">
              <ul>
              <h2 class="card-title">${item.company}</h2>
                <li><i>&ldquo;${item.tagLine}</i>&rdquo;</li>
                <li>Company Web Address: <a href="${item.webAddress}" class="w3-text-blue">${item.webAddress}</a></li>
                <li>Company Location: ${item.location}</li>              
                <li>Sells Components: ${item.component}</li>
              </ul>
            </div>
            `
        }
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
  };
  
  // Get Clothing data:
  function getClothing() {
    fetch('brands.json')
    .then(res => res.json())
    .then(data => {
  
      let output = '<div class="w3-card-4 card-margin"><h1>Clothing</h1></div>';
  
      data.forEach(item => {
        if(item.clothing == "Yes") {
          // console.log(item)
          output += `
            <div class="w3-card-4 w3-large card-margin">
              <ul>
              <h2 class="card-title">${item.company}</h2>
                <li><i>&ldquo;${item.tagLine}</i>&rdquo;</li>
                <li>Company Web Address: <a href="${item.webAddress}" class="w3-text-blue">${item.webAddress}</a></li>
                <li>Company Location: ${item.location}</li>              
                <li>Sells Clothing: ${item.clothing}</li>
              </ul>
            </div>
            `
        }
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
  };
  
  // Get Holiday data:
  function getHoliday() {
    fetch('brands.json')
    .then(res => res.json())
    .then(data => {
  
      let output = '<div class="w3-card-4 card-margin"><h1>Holidays</h1></div>';
  
      data.forEach(item => {
        if(item.holiday == "Yes") {
          // console.log(item)
          output += `
            <div class="w3-card-4 w3-large card-margin">
              <ul>
              <h2 class="card-title">${item.company}</h2>
                <li><i>&ldquo;${item.tagLine}</i>&rdquo;</li>
                <li>Company Web Address: <a href="${item.webAddress}" class="w3-text-blue">${item.webAddress}</a></li>
                <li>Company Location: ${item.location}</li>              
                <li>Sells Holidays: ${item.holiday}</li>
              </ul>
            </div>
            `
        }
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
  };
  
  // Get Insurance data:
  function getInsurance() {
    fetch('brands.json')
    .then(res => res.json())
    .then(data => {
  
      let output = '<div class="w3-card-4 card-margin"><h1>Insurance</h1></div>';
  
      data.forEach(item => {
        if(item.insurance == "Yes") {
          // console.log(item)
          output += `
            <div class="w3-card-4 w3-large card-margin">
              <ul>
              <h2 class="card-title">${item.company}</h2>
                <li><i>&ldquo;${item.tagLine}</i>&rdquo;</li>
                <li>Company Web Address: <a href="${item.webAddress}" class="w3-text-blue">${item.webAddress}</a></li>
                <li>Company Location: ${item.location}</li>              
                <li>Sells Insurance: ${item.insurance}</li>
              </ul>
            </div>
            `
        }
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
  };
  
  // Get Nutrition data:
  function getNutrition() {
    fetch('brands.json')
    .then(res => res.json())
    .then(data => {
  
      let output = '<div class="w3-card-4 card-margin"><h1>Nutrition</h1></div>';
  
      data.forEach(item => {
        if(item.nutrition == "Yes") {
          // console.log(item)
          output += `
            <div class="w3-card-4 w3-large card-margin">
              <ul>
              <h2 class="card-title">${item.company}</h2>
                <li><i>&ldquo;${item.tagLine}</i>&rdquo;</li>
                <li>Company Web Address: <a href="${item.webAddress}" class="w3-text-blue">${item.webAddress}</a></li>
                <li>Company Location: ${item.location}</li>              
                <li>Sells Nutrition: ${item.nutrition}</li>
              </ul>
            </div>
            `
        }
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
  };
  
  // Get Association data:
  function getAssociation() {
    fetch('brands.json')
    .then(res => res.json())
    .then(data => {
  
      let output = '<div class="w3-card-4 card-margin"><h1>Association</h1></div>';
  
      data.forEach(item => {
        if(item.association == "Yes") {
          // console.log(item)
          
          output += `
            <div class="w3-card-4 w3-large card-margin">
              <ul>
              <h2 class="card-title">${item.company}</h2>
                <li><i>&ldquo;${item.tagLine}</i>&rdquo;</li>
                <li>Company Web Address: <a href="${item.webAddress}">${item.webAddress}</a></li>
                <li>Company Location: ${item.location}</li>              
                <li>Sells Association: ${item.association}</li>
              </ul>
            </div>
            `
        }
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
  };
  
  // Get Association data:
  function getComingSoon() {
    fetch('brands.json')
    .then(res => res.json())
    .then(data => {
  
      let output = '';
  
      data.forEach(item => {
        if(item.company == "Coming Soon") {
          // console.log(item)
          
          output += `
            <div class="w3-card-4 w3-large card-margin">
              <ul>
              <h2 class="card-title">${item.company}</h2>     
              </ul>
            </div>
            `
        }
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
  };
  
    // Used to toggle the menu on small screens when clicking on the menu button
  //   function toggleFunction() {
  //     var x = document.getElementById("navDemo");
  //     if (x.className.indexOf("w3-show") == -1) {
  //         x.className += " w3-show";
  //     } else {
  //         x.className = x.className.replace(" w3-show", "");
  //     }
  // }