/**
 * Cool JavaScript file to do really cool things... really really cool things
 */

function loadagencies() 
{
	console.log("in loadagencies");
	var req = new XMLHttpRequest();
	req.onreadystatechange = function()
	{
		if (req.readyState == 4 && req.status == 200)
		{
			var agenciesArray = JSON.parse(req.responseText);
			var agencySelect = document.getElementById("agencies");
			for (i = 0; i < agenciesArray.length; i++)
			{
				var agency = agenciesArray[i];
				var option = document.createElement("option");
				option.text = agency.agncyAddress + " " + agency.agncyCity;
				option.value = agency.agencyId;
				agencySelect.add(option);
			}
		}
	};
	req.open("GET", "http://10.187.133.64:9090/JSPDay4/rs/agency/getallagencies", true);
	req.send();
}


function loadagents(agencyid) 
{
	var req = new XMLHttpRequest();
	req.onreadystatechange = function()
	{
		if (req.readyState == 4 && req.status == 200)
		{
			var agentsArray = JSON.parse(req.responseText);
			var agentSelect = document.getElementById("agents");
			for (i=0; i<agentsArray.length; i++)
			{
				var agent = agentsArray[i];
				var option = document.createElement("option");
				option.text = agent.agtFirstName + " " + agent.agtMiddleInitial + " " + agent.agtLastName;
				option.value = agent.agentId;
				agencySelect.add(option);
			}
		}
	};
	req.open("GET", "http://10.187.133.64:9090/JSPDay4/rs/agent/getagencyagents/" + agencyid, true);
	req.send();
}


function loadselectedagent(agent) 
{
	var req = new XMLHttpRequest();
	req.onreadystatechange = function()
	{
		if (req.readyState == 4 && req.status == 200)
		{
			var agent = JSON.parse(req.responseText);
			var agentDiv = document.getElementById("agent");
			agentDiv.innerHTML = "agentid: " + agent.agentId + "<br />"
				+ "agtFirstName: " + agent.agtFirstName + "<br />"
				+ "agtMiddleInitial: " + agent.agtMiddleInitial + "<br />"
				+ "agtLastName: " + agent.agtLastName + "<br />"
				+ "agtBusPhone: " + agent.agtBusPhone + "<br />"
				+ "agtEmail: " + agent.agtEmail + "<br />"
				+ "agtPosition: " + agent.agtPosition + "<br />"
				+ "agtAgencyId: " + agent.agencyId + "<br />";
		}
	};
	req.open("GET", "http://10.187.133.64:9090/JSPDay4/rs/agent/getagencyagents/" + agentid);
	req.send();
}

function clearSelect(selectObject)
{
	for (i=0; i<=selectObject.length; i++)
	{
		selectObject.remove(i);
	}
}