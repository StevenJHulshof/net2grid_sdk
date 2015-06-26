package data;

public class Attribute {

	String clusterId;
	String attributeId;
	String server;
	String type;
	String writable;
	String mandatory;
	String name;
	
	/**
	 * Attribute class constructor.
	 * 
	 * @param clusterId
	 * @param attributeId
	 * @param server
	 * @param type
	 * @param writable
	 * @param mandatory
	 * @param name
	 */
	public Attribute(int clusterId, int attributeId, String server, String type, String writable, String mandatory, String name) {
		
		this.clusterId = Integer.toString(clusterId);
		this.attributeId = Integer.toString(attributeId);
		this.server = server;
		this.type = type;
		this.writable = writable;
		this.mandatory = mandatory;
		this.name = name;
	}
}
