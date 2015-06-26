package data;

import java.util.ArrayList;

public class Command {

	String commandClusterId;
	String server;
	String commandId;
	String name;
	String mandatory;
	ArrayList<Arg> arg;
	
	/**
	 * Command class constructor.
	 * 
	 * @param commandClusterId
	 * @param commandId
	 * @param server
	 * @param name
	 * @param mandatory
	 * @param arg
	 */
	public Command(int commandClusterId, int commandId, String server, String name, String mandatory, ArrayList<Arg> arg) {
		
		this.commandClusterId = Integer.toString(commandClusterId);
		this.commandId = Integer.toString(commandId);
		this.server = server;
		this.name = name;
		this.mandatory = mandatory;
		this.arg = arg;
	}
}
