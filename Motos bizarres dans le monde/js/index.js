// Zmienna wskazująca na element wideo
const videos = document.querySelectorAll("video");
videos.forEach((video) => {
  video.addEventListener("mouseenter", function () {
    video.play();
  });
  video.addEventListener("mouseleave", function () {
    video.pause();
  });
});

const filterbtn = document.querySelectorAll(".filter-btn");
//console.log(filterbtn);
filterbtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    //console.log("click button filter");

    const brand = btn.dataset.brand;
    //console.log(brand);

    const bikes = document.querySelectorAll(".grid-item");

    if (brand == "all") {
      bikes.forEach((bike) => {
        bike.classList.remove("hidden");
      });
    } else {
      bikes.forEach((bike) => {
        console.log(bike);
        if (bike.dataset.brand == brand) {
          bike.classList.remove("hidden");
        } else {
          bike.classList.add("hidden");
        }
      });
    }
  });
});

function sortAndReorderItems(containerSelector, itemSelector, childClass) {
  const container = document.querySelector(containerSelector);
  const items = Array.from(container.querySelectorAll(itemSelector));
  console.log(childClass);
  console.log(items);
  //
  const sortedItems = items.sort((a, b) => {
    const aText =
      a.querySelector(`.${childClass}`)?.textContent.trim().toLowerCase() || "";
    const bText =
      b.querySelector(`.${childClass}`)?.textContent.trim().toLowerCase() || "";
    //console.log(aText);
    //console.log(bText);
    return aText.localeCompare(bText);
  });

  // Reorder items in DOM
  sortedItems.forEach((item) => container.appendChild(item));
}

const filterradio = document.querySelectorAll("input[type='radio']");
console.log(filterradio);
filterradio.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    console.log("click radio filter " + e.target.id);
    //
    if (e.target.id == "selaz") {
      // sort alphabetically
      //console.log("AZ");
      sortAndReorderItems(".brand__bikes", ".grid-item", "bike-name");
    } else {
      // sort by year
      //console.log("YEAR");
      sortAndReorderItems(".brand__bikes", ".grid-item", "bike-year");
    }
  });
});

const selectbtn = document.querySelectorAll("select");
selectbtn.forEach((btn) => {
  btn.addEventListener("change", function () {
    console.log("select change");

    const valueRoof = selectbtn[0].value;
    const valueWheel = selectbtn[1].value;
    console.log(valueRoof);
    console.log(valueWheel);

    const bikes = document.querySelectorAll(".grid-item");
    console.log(bikes);
    bikes.forEach((bike) => {
      console.log(bike);
      const bikeRoof = bike.dataset.roof;
      const bikeWheel = bike.dataset.wheel;
      console.log(bikeRoof);
      console.log(bikeWheel);
      //
      if (
        (valueRoof == bikeRoof && valueWheel == bikeWheel) ||
        (valueRoof == "-" && valueWheel == "-") ||
        (valueRoof == "-" && valueWheel == bikeWheel) ||
        (valueRoof == bikeRoof && valueWheel == "-")
      ) {
        // show
        bike.classList.remove("hidden");
      } else {
        // hide
        bike.classList.add("hidden");
      }
    });
  });
});
