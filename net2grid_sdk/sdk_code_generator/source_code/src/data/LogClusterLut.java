package data;

import java.util.ArrayList;

public class LogClusterLut {

	String clusterId;
	String clusterName;
	ArrayList<String> attributes;
	ArrayList<String> commands;
	
	/**
	 * LogClusterLut class constructor.
	 * 
	 * @param clusterId
	 * @param clusterName
	 * @param attributes
	 * @param commands
	 */
	public LogClusterLut(int clusterId, String clusterName, ArrayList<String> attributes, ArrayList<String> commands) {
		
		this.clusterId = Integer.toString(clusterId);
		this.clusterName = clusterName;
		this.attributes = attributes;
		this.commands = commands;
	}
}
