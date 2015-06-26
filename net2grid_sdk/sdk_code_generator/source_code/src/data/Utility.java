package data;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import javax.swing.JFileChooser;
import javax.swing.JOptionPane;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.text.WordUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Utility {

	/**
	 * Opens JSON file.
	 * 
	 * @return jsonStr
	 * @throws IOException
	 */
	public static String openFile() throws IOException {
		
		JFileChooser chooser = new JFileChooser();
        File inputJson = null;
        
        int returnVal = chooser.showOpenDialog(null);
        
        if(returnVal == JFileChooser.APPROVE_OPTION) {
        	
            inputJson = new File(chooser.getSelectedFile().getPath());
        }
        
        String jsonStr = FileUtils.readFileToString(inputJson);
        
        return jsonStr;
	}
	
	/**
	 * Shows zcl input information message.
	 */
	public static void zclMsg() {
		
		JOptionPane.showMessageDialog(null, "Choose zcl.json input!", "Code generator", JOptionPane.INFORMATION_MESSAGE); 
	}
	
	/**
	 * Shows types input information message.
	 */
	public static void typesMsg() {
		
		JOptionPane.showMessageDialog(null, "Choose types.json input!", "Code generator", JOptionPane.INFORMATION_MESSAGE); 
	}
	
	/**
	 * Shows save information message.
	 */
	public static void saveMsg() {
		
		JOptionPane.showMessageDialog(null, "Choose folder location to save!", "Code generator", JOptionPane.INFORMATION_MESSAGE); 
	}
	
	/**
	 * Creates text document for writing data.
	 * 
	 * @return data.
	 */
	public static String saveLocation() {
		
		JFileChooser saver = new JFileChooser();
        String path = null;
        
        saver.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
        
        int returnVal = saver.showSaveDialog(null);
         
        if(returnVal == JFileChooser.APPROVE_OPTION) {
            
            path = saver.getSelectedFile().getPath();
        }
        
        return path;
	}
	
	/**
	 * Shows error message.
	 */
	public static void errorMsg() {
		
        JOptionPane.showMessageDialog(null, "Input file is not a JSON!", "ERROR", JOptionPane.ERROR_MESSAGE);
	}
	
	/**
	 * Shows completion message.
	 */
	public static void completeMsg() {
		
		JOptionPane.showMessageDialog(null, "Generation complete!", "Code generator", JOptionPane.INFORMATION_MESSAGE); 
	}
	
	/**
	 * Converts string to accepted style.
	 * 
	 * @param input
	 * @return newStr
	 */
	public static String convertStr(String input, boolean object) {
		
		String newStr = input.replace("#", " ").replace("(", " ").replace(")", " ").replace("/", " ").replace("-", " ");
		newStr = WordUtils.capitalizeFully(newStr);	
		newStr = newStr.replaceAll("\\s", "");
		
		if(object) {
			
			newStr = WordUtils.uncapitalize(newStr);
		}
				
		return newStr;
	}
	
	/**
	 * Parses names from attributes.
	 * 
	 * @param attributes
	 * @return attrNames
	 */
	public static ArrayList<String> parseAttributeNames(ArrayList<Attribute> attributes, int clusterId) {
		
		ArrayList<String> attrNames = new ArrayList<String>();
		
		for(int a = 0; a < attributes.size(); a++) {
			
			Attribute attrBuf = attributes.get(a);
			
			if(clusterId == Integer.parseInt(attrBuf.clusterId)) {
				
				attrNames.add(attrBuf.name);
			}		
		}
		
		return attrNames;
	}
	
	/**
	 * Parses names from commands.
	 * 
	 * @param commands
	 * @return commNames
	 */
	public static ArrayList<String> parseCommandNames(ArrayList<Command> commands, int clusterId) {
		
		ArrayList<String> commNames = new ArrayList<String>();
		
		for(int c = 0; c < commands.size(); c++) {
			
			Command commBuf = commands.get(c);
			
			if(clusterId == Integer.parseInt(commBuf.commandClusterId)) {
				
				commNames.add(commBuf.name);
			}		
		}
		
		return commNames;
	}
	
	public static ClusterLut createClusterLut(JSONObject clusterObj) throws JSONException {
		
		ClusterLut clusterLutBuf = null;
		
		try {
			
			clusterLutBuf = new ClusterLut(	clusterObj.getString("name"),
											clusterObj.getInt("id"));
		}
		catch (JSONException e) {
			
			System.out.println("Cluster " + clusterObj.getString("id") + " has a problem!");
			System.out.println(e.getMessage());
		}
		
		return clusterLutBuf;
	}
	
	/**
	 * Creates clusterLut buffer.
	 * 
	 * @param clusterObj
	 * @param attributes
	 * @param commands
	 * @return clusterLutBuf
	 */
	public static LogClusterLut createLogClusterLut(JSONObject clusterObj, ArrayList<Attribute> attributes, ArrayList<Command> commands) throws JSONException {
		
		LogClusterLut logClusterLutBuf = null;
		
		try {
			
			logClusterLutBuf = new LogClusterLut(	clusterObj.getInt("id"),
													clusterObj.getString("name"),
													parseAttributeNames(attributes, clusterObj.getInt("id")),
													parseCommandNames(commands, clusterObj.getInt("id")));
		}
		catch (JSONException e) {
			
			System.out.println("Cluster " + clusterObj.getString("id") + " has a problem!");
			System.out.println(e.getMessage());
		}
		
		return logClusterLutBuf;
	}
	/**
	 * Creates attribute buffer.
	 * 
	 * @param attrObj
	 * @param clusterObj
	 * @return attrBuf
	 * @throws JSONException
	 */
	public static Attribute createAttribute(JSONObject attrObj, JSONObject clusterObj) throws JSONException {
		
		Attribute attrBuf = null;
		
		try {			
			
			attrBuf = new Attribute(clusterObj.getInt("id"),
									attrObj.getInt("id"),
									attrObj.getString("server"),
									attrObj.getString("type"),
									attrObj.getString("writable"),
									attrObj.getString("mandatory"),
									attrObj.getString("name"));
		}
		catch (JSONException e) {
			
			System.out.println("Cluster "+clusterObj.getInt("id")+"; Attribute "+attrObj.getInt("id")+":");
			System.out.println(e.getMessage());
		}
		
		
		return attrBuf;
	}
		
	/**
	 * Creates command buffer.
	 * 
	 * @param commObj
	 * @param clusterObj
	 * @return commBuf
	 */
	public static Command createCommand(JSONObject commObj, JSONObject clusterObj) throws JSONException {
		
		Command commBuf = null;
		ArrayList<Arg> arg = null;
		
		try {
			
			arg = parseArguments(commObj);
			
			commBuf = new Command(	clusterObj.getInt("id"),
									commObj.getInt("id"),
									commObj.getString("server"),
									commObj.getString("name"),
									commObj.getString("mandatory"),
									arg);
		}
		catch (JSONException e) {
			
			System.out.println("Cluster "+clusterObj.getInt("id")+"; Command "+commObj.getInt("id")+":");
			System.out.println(e.getMessage());
		}
		
		return commBuf;
	}
	
	/**
	 * Creates command argument buffer.
	 * 
	 * @param argObj
	 * @return argBuf
	 * @throws JSONException
	 */
	public static Arg createArg(JSONObject argObj) throws JSONException {
		
		Arg argBuf = null;
		String array = null;
		
		try {
			
			array = argObj.getString("array");
		}
		catch (JSONException noArray) {
			
			array = "false";
		}
		
		try {
			
			argBuf = new Arg(	argObj.getString("name"),
								argObj.getString("type"),
								array);
		}
		catch (JSONException e) {
			
			System.out.println("Arg " + argObj.getString("name") + " has a problem!");
			System.out.println(e.getMessage());
		}
		
		return argBuf;
	}
	
	/**
	 * Creates global command buffer.
	 * 
	 * @param globalCommandObj
	 * @return globalCommBuf
	 * @throws JSONException
	 */
	public static GlobalCommand createGlobalCommand(JSONObject globalCommandObj) throws JSONException {
		
		GlobalCommand globalCommBuf = null;
		ArrayList<Arg> arg = null;
		
		try {
			
			arg = parseArguments(globalCommandObj);
			
			globalCommBuf = new GlobalCommand(	globalCommandObj.getInt("id"),
												globalCommandObj.getString("name"),
												globalCommandObj.getString("clientToServer"),
												globalCommandObj.getString("serverToClient"),
												arg);
		}
		catch (JSONException e) {
			
			System.out.println("Global command "+globalCommandObj.getInt("id"));
			System.out.println(e.getMessage());
		}
		
		return globalCommBuf;
	}
	
	/**
	 * Parses clusterLut from JSON.
	 * 
	 * @param jsonStr
	 * @return clusterLut
	 * @throws JSONException
	 */
	public static ArrayList<ClusterLut> parseClusterLut(String jsonStr) throws JSONException {
		
		ArrayList<ClusterLut> clusterLut = new ArrayList<ClusterLut>();
		
		JSONObject mainJson = new JSONObject(jsonStr.substring(jsonStr.indexOf('{')));
		JSONArray clusterArr = mainJson.getJSONArray("clusters");
		
		for(int c = 0; c < clusterArr.length(); c++) {
			
			JSONObject clusterObj = clusterArr.getJSONObject(c);
			
			ClusterLut clusterLutBuf = createClusterLut(clusterObj);
			
			if(clusterLutBuf != null) {
				
				clusterLut.add(clusterLutBuf);
			}
		}
		
		return clusterLut;
	}
	
	/**
	 * Parses logClusterLut from JSON.
	 * 
	 * @param jsonStr
	 * @param attributes
	 * @param commands
	 * @return logClusterLut
	 * @throws JSONException
	 */
	public static ArrayList<LogClusterLut> parseLogClusterLut(String jsonStr, ArrayList<Attribute> attributes, ArrayList<Command> commands) throws JSONException {
		
		ArrayList<LogClusterLut> logClusterLut = new ArrayList<LogClusterLut>();
		
		JSONObject mainJson = new JSONObject(jsonStr.substring(jsonStr.indexOf('{')));
		JSONArray clusterArr = mainJson.getJSONArray("clusters");
		
		for(int c = 0; c < clusterArr.length(); c++) {
			
			JSONObject clusterObj = clusterArr.getJSONObject(c);
			
			LogClusterLut logClusterLutBuf = createLogClusterLut(clusterObj, attributes, commands);
			
			if(logClusterLutBuf != null) {
				
				logClusterLut.add(logClusterLutBuf);
			}
		}
		
		return logClusterLut;
	}
	
	/**
	 * Parses attributes from JSON.
	 * 
	 * @param jsonStr
	 * @return attributes
	 * @throws JSONException
	 */
	public static ArrayList<Attribute> parseAttributes(String jsonStr) throws JSONException {
		
		ArrayList<Attribute> attributes = new ArrayList<Attribute>();
		
		JSONObject mainJson = new JSONObject(jsonStr.substring(jsonStr.indexOf('{')));
		JSONArray clusterArr = mainJson.getJSONArray("clusters");		
		
		for(int c = 0; c < clusterArr.length(); c++) {
			
			JSONObject clusterObj = clusterArr.getJSONObject(c);
			
			try {
				
				try {
					
					JSONObject attrObj = clusterObj.getJSONObject("attribute");
					
					Attribute attrBuf = createAttribute(attrObj, clusterObj);
					
					if(attrBuf != null) {
						
						attributes.add(attrBuf);
					}
				}
				catch (JSONException array) {
					
					JSONArray attrArr = clusterObj.getJSONArray("attribute");
					
					for(int a = 0; a < attrArr.length(); a++) {
						
						JSONObject attrObj = attrArr.getJSONObject(a);
						
						Attribute attrBuf = createAttribute(attrObj, clusterObj);
						
						if(attrBuf != null) {
							
							attributes.add(attrBuf);
						}					
					}
				}
			}
			catch (JSONException noAttr) {
				
				System.out.println("Cluster "+clusterObj.getInt("id")+": " + noAttr.getMessage());
			}
		}
		
		return attributes;
	}
	
	/**
	 * Parses commands from JSON.
	 * 
	 * @param jsonStr
	 * @return commands
	 * @throws JSONException
	 */
	public static ArrayList<Command> parseCommands(String jsonStr) throws JSONException {
		
		ArrayList<Command> commands = new ArrayList<Command>();
		
		JSONObject mainJson = new JSONObject(jsonStr.substring(jsonStr.indexOf('{')));
		JSONArray clusterArr = mainJson.getJSONArray("clusters");
		
		for(int c = 0; c < clusterArr.length(); c++) {
			
			JSONObject clusterObj = clusterArr.getJSONObject(c);
			
			try {
				
				try {
					
					JSONObject commObj = clusterObj.getJSONObject("command");
					
					Command commBuf = createCommand(commObj, clusterObj);
					
					if(commBuf != null) {
						
						commands.add(commBuf);
					}
				}
				catch (JSONException array) {
					
					JSONArray commArr = clusterObj.getJSONArray("command");
					
					for(int a = 0; a < commArr.length(); a++) {
						
						JSONObject commObj = commArr.getJSONObject(a);
						
						Command commBuf = createCommand(commObj, clusterObj);
						
						if(commBuf != null) {
							
							commands.add(commBuf);
						}
					}
				}
			}
			catch (JSONException noComm) {
				
				System.out.println("Cluster "+clusterObj.getInt("id")+": " + noComm.getMessage());
			}
		}
		
		return commands;
	}
	
	/**
	 * Parses command arguments from JSON.
	 * 
	 * @param commObj
	 * @param clusterObj
	 * @return arg
	 * @throws JSONException
	 */
	public static ArrayList<Arg> parseArguments(JSONObject commObj) throws JSONException {
		
		ArrayList<Arg> arg = new ArrayList<Arg>();
		
		try {
			
			try {
				
				JSONObject argObj = commObj.getJSONObject("arg");
				
				Arg argBuf = createArg(argObj);
				
				if(argBuf != null) {
					
					arg.add(argBuf);
				}
			}
			catch (JSONException array) {
				
				JSONArray argArr = commObj.getJSONArray("arg");
				
				for(int a = 0; a < argArr.length(); a++) {
					
					JSONObject argObj = argArr.getJSONObject(a);
					
					Arg argBuf = createArg(argObj);
					
					if(argBuf != null) {
						
						arg.add(argBuf);
					}
				}
			}
		}
		catch (JSONException noArg) {
			
			System.out.println(noArg.getMessage());
		}
		
		return arg;
	}
	
	/**
	 * Parses global commands from JSON.
	 * 
	 * @param jsonStr
	 * @return globalCommands
	 * @throws JSONException
	 */
	public static ArrayList<GlobalCommand> parseGlobalCommands(String jsonStr) throws JSONException {
		
		ArrayList<GlobalCommand> globalCommands = new ArrayList<GlobalCommand>();
		
		JSONObject mainJson = new JSONObject(jsonStr.substring(jsonStr.indexOf('{')));
		JSONArray globalCommandsArr = mainJson.getJSONArray("globalCommands");
		
		for(int c = 0; c < globalCommandsArr.length(); c++) {
			
			JSONObject globalCommandObj = globalCommandsArr.getJSONObject(c);
			
			GlobalCommand globalCommBuf = createGlobalCommand(globalCommandObj);
			
			if(globalCommBuf != null) {
				
				globalCommands.add(globalCommBuf);
			}
		}
		
		return globalCommands;
	}
}
