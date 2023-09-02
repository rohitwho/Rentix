async function getCarInfo(event) {
  event.preventDefault();

  let carName = document.getElementById("tName").value.trim();
  let description = document.getElementById("tDescriptionId").value.trim();
  let carCapacity = document.getElementById("tCapacityId").value.trim();
  let price = document.getElementById("tPriceId").value.trim();
  let filename = document.getElementById("tFilenameId").value.trim();

  function clearInputs() {


    carName.value = "";
    description.value = "";
    carCapacity.value = "";
    price.value = "";
    filename.value = "";
  }

  let data = {
    transportation_name: carName,
    transportation_description: description,
    capacity: carCapacity,
    price: price,
    filename: filename,
  };
  try {
  

    if (carName && description && carCapacity && price && filename) {
      const response = await fetch("/api/transport", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        console.log( "here is the response " + response);
        if (response.ok) {
          clearInputs();

          console.log("data seeded");
        } else
          (err) => {
            console.log(err);
          };
   
    }
  } catch (err) {
    console.log(err);
  }

  console.log(data)

}
document.querySelector(".uploadInfo").addEventListener("click", getCarInfo);
