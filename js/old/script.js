
// Function to handle file input change
function handleFileInput(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        /*
        reader.onload = function(e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

            createDictionaryCards(jsonData);
        };

        reader.readAsArrayBuffer(file);
        */
       reader.onload = evt => {
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: "binary" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const fristRow = XLSX.utils.sheet_to_json(ws)[0];
          const jsonData = XLSX.utils.sheet_to_json(ws, { header: fristRow, defval: "" });

          createDictionaryCards(jsonData);
        };
        reader.readAsBinaryString(file);

        $("#file-input").hide();
    }
}

function createDictionaryCards(data) {
    const container = document.getElementById('dictionary-container');
    container.innerHTML = ''; // Clear previous content

    if (data.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'No dictionary entries found.';
        container.appendChild(message);
        return;
    }

    const keys = Object.keys(data[0]);

    // Log keys to the console for debugging
    console.log('Keys:', keys);


    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');




        const table = document.createElement('table');
        const tbody = document.createElement('tbody');


        keys.forEach((key, rowIndex) => {
            const row = document.createElement('tr');
            const header = document.createElement('td');
            const content = document.createElement('td');

            header.textContent = "["+rowIndex+"] "+key;

            //Edit display text
            // console.log("rowIndex: " + rowIndex);
            let textValue = item[key] === undefined ? ' ' : item[key]  +"";

            // verbs
            if(rowIndex<7 && rowIndex>4){
                // content.innerText  = textValue.split(',');
                //content.innerText = textValue.replace(/,/g, " ");
				content.innerText = textValue;
            }
            // Examples
            else if(rowIndex>6 && rowIndex <14 && textValue != ''){
                //let r = textValue.split('.');
                //console.log(r);
                /*
                r.forEach((re, rowIndex) => {
                    let yre = (rowIndex%2 == 0)? re : re.replace(",", ".")+".";
                    content.innerText  = content.innerText+ yre;
                });
                */
                //content.innerText  = r[0].replace(",", ".")+"." + r[1];
                //content.textContent = textValue ;
                content.innerText = textValue;
            }
            else {
                content.textContent = textValue ;
            }

            //Control display column
            let isDisplay = 1;
			isDisplay = (rowIndex > 8 && item[key] == '')? 0 : isDisplay;
            //isDisplay = (rowIndex > 14 && item[key] == '')? 0 : isDisplay;
            isDisplay = (rowIndex == 2)? 0: isDisplay;



            if(isDisplay==1) {
                row.appendChild(header);
                row.appendChild(content);
            }

            tbody.appendChild(row);
        });

        // Check if the term
        //console.log("item[Positive/Negative/Neutral term]: "+item["Positive/Negative/Neutral term"]);
        if (item["Positive/Negative/Neutral term"] == 'Positive') {
            card.style.backgroundColor = 'rgb(241 255 241);';
        } else if (item["Positive/Negative/Neutral term"] == 'Negative'){
            card.style.backgroundColor = 'rgb(254 241 241)';
        }

        table.appendChild(tbody);
        card.appendChild(table);
        container.appendChild(card);

    });
}



// Attach event listener to file input
document.getElementById('file-input').addEventListener('change', handleFileInput);
