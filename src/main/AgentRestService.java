package main;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.FormParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.core.MediaType;


@Path("/agent")
public class AgentRestService 
{
	// http://JSPDay5/rs/agent/getallagents
	@GET
	@Path("/getallagents")
    @Produces(MediaType.TEXT_PLAIN)
	public String getAllAgents() 
	{
        return "agents";	
	}
	
	// http://JSPDay5/rs/agent/getagent/{agentid}
	@GET
	@Path("/getagent/{agentid}")
    @Produces(MediaType.APPLICATION_JSON)
	public String getAgent(@PathParam("agentid") int agentId) 
	{
		// EntityManagerFactory factory = Persistence.
        return "agent";	
	}

	@POST
	@Path("/postagent")
    @Produces(MediaType.TEXT_PLAIN)
	public String postSomething(@FormParam("request") String request ,  @DefaultValue("1") @FormParam("version") int version) 
	{
        return "postagent";	
	}

	@PUT
	@Path("/<add method name here>")
    @Produces(MediaType.TEXT_PLAIN)
	public String putSomething(@FormParam("request") String request ,  @DefaultValue("1") @FormParam("version") int version) 
	{	
        return "putagent";	
	}

	@DELETE
	@Path("/<add method name here>")
	public void deleteSomething(@FormParam("request") String request ,  @DefaultValue("1") @FormParam("version") int version) 
	{	
		
	}
}
