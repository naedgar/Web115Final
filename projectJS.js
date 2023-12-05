document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submit").addEventListener('click',myWindow)
    function myWindow()
    {
        let userName = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let goal = document.getElementById("goal").value;
        //Monday
        let mbreakfast = document.getElementById("mbreakfast").value;
        let mmsnack = document.getElementById("mmsnack").value;
        let mlunch = document.getElementById("mlunch").value;
        let masnack = document.getElementById("masnack").value;
        let mdinner = document.getElementById("mdinner").value;
        //Tuesday
        let tbreakfast = document.getElementById("tbreakfast").value;
        let tmsnack = document.getElementById("tmsnack").value;
        let tlunch = document.getElementById("tlunch").value;
        let tasnack = document.getElementById("tasnack").value;
        let tdinner = document.getElementById("tdinner").value;
        //Wednesday
        let wbreakfast = document.getElementById("wbreakfast").value;
        let wmsnack = document.getElementById("wmsnack").value;
        let wlunch = document.getElementById("wlunch").value;
        let wasnack = document.getElementById("wasnack").value;
        let wdinner = document.getElementById("wdinner").value;
        //Thursday
        let thbreakfast = document.getElementById("thbreakfast").value;
        let thmsnack = document.getElementById("thmsnack").value;
        let thlunch = document.getElementById("thlunch").value;
        let thasnack = document.getElementById("thasnack").value;
        let thdinner = document.getElementById("thdinner").value;
        //Friday
        let fbreakfast = document.getElementById("fbreakfast").value;
        let fmsnack = document.getElementById("fmsnack").value;
        let flunch = document.getElementById("flunch").value;
        let fasnack = document.getElementById("fasnack").value;
        let fdinner = document.getElementById("fdinner").value;
        //Saturday
        let sabreakfast = document.getElementById("sabreakfast").value;
        let samsnack = document.getElementById("samsnack").value;
        let salunch = document.getElementById("salunch").value;
        let saasnack = document.getElementById("saasnack").value;
        let sadinner = document.getElementById("sadinner").value;
        //Sunday
        let subreakfast = document.getElementById("subreakfast").value;
        let sumsnack = document.getElementById("sumsnack").value;
        let sulunch = document.getElementById("sulunch").value;
        let suasnack = document.getElementById("suasnack").value;
        let sudinner = document.getElementById("sudinner").value;
        // Formatting
        myText = ('<html>\n<head>\n<link rel="stylesheet" type="text/css" href="popup.css">\n')
        myText += ('\n</head>\n')
        //Logo and Info
        myText += ('<body>\n<div id="infoContainer">\n<img src="logo.png" alt= "logo" height="200" width="200">\n</div>')
        myText += ('<div id="textContainer">\n<b>Name: </b>'+ userName + '\n<br>\n<b> Email: </b>' + email + '\n<br>\n<b>Goal: </b>' + goal + '\n<br>\n</div>')
        //Table Setup: Days of the week
        myText += ('<table>\n<tr>\n<th> </th>\n<th>Monday</th>\n<th>Tuesday</th>\n<th>Wednesday</th>\n<th>Thursday</th>\n<th>Friday</th>\n<th>Saturday</th>\n<th>Sunday</th>\n</tr>')
        //Table Setup: Meals  
        myText += ('<tr> \n <td>Breakfast</td> \n <td id="mbreakfast"> ' + mbreakfast + '</td> \n <td id="tbreakfast"> ' + tbreakfast + '</td> \n <td id="wbreakfast"> ' + wbreakfast +  '</td> \n <td id="thbreakfast"> ' + thbreakfast +  '</td> \n <td id="fbreakfast"> ' + fbreakfast +  '</td> \n <td id="sabreakfast"> ' + sabreakfast +  '</td> \n <td id="subreakfast"> ' + subreakfast + '</td> \n </tr>\n'); 
        myText += ('<tr>\n<td>Snack</td> \n <td id="mmsnack">' + mmsnack + '</td> \n <td id="tmsnack"> ' + tmsnack + '</td> \n <td id="wmsnack"> ' + wmsnack + '</td> \n <td id="thmsnack"> ' + thmsnack + '</td> \n <td id="fmsnack"> ' + fmsnack + '</td> \n <td id="samsnack"> ' + samsnack + '</td> \n <td id="sumsnack"> ' + sumsnack + '</td> \n </tr>\n'); 
        myText += ('<tr>\n<td>Lunch</td> \n <td id="mlunch">' + mlunch + '</td> \n <td id="tlunch"> ' + tlunch + '</td> \n <td id="wlunch"> ' + wlunch + '</td> \n <td id="thlunch"> ' + thlunch + '</td> \n <td id="flunch"> ' + flunch + '</td> \n <td id="salunch"> ' + salunch + '</td> \n <td id="sulunch"> ' + sulunch + '</td> \n</tr>\n');
        myText += ('<tr>\n<td>Snack</td> \n <td id="masnack">' + masnack + '</td> \n <td id="tasnack"> ' + tasnack + '</td> \n <td id="wasnack"> ' + wasnack + '</td> \n <td id="thasnack"> ' + thasnack + '</td> \n <td id="fasnack"> ' + fasnack + '</td> \n <td id="saasnack"> ' + saasnack + '</td> \n <td id="suasnack"> ' + suasnack + '</td> \n</tr>\n');
        myText += ('<tr>\n<td>Dinner</td>\n <td id="mdinner">' + mdinner + '</td> \n <td id="tdinner"> ' + tdinner + '</td> \n <td id="wdinner"> ' + wdinner + '</td> \n <td id="thdinner"> ' + thdinner + '</td> \n <td id="fdinner"> ' + fdinner + '</td> \n <td id="sadinner"> ' + sadinner + '</td> \n <td id="sudinner"> ' + sudinner + '</td> \n</tr>\n</table>\n')
        //Button 
        myText += ('<button id="clear">Clear Weekly Planner</button>\n<button id="print" onclick="window.print()">Print</button>\n');
        myText += ('<a id="download" href="data:application/pdf;base64,' + btoa(myText) + '" download="YourCustomPlan.pdf" target="_blank">Download</a>\n');        
        myText += ('</body>\n</html>');
        let flyWindow = window.open('about:blank','myPop','width=1000,height=1000,left=1000,top=1000');
        flyWindow.document.write(myText);
        let printButton = flyWindow.document.getElementById("print");
        flyWindow.addEventListener('load', function () {    
            if (printButton) {
                printButton.addEventListener('click', function() {
                    flyWindow.print();
                });
            }})
        flyWindow.addEventListener('load', function () {
            let clearButton = flyWindow.document.getElementById("clear");
            clearButton.addEventListener('click', clearData)})
            function clearData(){
                    flyWindow.document.getElementById("mbreakfast").value = "";
                    flyWindow.document.getElementById("mmsnack").value = "";
                    flyWindow.document.getElementById("mlunch").value = "";
                    flyWindow.document.getElementById("masnack").value = "";
                    flyWindow.document.getElementById("mdinner").value = "";
                    flyWindow.document.getElementById("tbreakfast").value = "";
                    flyWindow.document.getElementById("tmsnack").value = "";
                    flyWindow.document.getElementById("tlunch").value = "";
                    flyWindow.document.getElementById("tasnack").value = "";
                    flyWindow.document.getElementById("tdinner").value = "";
                    flyWindow.document.getElementById("wbreakfast").value = "";
                    flyWindow.document.getElementById("wmsnack").value = "";
                    flyWindow.document.getElementById("wlunch").value = "";
                    flyWindow.document.getElementById("wasnack").value = "";
                    flyWindow.document.getElementById("wdinner").value = "";
                    flyWindow.document.getElementById("thbreakfast").value = "";
                    flyWindow.document.getElementById("thmsnack").value = "";
                    flyWindow.document.getElementById("thlunch").value = "";
                    flyWindow.document.getElementById("thasnack").value = "";
                    flyWindow.document.getElementById("thdinner").value = "";
                    flyWindow.document.getElementById("fbreakfast").value = "";
                    flyWindow.document.getElementById("fmsnack").value = "";
                    flyWindow.document.getElementById("flunch").value = "";
                    flyWindow.document.getElementById("fasnack").value = "";
                    flyWindow.document.getElementById("fdinner").value = "";
                    flyWindow.document.getElementById("sabreakfast").value = "";
                    flyWindow.document.getElementById("samsnack").value = "";
                    flyWindow.document.getElementById("salunch").value = "";
                    flyWindow.document.getElementById("saasnack").value = "";
                    flyWindow.document.getElementById("sadinner").value = "";
                    flyWindow.document.getElementById("subreakfast").value = "";
                    flyWindow.document.getElementById("sumsnack").value = "";
                    flyWindow.document.getElementById("sulunch").value = "";
                    flyWindow.document.getElementById("suasnack").value = "";
                    flyWindow.document.getElementById("sudinner").value = "";
                }        
            }})