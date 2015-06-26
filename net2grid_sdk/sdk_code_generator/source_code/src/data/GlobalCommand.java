package data;

import java.util.ArrayList;

public class GlobalCommand {

	String globalCommandId;
	String name;
	String clientToServer;
	String serverToClient;
	ArrayList<Arg> arg;

	/**
	 * GlobalCommand class constructor
	 * 
	 * @param globalCommandId
	 * @param name
	 * @param clientToServer
	 * @param serverToClient
	 * @param arg
	 */
	public GlobalCommand(int globalCommandId, String name, String clientToServer, String serverToClient, ArrayList<Arg> arg) {
		
		this.globalCommandId = Integer.toString(globalCommandId);
		this.name = name;
		this.clientToServer = clientToServer;
		this.serverToClient = serverToClient;
		this.arg = arg;
	}
}
