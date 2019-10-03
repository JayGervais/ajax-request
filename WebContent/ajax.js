/**
 * Cool JavaScript file to do really cool things... really really cool things
 */

function loadagencies() 
{
	var req = new XMLHttpRequest();
	req.onreadystatechange = function()
	{
		if (req.readyState == 4 && req.status == 200)
		{
			var agenciesArray = JSON.parse(req.responseText);
			var agencySelect = document.getElementById("agencies");
			for (i=0; i<agenciesArray.length; i++)
			{
				var agency = agenciesArray[i];
				var option = document.createElement("option");
				option.text = agency.AgncyAddress + " " + agency.AgncyCity;
				option.value = agency.AgencyId;
				agencySelect.add(option);
			}
		}
	};
	req.open("GET", "http://10.187.133.64:9090/JSP-DAY4/rs/agency/getallagencies", true);
	req.send();
}

function loadagents(agencyid) 
{
	
}

function loadselectedagent(agent) 
{
	
}