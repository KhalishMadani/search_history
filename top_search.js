const histori = []; //array
const limitHistori = 8;
const listElement = document.getElementById('listOfArray'); //list ul

function insertSearch(){
  const inputValue = document.getElementById('inputElement').value; //get string from input tag
  histori.unshift(inputValue);

  listElement.innerHTML = ''; // empty the list so that we don't display duplicate entries and display regenerated every time a search term is entered.

  for (const myHistori of histori) {
    const listItem = document.createElement('li');
    listItem.textContent = myHistori;
    listElement.appendChild(listItem);
  }

  if (histori.length >= limitHistori){ //limit the searched history not more than 8
    histori.pop(); // removing the older search history when the new one entered
  }

  document.getElementById('inputElement').value = ''; //empty the search input after clicking the button
  console.log(histori);

}

