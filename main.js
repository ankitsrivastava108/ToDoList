function myFunction() {
	
	 var obj= document.getElementById("task");
	
	 arr.push(obj.value);
	 var dest= document.getElementById("box");
	 var index;
	 
	 var table = document.createElement("table");
     for (index = 0; index < arr.length; index++) 
     {
     	var row = document.createElement("tr");
            //Create the 2 columns
        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        col1.innerHTML= arr[index];

        var btn= document.createElement("button");
        //btn.setAttribute("type","button");
        btn.innerHTML = "Delete";
        btn.setAttribute("onclick","removeItem(" + index + ")");
        //btn.onclick= remove(index);
        col2.appendChild(btn);
        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);
    }
    if (dest.childNodes.length > 0)
    {
    	dest.removeChild(dest.childNodes[0]);
    }
    
    dest.appendChild(table);



	 /*var text= "<table>";
	 for (index = 0; index < arr.length; index++) {
		  text += "<tr>" + "<td>"+ arr[index]+ "</td>" + "<td>" + "<button onclick= remove(index) >" + "Delete" + "</button>" + "</td>" ;
		  text += "</tr>";
	 }
	 text+= "</table>";
	 dest.innerHTML= text;
	*/

	 /*
	 var text = "<ol>";
	 for (index = 0; index < arr.length; index++) {
		  text += "<li>" + arr[index] ;
		  text += "<input type="button" value="Delete"> " + "</li>";
	 }
	 text += "</ol>";
	 */
}

var removeItem = function (i) {
	console.log("remove function called");
		arr.splice(i,1);
		display();

	};

var display = (function () {

var dest= document.getElementById("box");
	 var index;
	 
	 var table = document.createElement("table");
     for (index = 0; index < arr.length; index++) 
     {
     	var row = document.createElement("tr");
            //Create the 2 columns
        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        col1.innerHTML= arr[index];

        var btn= document.createElement("input");
        btn.setAttribute("type","button");
        btn.setAttribute("value","Delete");
        btn.setAttribute("onclick","removeItem("+index+")");
        //btn.onclick= remove(index);
        col2.appendChild(btn);
        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);
    }
    if (dest.childNodes.length > 0)
    {
    	dest.removeChild(dest.childNodes[0]);
    }
    
    dest.appendChild(table);


})


