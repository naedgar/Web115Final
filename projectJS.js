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
        myText = ('<html>\n<head>\n<style>\nbody {text-align: left;\n}\n#infoContainer {\ndisplay: inline-block;\ntext-align: left;\nvertical-align: middle;\n}\n#textContainer {\ndisplay: inline-block;\ntext-align: left;\nvertical-align: middle;\n}\n</style>\n</head>')
        //Logo and Info
        myText += ('<body>\n<div id="infoContainer">\n<img src="logo.png" alt= "logo" height="200" width="200">\n</div>')
        myText += ('<div id="textContainer">\n<b>Name: </b>'+ userName + '</b>\n<br>\n<b> Email: </b>' + email + '\n<br>\n<b>Goal: </b>' + goal + '\n<br>\n</div>')
        //Table Setup: Days of the week
        myText += ('<table>\n<tr>\n<th> </th>\n<th>Monday</th>\n<th>Tuesday</th>\n<th>Wednesday</th>\n<th>Thursday</th>\n<th>Friday</th>\n<th>Saturday</th>\n<th>Sunday</th>\n</tr>')
        //Table Setup: Meals  
        myText += ('<tr> \n <td>Breakfast</td> \n <td> ' + mbreakfast + '</td> \n <td> ' + tbreakfast + '</td> \n <td> ' + wbreakfast +  '</td> \n <td> ' + thbreakfast +  '</td> \n <td> ' + fbreakfast +  '</td> \n <td> ' + sabreakfast +  '</td> \n <td> ' + subreakfast + '</td> \n </tr>\n'); 
        myText += ('<tr>\n<td>Snack</td> \n <td>' + mmsnack + '</td> \n <td> ' + tmsnack + '</td> \n <td> ' + wmsnack + '</td> \n <td> ' + thmsnack + '</td> \n <td> ' + fmsnack + '</td> \n <td> ' + samsnack + '</td> \n <td> ' + sumsnack + '</td> \n </tr>\n'); 
        myText += ('<tr>\n<td>Lunch</td> \n <td>' + mlunch + '</td> \n <td> ' + tlunch + '</td> \n <td> ' + wlunch + '</td> \n <td> ' + thlunch + '</td> \n <td> ' + flunch + '</td> \n <td> ' + salunch + '</td> \n <td> ' + sulunch + '</td> \n</tr>\n');
        myText += ('<tr>\n<td>Snack</td> \n <td>' + masnack + '</td> \n <td> ' + tasnack + '</td> \n <td> ' + wasnack + '</td> \n <td> ' + thasnack + '</td> \n <td> ' + fasnack + '</td> \n <td> ' + saasnack + '</td> \n <td> ' + suasnack + '</td> \n</tr>\n');
        myText += ('<tr>\n<td>Dinner</td>\n <td>' + mdinner + '</td> \n <td> ' + tdinner + '</td> \n <td> ' + wdinner + '</td> \n <td> ' + thdinner + '</td> \n <td> ' + fdinner + '</td> \n <td> ' + sadinner + '</td> \n <td> ' + sudinner + '</td> \n</tr>\n</table>')
        //Button 
        myText += ('<button id="clear">Clear Weekly Planner</button>\n<button id="print">Print</button>\n<button id="download">Download</button>\n</body>\n</html>')
        flyWindow = window.open('about:blank','myPop','width=1000,height=1000,left=1000,top=1000');
        flyWindow.document.write(myText);
    }
});