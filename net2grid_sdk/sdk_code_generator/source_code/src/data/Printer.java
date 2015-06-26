package data;

import static data.Boot.bar;
import static data.Utility.convertStr;
import static data.Utility.parseAttributes;
import static data.Utility.parseClusterLut;
import static data.Utility.parseGlobalCommands;
import static data.Utility.parseLogClusterLut;
import static data.Utility.parseCommands;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.commons.lang3.text.WordUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Printer {

	/**
	 * Prints zigbeeLut.service.js file.
	 * 
	 * @param path
	 * @param jsonStr
	 * @throws IOException
	 * @throws JSONException 
	 */
	public static void printZigbeeLutService(String path, String jsonStr, String typesStr) throws IOException, JSONException {
		
		ArrayList<Attribute> attributes = parseAttributes(jsonStr);
		ArrayList<Command> commands = parseCommands(jsonStr);
		ArrayList<GlobalCommand> globalCommands = parseGlobalCommands(jsonStr);
		ArrayList<LogClusterLut> logClusterLut = parseLogClusterLut(jsonStr, attributes, commands);
		ArrayList<ClusterLut> clusterLut = parseClusterLut(jsonStr);
		
		JSONObject typesJson = new JSONObject(typesStr.substring(typesStr.indexOf('{')));
		JSONObject typesObj = typesJson.getJSONObject("types");
		JSONArray structArr = typesObj.getJSONArray("struct");
		JSONArray bitmapArr = typesObj.getJSONArray("bitmap");
		JSONArray enumArr = typesObj.getJSONArray("enum");
				
		String currentPath = path + "\\zigbeeLut.service.js";
		
		File delFile = new File(currentPath);
		delFile.delete();
		
		WriteFile data = new WriteFile(currentPath, true);

		bar.updateBar(4);
		System.out.println("Parsing JSON file complete!");
		
		data.write(	"/**\n * Service handling all look up tables used in the Net2Grid API.\n *\n *" + 
					" @return\t{Function} getClusterLut(); Returns cluster look up table.\n *\t\t\t" +
					"{Function} getLogClusterLut(); Returns log cluster look up table.\n *\t\t\t" +
					"{Function} getIasLut(); Returns intruder alarm systems look up table.\n *\t\t\t" +
					"{Function} getArmStateLut(); Returns arming status look up table.\n *\t\t\t" +
					"{Function} getDataTypeLut(); Returns data type look up table.\n *\t\t\t" +
					"{Function} getStatusLut(); Returns status look up table.\n *\t\t\t" +
					"{Function} getArgDataTypeLut(); Returns argument data type look up table.\n");
		
		
		for(int a = 0; a < attributes.size(); a++) {
			
			Attribute attrBuf = attributes.get(a);
			
			data.write(" *\t\t\t{Function} get" + convertStr(attrBuf.name, false) + "Attribute(); Returns " +
						attrBuf.name + " attribute data.\n");
		}
		
		bar.updateBar(8);
				
		for(int c = 0; c < commands.size(); c++) {
			
			Command commBuf = commands.get(c);
			
			data.write(	" *\t\t\t{Function} get" + WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "") + "Command(); Returns " +
						WordUtils.uncapitalize(commBuf.name) + " command data.\n");
		}
		
		for(int c = 0; c <globalCommands.size(); c++) {
			
			GlobalCommand globalCommBuf = globalCommands.get(c);
			
			data.write( " *\t\t\t{Function} get" + globalCommBuf.name + "GlobalCommand(); Returns " + globalCommBuf.name + 
						" global command data.\n");	
		}
		
		bar.updateBar(12);		
		System.out.println("Documentation printing complete!");
		
		data.write(	" */\nnet2gridApiModule.service('zigbeeLutService', function() {\n\n\t/**\n\t * " +
					"{Object} Cluster look up table.\n\t *\n\t * @description Contains all clusters " +
					"with their cluster id.\n\t */\n\tvar clusterLut = {\n");
		
		for(int c = 0; c < clusterLut.size(); c++) {
			
			ClusterLut clusterLutBuf = clusterLut.get(c);
			
			data.write(	"\n\t\t" + convertStr(clusterLutBuf.name, false) + ": " + clusterLutBuf.id);
			
			if(c < clusterLut.size()-1) {
				
				data.write(",");
			}
		}
		
		data.write(	"\n\t};\n\n\t/**\n\t * " +"{Object} Log Cluster look up table.\n\t *\n\t * @description" +
					" Contains cluster id, name, attributes and commands.\n\t */\n\tvar logClusterLut = [");
		
		for(int l = 0; l < logClusterLut.size(); l++) {
			
			LogClusterLut clusterLutBuf = logClusterLut.get(l);
			
			data.write(	"{\n\n\t\tclusterId: " + clusterLutBuf.clusterId + ",\n\t\tclusterName: '" +
						clusterLutBuf.clusterName + "',\n\t\tattributes: [");
			
			for(int a = 0; a < clusterLutBuf.attributes.size(); a++) {
				
				String attrNameBuf = clusterLutBuf.attributes.get(a);
				
				data.write( "{\n\n\t\t\tname: '" + convertStr(attrNameBuf, true) + "'\n\t\t}");
				
				if(a < clusterLutBuf.attributes.size()-1) {
					
					data.write(", ");
				}
			}
			
			data.write("],\n\t\tcommands: [");
			
			for(int c = 0; c < clusterLutBuf.commands.size(); c++) {
				
				String commNameBuf = clusterLutBuf.commands.get(c);
				
				data.write( "{\n\n\t\t\tname: '" + WordUtils.uncapitalize(WordUtils.capitalize(commNameBuf).replaceAll("\\s",  "")) + 
							"'\n\t\t}");
				
				if(c < clusterLutBuf.commands.size()-1) {
					
					data.write(", ");
				}
			}
			
			data.write("]\n\t}");
			
			if(l < logClusterLut.size()-1) {
				
				data.write(", ");
			}
		}
		
		bar.updateBar(20);
		System.out.println("ClusterLut printing complete!");
		
		data.write(	"];\n\n\t/**\n\t * {Object} Intruder alarm systems look up table.\n\t *\n\t * " +
					"@description Contains all names and model identifiers of IAS Zone devices." +
					"\n\t */\n\tvar iasLut = [{\n\n\t\tname: 'Standard CIE',\n\t\tid: 0x0000\n" +
					"\t}, {\n\n\t\tname: 'Motion sensor',\n\t\tid: 0x000d\n\t}, {\n\n\t\tname: " +
					"'Contact Switch',\n\t\tid: 0x0015\n\t}, {\n\n\t\tname: 'Fire sensor',\n\t" +
					"\tid: 0x0028\n\t}, {\n\n\t\tname: 'Water sensor',\n\t\tid: 0x002a\n\t}, {" +
					"\n\n\t\tname: 'Gas sensor',\n\t\tid: 0x002b\n\t}, {\n\n\t\tname: 'Personal" +
					" emergency device',\n\t\tid: 0x002c\n\t}, {\n\n\t\tname: 'Vibration / " +
					"Movement sensor',\n\t\tid: 0x002d\n\t}, {\n\n\t\tname: 'Remote Control',\n" +
					"\t\tid: 0x010f\n\t}, {\n\n\t\tname: 'Key fob',\n\t\tid: 0x0115\n\t}, {" +
					"\n\n\t\tname: 'Keypad',\n\t\tid: 0x021d\n\t}, {\n\n\t\tname: 'Standard " +
					"Warning Device',\n\t\tid: 0x0225\n\t}];\n\n\t/**\n\t * {Object} Arming " +
					"status look up table.\n\t *\n\t * @description Shows what mask/arm " +
					"combination sets the zone active.\n\t */\n\tvar armStateLut = [{\n\n\t\t" +
					"state: [1, 1, 1, 1, 0, 0, 0, 0]\n\t}, {\n\n\t\tstate: [0, 1, 0, 1, 0, 0," +
					" 0, 0]\n\t}, {\n\n\t\tstate: [0, 0, 1, 1, 0, 0, 0, 0]\n\t}, {\n\n\t\t" +
					"state: [0, 0, 0, 0, 0, 0, 0, 0]\n\t}];\n");
		
		bar.updateBar(22);
		System.out.println("IasLut/armStateLut printing complete!");
		
		data.write(	"\n\t/**\n\t * {Object} Data type look up table.\n\t *\n\t * @description Shows length of used data types in octets, name, id, "+
					"and if the data type is 'analog', 'discrete or none of these.\n\t */\n\tvar dataTypeLut = [{\n\n\t\tname: 'NO_DATA',\n\t\tid: 0x00," +
					"\n\t\toctets: 0,\n\t\tad: '-'\n\t}, {\n\n\t\tname: 'DATA8',\n\t\tid: 0x08,\n\t\toctets: 1,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'DATA16'"+
					",\n\t\tid: 0x09,\n\t\toctets: 2,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'DATA24',\n\t\tid: 0x0a,\n\t\toctets: 3,\n\t\tad: 'D'\n\t}, {" +
					"\n\n\t\tname: 'DATA32',\n\t\tid: 0x0b,\n\t\toctets: 4,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'DATA40',\n\t\tid: 0x0c,\n\t\toctets: 5,\n" +
					"\t\tad: 'D'\n\t}, {\n\n\t\tname: 'DATA48',\n\t\tid: 0x0d,\n\t\toctets: 6,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'DATA56',\n\t\tid: 0x0e," +
					"\n\t\toctets: 7,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'DATA64',\n\t\tid: 0x0f,\n\t\toctets: 8,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: " +
					"'BOOLEAN',\n\t\tid: 0x10,\n\t\toctets: 1,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'BITMAP8',\n\t\tid:0x18,\n\t\toctets: 1,\n\t\tad: 'D'" +
					"\n\t}, {\n\n\t\tname: 'BITMAP16',\n\t\tid: 0x19,\n\t\toctets: 2,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'BITMAP24',\n\t\tid: 0x1a,\n\t\toctets" +
					": 3,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'BITMAP32',\n\t\tid: 0x1b,\n\t\toctets: 4,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'BITMAP40'" +
					",\n\t\tid: 0x1c,\n\t\toctets: 5,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'BITMAP48',\n\t\tid: 0x1d,\n\t\toctets: 6,\n\t\tad: 'D'\n\t" +
					"}, {\n\n\t\tname: 'BITMAP56',\n\t\tid: 0x1e,\n\t\toctets: 7,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'BITMAP64',\n\t\tid: 0x2f,\n\t\toctets: 8," +
					"\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'INT8U',\n\t\tid: 0x20,\n\t\toctets: 1,\n\t\tad: 'A',\n\t\tinvalidNum: 0xff\n\t}, {\n\n\t\t" +
					"name: 'INT16U',\n\t\tid: 0x21,\n\t\toctets: 2,\n\t\tad: 'A',\n\t\tinvalidNum: 0xffff\n\t}, {\n\n\t\tname: 'INT24U',\n\t\tid: 0x22,\n\t\toctets: 3," +
					"\n\t\tad: 'A',\n\t\tinvalidNum: 0xffffff\n\t}, {\n\n\t\tname: 'INT32U',\n\t\tid: 0x23,\n\t\toctets: 4,\n\t\tad: 'A',\n\t\tinvalidNum" +
					": 0xffffffff\n\t}, {\n\n\t\tname: 'INT40U',\n\t\tid: 0x24,\n\t\toctets: 5,\n\t\tad: 'A',\n\t\tinvalidNum: 0xffffffffff\n\t}, {" +
					"\n\n\t\tname: 'INT48U',\n\t\tid: 0x25,\n\t\toctets: 6,\n\t\tad: 'A',\n\t\tinvalidNum: 0xffffffffffff\n\t}, {\n\n\t\tname: 'INT56U'," +
					"\n\t\tid: 0x26,\n\t\toctets: 7,\n\t\tad: 'A',\n\t\tinvalidNum: 0xffffffffffffff\n\t}, {\n\n\t\tname: 'INT64U',\n\t\tid: 0x27,\n\t\t" +
					"octets: 8,\n\t\tad: 'A',\n\t\tinvalidNum: 0xffffffffffffffff\n\t}, {\n\n\t\tname: 'INT8S',\n\t\tid: 0x28,\n\t\toctets: 1,\n\t\tad: 'A'," +
					"\n\t\tinvalidNum: 0x80\n\t}, {\n\n\t\tname: 'INT16S',\n\t\tid: 0x29,\n\t\toctets: 2,\n\t\tad: 'A',\n\t\tinvalidNum: 0x8000\n\t}, {" +
					"\n\n\t\tname: 'INT24S',\n\t\tid: 0x2a,\n\t\toctets: 3,\n\t\tad: 'A',\n\t\tinvalidNum: 0x800000\n\t}, {\n\n\t\tname: 'INT32S',\n\t\tid: " +
					"0x2b,\n\t\toctets: 4,\n\t\tad: 'A',\n\t\tinvalidNum: 0x80000000\n\t}, {\n\n\t\tname: 'INT40S',\n\t\tid: 0x2c,\n\t\toctets: 5,\n\t\tad: 'A'" +
					",\n\t\tinvalidNum: 0x8000000000\n\t}, {\n\n\t\tname: 'INT48S',\n\t\tid: 0x2d,\n\t\toctets: 6,\n\t\tad: 'A',\n\t\tinvalidNum: 0x800000000000" +
					"\n\t}, {\n\n\t\tname: 'INT56S',\n\t\tid: 0x2e,\n\t\toctets: 7,\n\t\tad: 'A',\n\t\tinvalidNum: 0x80000000000000\n\t}, {\n\n\t\t" +
					"name: 'INT64S',\n\t\tid: 0x2f,\n\t\toctets: 8,\n\t\tad: 'A',\n\t\tinvalidNum: 0x8000000000000000\n\t}, {\n\n\t\tname: 'ENUM8',\n\t\tid: " +
					"0x30,\n\t\toctets: 1,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'ENUM16',\n\t\tid: 0x31,\n\t\toctets: 2,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: " +
					"'FLOAT16',\n\t\tid: 0x38,\n\t\toctets: 2,\n\t\tad: 'A',\n\t\tinvalidNum: '-'\n\t}, {\n\n\t\tname: 'FLOAT32',\n\t\tid: 0x39,\n\t\toctets: " +
					"4,\n\t\tad: 'A',\n\t\tinvalidNum: '-'\n\t}, {\n\n\t\tname: 'FLOAT64',\n\t\tid: 0x3a,\n\t\toctets: 8,\n\t\tad: 'A',\n\t\tinvalidNum: '-'" +
					"\n\t}, {\n\n\t\tname: 'OCTET_STRING',\n\t\tid: 0x41,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'CHAR_STRING',\n\t\tid: 0x42,\n\t\tad: 'D'\n\t}, {" +
					"\n\n\t\tname: 'LONG_OCTET_STRING',\n\t\tid: 0x43,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'LONG_CHAR_STRING',\n\t\tid: 0x44,\n\t\tad: 'D'" +
					"\n\t}, {\n\n\t\tname: 'TIME_OF_DAY',\n\t\tid: 0xe0,\n\t\toctets: 4,\n\t\tad: 'A',\n\t\tinvalidNum: 0xffffffff\n\t}, {\n\n\t\tname: " +
					"'DATE',\n\t\tid: 0xe1,\n\t\toctets: 4,\n\t\tad: 'A',\n\t\tinvalidNum: 0xffffffff\n\t}, {\n\n\t\tname: 'UTC_TIME',\n\t\tid: 0xe2," +
					"\n\t\toctets: 4,\n\t\tad: 'A',\n\t\tinvalidNum: 0xffffffff\n\t}, {\n\n\t\tname: 'CLUSTER_ID',\n\t\tid: 0xe8,\n\t\toctets: 2,\n\t\tad: 'D'\n\t" +
					"}, {\n\n\t\tname: 'ATTRIBUTE_ID',\n\t\tid: 0xe9,\n\t\toctets: 2,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'BACNET_OID',\n\t\tid: 0xea" +
					",\n\t\toctets: 4,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: 'IEEE_ADDRESS',\n\t\tid: 0xf0,\n\t\toctets: 8,\n\t\tad: 'D'\n\t}, {\n\n\t\tname: " +
					"'SECURITY_KEY',\n\t\tid: 0xf1,\n\t\toctets: 16,\n\t\tad: '-'\n\t}];\n\n\t/**\n\t * {Object} Status enumeration look up table." +
					"\n\t *\n\t * @description Contains the status field and actual value.\n\t */\n\tvar statusLut = [");
		
		for(int a = 0; a < enumArr.length(); a++) {
			
			JSONObject enumObj  = enumArr.getJSONObject(a);
			
			if(enumObj.getString("name").equals("Status")) {
				
				JSONArray itemArr = enumObj.getJSONArray("item");
				
				for(int i = 0; i < itemArr.length(); i++) {
					
					JSONObject itemObj = itemArr.getJSONObject(i);
					
					data.write(	"{\n\n\t\tname: '" + itemObj.getString("name") + "',\n\t\tvalue: " + itemObj.getString("value") + "\n\t}");
					
					if(i < itemArr.length()-1) {
						
						data.write(", ");
					}
				}
			}
		}
		
		data.write(	"];\n\n\t/**\n\t * {Object} Argument data type look up table.\n\t *\n\t * @description Contains command argument" +
					" data type extension data.\n\t */\n\tvar argDataTypeLut = [");
		
		for(int b = 0; b < bitmapArr.length(); b++) {
			
			JSONObject bitmapObj = bitmapArr.getJSONObject(b);
			
			data.write("{\n\n\t\tname: '" + bitmapObj.getString("name") + "',\n\t\ttype: '" + bitmapObj.getString("type") + "'\n\t}, ");
		}
		for(int b = 0; b < enumArr.length(); b++) {
			
			JSONObject enumObj = enumArr.getJSONObject(b);
			
			data.write("{\n\n\t\tname: '" + enumObj.getString("name") + "',\n\t\ttype: '" + enumObj.getString("type") + "'\n\t}, ");
		}
		for(int b = 0; b < structArr.length(); b++) {
	
			JSONObject structObj = structArr.getJSONObject(b);
			
			data.write("{\n\n\t\tname: '" + structObj.getString("name") + "',\n\t\ttype: 'STRUCT'\n\t}");
			
			if(b < structArr.length()-1) {
				
				data.write(", ");
			}
		}
		
		data.write("];\n");
		
		
		for(int a = 0; a < attributes.size(); a++) {
			
			Attribute attrBuf = attributes.get(a);

			data.write( "\n\t/**\n\t * {Object} " + attrBuf.name.substring(0, 1).toUpperCase() +
						attrBuf.name.substring(1) + " attribute.\n\t *\n\t * @description Contains " + 
						attrBuf.name + " attribute data.\n\t */\n\tvar " + convertStr(attrBuf.name, true) +
						"Attribute = {\n\n\t\tclusterId: " + attrBuf.clusterId + ",\n\t\t" +
						"name: '" + attrBuf.name + "',\n\t\tserver: " + attrBuf.server +
						",\n\t\tattributeId: " + attrBuf.attributeId + ",\n\t\ttype: '" +
						attrBuf.type + "',\n\t\twritable: " + attrBuf.writable + ",\n\t\t" +
						"mandatory: " + attrBuf.mandatory + "\n\t};\n");
		}
		
		bar.updateBar(26);
		System.out.println("Attribute objects printing complete!");
		
		for(int c = 0; c < commands.size(); c++) {
			
			Command commBuf = commands.get(c);
			
			data.write(	"\n\t/**\n\t * {Object} " + WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "") + " command.\n\t *\n\t * " +
						"@description Contains " + WordUtils.uncapitalize(commBuf.name) +
						" command data.\n\t */" + "\n\tvar " + WordUtils.uncapitalize(WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "")) + 
						"Command = {\n" + "\n\t\tcommandClusterId: " + commBuf.commandClusterId + 
						",\n\t\tserver: " +	commBuf.server + ",\n\t\tcommandId: " + commBuf.commandId + 
						",\n\t\tname: '" + commBuf.name + "',\n\t\tmandatory: " + commBuf.mandatory + 
						",\n\t\targ: [");
			
			for(int a = 0; a < commBuf.arg.size(); a++) {
				
				Arg argBuf = commBuf.arg.get(a);
				
				data.write(	"{\n\n\t\t\tname: '" + argBuf.name + "',\n\t\t\ttype: '" + argBuf.type +"',\n\t\t\tarray: " + argBuf.array + ""); 
								
//				
//				boolean check = false;
//				
//				for(int q = 0; q<structArr.length(); q++) {
//					
//					JSONObject structObj = structArr.getJSONObject(q);
//					
//					if(argBuf.type.equals(structObj.getString("name"))) {
//						
//						check = true;
//					}
//				}
//				for(int q = 0; q<bitmapArr.length(); q++) {
//					
//					JSONObject bitmapObj = bitmapArr.getJSONObject(q);
//					
//					if(argBuf.type.equals(bitmapObj.getString("name"))) {
//						
//						check = true;
//					}
//				}
//				for(int q = 0; q<enumArr.length(); q++) {
//					
//					JSONObject enumObj = enumArr.getJSONObject(q);
//					
//					if(argBuf.type.equals(enumObj.getString("name"))) {
//						
//						check = true;
//					}
//				}
//				
//				if(check == false) {
//					
//					System.out.println(argBuf.type);
//				}
				
				if(argBuf.array.equals("true")) {		
					
					data.write(",\n\t\t\targ: [");
					
					for(int s = 0; s<structArr.length(); s++) {
						
						JSONObject structObj = structArr.getJSONObject(s);
						
						if(argBuf.type.equals(structObj.getString("name"))) {
							
							JSONArray itemArr = structObj.getJSONArray("item");
							
							for(int i = 0; i < itemArr.length(); i++) {
								
								JSONObject itemObj = itemArr.getJSONObject(i);
								
								data.write(	"{\n\n\t\t\t\tname: '" + itemObj.getString("name") + "',\n\t\t\t\ttype: '" + itemObj.getString("type") +
											"'\n\t\t\t}");
								
								if(i < itemArr.length()-1) {
									
									data.write(", ");
								}
							}
						}
					}
					
					data.write("]\n\t\t}");
				}
				else {
					
					data.write("\n\t\t}");
				}
				
				if(a < commBuf.arg.size()-1) {
					
					data.write(", ");
				}
			}
			
			data.write("]\n\t};\n");
		}
		
		bar.updateBar(30);
		System.out.println("Command objects printing complete!");
		
		for(int c = 0; c < globalCommands.size(); c++) {
			
			GlobalCommand globalCommBuf = globalCommands.get(c);
			
			data.write( "\n\t/**\n\t * {Object} " + globalCommBuf.name + " global command.\n\t *\n\t * @description Contains " +
						WordUtils.uncapitalize(globalCommBuf.name) + " global command data.\n\t */\n\tvar " + WordUtils.uncapitalize(globalCommBuf.name) + 
						"GlobalCommand = {\n\n\t\tglobalCommandId: " + globalCommBuf.globalCommandId + ",\n\t\tname: '" +
						globalCommBuf.name + "',\n\t\tclientToServer: " + globalCommBuf.clientToServer + ",\n\t\tserverToClient: " +
						globalCommBuf.serverToClient + ",\n\t\targ: [");
			
			for(int a = 0; a < globalCommBuf.arg.size(); a++) {
				
				Arg argBuf = globalCommBuf.arg.get(a);
				
				data.write(	"{\n\n\t\t\tname: '" + argBuf.name + "',\n\t\t\ttype: '" + argBuf.type + 
							"',\n\t\t\tarray: " + argBuf.array + "\n\t\t}");
				
				if(a < globalCommBuf.arg.size()-1) {
					
					data.write(", ");
				}
			}
			
			data.write("]\n\t};\n");
		}
		
		System.out.println("Global command objects printing complete!");
		
		data.write( "\n\t/**\n\t * {Function} Returns cluster look up table.\n\t *\n\t * @return " + 
					"{Object} clusterLut.\n\t */\n\tvar getClusterLut = function() {\n\n\t\t" +
					"return clusterLut;\n\t}\n\n\t/**\n\t * {Function} Returns log cluster look" +
					" up table.\n\t *\n\t * @return {Object} logClusterLut.\n\t */\n\tvar " +
					"getLogClusterLut = function() {\n\n\t\treturn logClusterLut;\n\t}\n" +
					"\n\t/**\n\t * {Function} Returns intruder alarm systems" + 
					" look up table.\n\t *\n\t * @return {Object} iasLut.\n\t */\n\tvar getIasLut " +
					"= function() {\n\n\t\treturn iasLut;\n\t}\n\n\t/**\n\t * {Function} Returns" +
					" arming status look up table.\n\t *\n\t * @return {Object} armStateLut.\n\t */" +
					"\n\tvar getArmStateLut = function() {\n\n\t\treturn armStateLut;\n\t}\n\n\t/**" +
					"\n\t * {Function} Returns data type look up table.\n\t *\n\t * @return {Object}" +
					" dataTypeLut.\n\t */\n\tvar getDataTypeLut = function() {\n\n\t\treturn dataTypeLut;" +
					"\n\t}\n\n\t/**\n\t * {Function} Returns status look up table.\n\t *\n\t * " +
					"@return {Object} statusLut.\n\t */\n\tvar getStatusLut = function() {\n\n\t\t" +
					"return statusLut;\n\t}\n\n\t/**\n\t * {Function} Returns argument data type" +
					"look up table.\n\t *\n\t * @return argDataTypeLut.\n\t */\n\tvar getArgDataTypeLut " +
					"= function() {\n\n\t\treturn argDataTypeLut;\n\t}\n");
		
		System.out.println("GetLuts functions printing complete!");
		
		for(int a = 0; a < attributes.size(); a++) {
			
			Attribute attrBuf = attributes.get(a);
			
			data.write( "\n\t/**\n\t * {Function} Returns " + attrBuf.name + " attribute data.\n\t" +
						" *\n\t * @return {Object} " + convertStr(attrBuf.name, true) + "Attribute." +
						"\n\t */\n\tvar get" + convertStr(attrBuf.name, false) + "Attribute = " +
						"function() {\n\n\t\treturn " + convertStr(attrBuf.name, true) + 
						"Attribute;\n\t}\n");
		}
		
		bar.updateBar(32);
		System.out.println("GetAttribute functions printing complete!");
		
		for(int c = 0; c < commands.size(); c++) {
			
			Command commBuf = commands.get(c);
			
			data.write( "\n\t/**\n\t * {Function} Returns " + WordUtils.uncapitalize(commBuf.name) +
						" command data.\n\t *\n\t * @return {Object} " + WordUtils.uncapitalize(commBuf.name.replaceAll("\\s",  "")) +
						"Command.\n\t */\n\tvar get" + WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "") + "Command = function() {\n\n\t\t" +
						"return " + WordUtils.uncapitalize(WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "")) + "Command;\n\t}\n");
		}

		bar.updateBar(34);
		System.out.println("GetCommand functions printing complete!");
		
		for(int c = 0; c < globalCommands.size(); c++) {
			
			GlobalCommand globalCommBuf = globalCommands.get(c);
			
			data.write( "\n\t/**\n\t * {Function} Returns " + WordUtils.uncapitalize(globalCommBuf.name) + " global command data." +
						"\n\t *\n\t * @return {Object} " + WordUtils.uncapitalize(globalCommBuf.name) + "GlobalCommand.\n\t */\n\t" +
						"var get" + globalCommBuf.name + "GlobalCommand = function() {\n\n\t\treturn " + WordUtils.uncapitalize(globalCommBuf.name) + 
						"GlobalCommand;\n\t}\n");
		}
		
		System.out.println("GetGlobalCommand functions printing complete!");
		
		data.write( "\n\treturn {\n\n\t\tgetClusterLut: getClusterLut,\n\t\tgetLogClusterLut:" +
					" getLogClusterLut,\n\t\tgetIasLut: getIasLut,\n\t\tgetArmStateLut: getArmStateLut,\n\t\tgetDataTypeLut: "+
					"getDataTypeLut,\n\t\tgetStatusLut: getStatusLut,\n\t\tgetArgDataTypeLut: getArgDataTypeLut");
		
		for(int a = 0; a < attributes.size(); a++) {
			
			Attribute attrBuf = attributes.get(a);
			
			data.write( ",\n\t\tget" + convertStr(attrBuf.name, false) + "Attribute: " +
						"get" + convertStr(attrBuf.name, false) + "Attribute");
		}
		
		bar.updateBar(36);
		
		for(int c = 0; c < commands.size(); c++) {
			
			Command commBuf = commands.get(c);
			
			data.write( ",\n\t\tget" + WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "") + "Command: get" + 
					WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "") + "Command");
		}
		
		for(int c = 0; c < globalCommands.size(); c++) {
			
			GlobalCommand globalCommBuf = globalCommands.get(c);
			
			data.write( ",\n\t\tget" + globalCommBuf.name + "GlobalCommand: get" + 
						globalCommBuf.name + "GlobalCommand");
		}
		
		bar.updateBar(38);
		System.out.println("Return printing complete!");
		
		data.write("\n\t};\n});");
		
		System.out.println("ZigbeeLutService printing complete!");
	}
	
	/**
	 * Prints sdkDoc.service.js file.
	 * 
	 * @param path
	 * @param jsonStr
	 * @throws IOException
	 * @throws JSONException
	 */
	public static void printSdkDocService(String path, String jsonStr, String typesStr) throws IOException, JSONException {
		
		ArrayList<Attribute> attributes = parseAttributes(jsonStr);
		ArrayList<Command> commands = parseCommands(jsonStr);
		
		JSONObject typesJson = new JSONObject(typesStr.substring(typesStr.indexOf('{')));
		JSONObject typesObj = typesJson.getJSONObject("types");
		JSONArray structArr = typesObj.getJSONArray("struct");
		
		String currentPath = path + "\\sdkDoc.service.js";
		
		File delFile = new File(currentPath);
		delFile.delete();
		
		WriteFile data = new WriteFile(currentPath, true);
		
		data.write( "/**\n * Service handling attribute documentation storage.\n *\n * @return\t{Function}" +
					" getAttributes(); Returns attributes.\n *\t\t\t{Function} getCommands(); Returns commands.\n" +
					" *\t\t\t{Function} getIsCollapsed(); Returns isCollapsed.\n" +
					" */\nlanSdkDocModule.service('lanSdkDocService', "+
					"function() {\n\n\t/**\n\t * {Object} attributes object.\n\t *\n\t * @description " +
					"This variable contains all attribute documentation information as an array.\n\t */\n\t" +
					"var attributes = [");
		
		bar.updateBar(45);
		for(int a = 0; a < attributes.size(); a++) {
			
			Attribute attrBuf = attributes.get(a);
			
			data.write(	"{\n\n\t\tlabel: " + a + ",\n\t\tnameFun: '" + convertStr(attrBuf.name, false) + 
						"',\n\t\tnameObj: '" + convertStr(attrBuf.name, true) + "',\n\t\tclusterId: " +
						attrBuf.clusterId + ",\n\t\tname: '" + attrBuf.name + "',\n\t\tserver: " + 
						attrBuf.server + ",\n\t\tattributeId: " + attrBuf.attributeId + ",\n\t\t" +
						"type: '" + attrBuf.type + "',\n\t\twritable: " + attrBuf.writable + ",\n\t\t" +
						"mandatory: " + attrBuf.mandatory + "\n\t}");
			
			if(a < attributes.size()-1) {
				
				data.write(", ");
			}
		}
		
		
		data.write(	"];\n\n\t/**\n\t * {Object} commands object.\n\t *\n\t * @description This variable " +
					"contains all command documentation information as an array.\n\t */\n\t" +
					"var commands = [");
		bar.updateBar(55);
		for(int c = 0; c < commands.size(); c++) {
			
			Command commBuf = commands.get(c);
			
			data.write(	"{\n" + "\n\t\tlabel: " + c + ",\n\t\tnameFun: '" + WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "") +
						"',\n\t\tnameObj: '" + WordUtils.uncapitalize(WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "")) + "'," +
						"\n\t\tcommandClusterId: " + commBuf.commandClusterId + 
						",\n\t\tserver: " +	commBuf.server + ",\n\t\tcommandId: " + commBuf.commandId + 
						",\n\t\tname: '" + commBuf.name + "',\n\t\tmandatory: " + commBuf.mandatory + 
						",\n\t\targ: [");

			for(int a = 0; a < commBuf.arg.size(); a++) {
				
				Arg argBuf = commBuf.arg.get(a);
				
				data.write(	"{\n\n\t\t\tlabel: " + a + ",\n\t\t\tname: '" + argBuf.name + "',\n\t\t\ttype: '" + argBuf.type + 
							"',\n\t\t\tarray: " + argBuf.array + ",\n\t\t\targ: [");
				
				if(argBuf.array.equals("true")) {		
										
					for(int s = 0; s<structArr.length(); s++) {
						
						JSONObject structObj = structArr.getJSONObject(s);
						
						if(argBuf.type.equals(structObj.getString("name"))) {
							
							JSONArray itemArr = structObj.getJSONArray("item");
							
							for(int i = 0; i < itemArr.length(); i++) {
								
								JSONObject itemObj = itemArr.getJSONObject(i);
								
								data.write(	"{\n\n\t\t\t\tname: '" + itemObj.getString("name") + "',\n\t\t\t\ttype: '" + itemObj.getString("type") +
											"',\n\t\t\t\tlabel: "+i+"\n\t\t\t}");
								
								if(i < itemArr.length()-1) {
									
									data.write(", ");
								}
							}
						}
					}
				}
				data.write("]\n\t\t}");
				
				if(a < commBuf.arg.size()-1) {
					
					data.write(", ");
				}
			}
			
			data.write("]\n\t}");
			
			if(c < commands.size()-1) {
				
				data.write(", ");
			}
		}
		bar.updateBar(65);
		data.write(	"];\n\n\t/**\n\t * {Object} Collapse data.\n\t *\n\t * @description Contains collapsible items."+
					"\n\t */\n\tvar isCollapsed = {\n\n\t\tsdk: true,\n\t\tnet2gridApiModule: true,\n\t\t" +
					"ipAddressService: true,\n\t\teuiService: true,\n\t\tgeneralDevicesService: true,\n\t\tgetGeneralDevices: true," +
					"\n\t\tgeneralDevices: true,\n\t\tsetupGeneralDevices: true,\n\t\tiasDevicesService: true,\n\t\t" +
					"getSensorDevices: true,\n\t\tsensorDevices: true,\n\t\tzigbeeLutService: true,\n\t\t" +
					"getClusterLut: true,\n\t\tgetLogClusterLut: true,\n\t\tgetIasLut: true,\n\t\t" +
					"getArmStateLut: true,\n\t\tutilityService: true,\n\t\tradioFrequencyPlugService: true,\n\t\tgetImpulsPlug: true," +
					"\n\t\tgetBrennenstuhlRCS1000NPlug: true,\n\t\tgetClickOnClickOffAPA22300RPlug: true,\n\t\tgetIntertechnoITR1500Plug" +
					":true,\n\t\tgetElroHomeEasyHE877Plug: true,\n\t\tgetSiemensRC018Plug: true,\n\t\tgetDataTypeLut: true" +
					",\n\t\tgetStatusLut: true,\n\t\tgetArgDataTypeLut: true,");
		
		for(int a = 0; a < attributes.size(); a++) {
			
			Attribute attrBuf = attributes.get(a);
			
			data.write("\n\t\tget" + convertStr(attrBuf.name, false) + "Attribute: true,");
		}
		bar.updateBar(70);
		for(int c = 0; c < commands.size(); c++) {
			
			Command commBuf = commands.get(c);
			
			data.write("\n\t\tget" + WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "") + "Command: true");
			
			if(c < commands.size()-1) {
				
				data.write(",");
			}
		}
		bar.updateBar(75);
		data.write(	"\n\t};\n\n\t/**\n\t * {Function} Returns commands.\n\t *\n\t * @return {Array}" +
					" commands.\n\t */\n\tvar getCommands = function() {\n\n\t\treturn commands;" +
					"\n\t}" +
					"\n\n\t/**\n\t * {Function} Returns attributes.\n\t *\n\t * @return {Array}" +
					" attributes.\n\t */\n\tvar getAttributes = function() {\n\n\t\treturn attributes;" +
					"\n\t}\n\n\t/**\n\t * {Function} Returns isCollapsed object.\n\t *\n\t * @returns " +
					"{Object} isCollapsed.\n\t */\n\tvar getIsCollapsed = function() {\n\n\t\treturn " +
					"isCollapsed;\n\t}\n\n\treturn {\n\n\t\tgetAttributes: getAttributes,\n\t\tgetCommands: "+
					"getCommands,\n\t\tgetIsCollapsed: getIsCollapsed\n\t};\n});");
	}
	
	/**
	 * Prints sdkIndex.html
	 * 
	 * @param path
	 * @param jsonStr
	 * @throws IOException
	 * @throws JSONException
	 */
	public static void printSdkIndex(String path, String jsonStr) throws IOException, JSONException {
	
		ArrayList<Attribute> attributes = parseAttributes(jsonStr);
		ArrayList<Command> commands = parseCommands(jsonStr);
		
		String currentPath = path + "\\sdkIndex.html";
		
		File delFile = new File(currentPath);
		delFile.delete();
		
		WriteFile data = new WriteFile(currentPath, true);
		
		data.write(	"<!DOCTYPE html>\n<html data-ng-app='lanSdkDocModule'>\n\t<head>\n\t\t<title>Net2Grid LAN SDK</title>" + 
					"\n\t\t<meta charset='utf-8'>\n\t\t<link type='text/css' rel='stylesheet' href='css/droid.sans.css'" +
					"></link>\n\t\t<link type='text/css' rel='stylesheet' href='css/highlight.default.css'></link>" +
					"\n\t\t<link type='text/css' rel='stylesheet' href='css/index.css'></link>\n\t\t<link type='text/css'" +
					" rel='stylesheet' href='css/bootstrap.min.css'></link>\n\t\t<link type='text/css' rel='stylesheet'" +
					" href='css/bootstrap-theme.min.css'></link>\n\n\t\t<script src='scripts/angular/angular.min.js'>" + 
					"</script>\n\t\t<script src='scripts/angular/angular-ui-router.min.js'></script>\n\t\t<script src=" +
					"'scripts/angular/ui-bootstrap-tpls-0.12.1.min.js'></script>\n\n\t\t<script src='scripts/net2gridApi/net2gridApi.module.js'></script>\n\t\t"+
					"<script src='scripts/net2gridApi/zigbeeLut.service.js'></script>\n\n\t\t<script src='scripts/lanSdkDoc/lanSdkDoc.module.js'" +
					"></script>\n\t\t<script src='scripts/lanSdkDoc/lanSdkDoc.config.js'></script>\n\t\t<script src='scripts/lanSdkDoc/" +
					"sdkDoc.service.js'></script>\n\t\t<script src='scripts/lanSdkDoc/lanSdkDoc.ctrl.js'></script>" +
					"\n\t</head>\n\t<body data-ng-controller='lanSdkDocCtrl'>\n\t\t<div id='header'>\n\t\t\t<div class='api-doc-wrap'>" +
					"\n\t\t\t\t<a id='logo'>\n\t\t\t\t\tNET2GRID LAN SDK\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div>" +
					"\n\t\t\t<div id='table-of-content'>\n\t\t\t\t<h1>Table of contents</h1>\n\t\t\t\t<hr>\n\t\t\t\t<p id='sdk'>" +
					"\n\t\t\t\t\t<span data-ng-click='isCollapsed.sdk = !isCollapsed.sdk' class='glyphicon' data-ng-class=\"{'glyphicon-triangle-bottom': " +
					"!isCollapsed.sdk, 'glyphicon-triangle-right': isCollapsed.sdk}\"></span>\n\t\t\t\t\t<i ui-sref='sdk'>SDK</i>" +
					"\n\t\t\t\t</p>\n\t\t\t\t<div collapse='isCollapsed.sdk'>\n\t\t\t\t\t<p id='net2gridApiModule'>\n\t\t\t\t\t\t" +
					"<span data-ng-click='isCollapsed.net2gridApiModule = !isCollapsed.net2gridApiModule' class='glyphicon' data-ng-class=" +
					"\"{'glyphicon-triangle-bottom': !isCollapsed.net2gridApiModule, 'glyphicon-triangle-right': isCollapsed.net2gridApiModule}\"" +
					"></span>\n\t\t\t\t\t\t<i ui-sref='net2gridApiModule'>net2gridApiModule</i>\n\t\t\t\t\t</p>\n\t\t\t\t\t<div " +
					"collapse='isCollapsed.net2gridApiModule'>\n\t\t\t\t\t\t<p id='services'>\n\t\t\t\t\t\t\t<span data-ng-click=" +
					"'isCollapsed.ipAddresService = !isCollapsed.ipAddressService' class='glyphicon' data-ng-class=\"{'glyphicon-triangle-bottom': " +
					"!isCollapsed.ipAddressService, 'glyphicon-triangle-right': isCollapsed.ipAddressService}\"></span>\n\t\t\t\t\t\t\t<i ui-sref='ipAddressService'>" +
					"ipAddressService</i>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div collapse='isCollapsed.ipAddressService'>\n\t\t\t\t\t\t\t<p id='functionsNoContent'>" +
					"\n\t\t\t\t\t\t\t\t<i ui-sref='getIp'>getIp()</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p id='functionsNoContent'>" +
					"\n\t\t\t\t\t\t\t\t<i ui-sref='setIp'>setIp(ip)</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p id='services'>" +
					"\n\t\t\t\t\t\t\t<span data-ng-click='isCollapsed.utilityService = !isCollapsed.utilityService' class='glyphicon' data-ng-class" +
					"=\"{'glyphicon-triangle-bottom': !isCollapsed.utilityService, 'glyphicon-triangle-right': isCollapsed.utilityService}\"></span>" +
					"\n\t\t\t\t\t\t\t<i ui-sref='utilityService'>utilityService</i>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div collapse='isCollapsed.utilityService'>" +
					"\n\t\t\t\t\t\t\t<p id='functionsNoContent'>\n\t\t\t\t\t\t\t\t<i ui-sref='euiToHex'>euiToHex(euiDec)</i>\n\t\t\t\t\t\t\t</p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"getEndPoint\" >getEndPoint(clusterId, endPoints)</i></p>"+
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"checkAttrAvailability\" >checkAttrAvailability(clusterId, attributes)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"logGlobalCommandClusterError\" >logGlobalCommandClusterError(clusterId)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"getDataTypeLength\" >getDataTypeLength(id)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"convertPayload\" >convertPayload(payload, length)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"argArrayCheck\" >argArrayCheck(command, args)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"checkWritability\" >checkWritability(attributes)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"createWriteAttributesPayload\" >createWriteAttributesPayload(attributes, value)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"getStatus\" >getStatus(value)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"getDataTypeName\" >getDataTypeName(id)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"createReadReportingConfigurationPayload\" >createReadReportingConfigurationPayload(attributes, directions)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"getDataTypeAdFromId\" >getDataTypeAdFromId(id)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"parsePayloadNum\" >parsePayloadNum(payload)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"getDataTypeInvalidNumber\" >getDataTypeInvalidNumber(id)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"createConfigureReportingSendPayload\" >createConfigureReportingSendPayload(attributes, timeouts)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"getDirectionString\" >getDirectionString(dirNum)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"checkReportableChangeNeeded\" >checkReporatbleChangeNeeded(attributes, reportableChange)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"getDataTypeAdFromName\" >getDataTypeAdFromName(name)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"getDataTypeIdFromName\" >getDataTypeIdFromName(name)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"createConfigureReportingReceivePayload\" >createConfigureReportingReceivePayload(attributes, minInterval, maxInterval, reportableChange)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"createRadioFrequencyPlugPayload\" >createRadioFrequencyPlugPayload(plug, systemCode, unitCode, value, group)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"createWriteCommandPayload\" >createWriteCommandPayload(args, command)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"checkArmState\" >checkArmState(armState, mask)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"convertMaskType\" >convertMaskType(mask)</i></p>" +
					"\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p id='services'>\n\t\t\t\t\t\t\t<span data-ng-click='isCollapsed.generalDevicesService" +
					" = !isCollapsed.generalDevicesService' class='glyphicon' data-ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed" +
					".generalDevicesService, 'glyphicon-triangle-right': isCollapsed.generalDevicesService}\"></span>\n\t\t\t\t\t\t\t" +
					"<i ui-sref='generalDevicesService'>generalDevicesService</i>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div collapse='isCollapsed" +
					".generalDevicesService'>\n\t\t\t\t\t\t\t<p id='functions'>\n\t\t\t\t\t\t\t\t<span data-ng-click='isCollapsed.getGeneralDevices =" +
					" !isCollapsed.getGeneralDevices' class='glyphicon' data-ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.getGeneralDevices, " +
					"'glyphicon-triangle-right': isCollapsed.getGeneralDevices}\"></span>\n\t\t\t\t\t\t\t\t<i ui-sref='getGeneralDevices'>getGeneralDevices()" +
					"</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div collapse='isCollapsed.getGeneralDevices'>\n\t\t\t\t\t\t\t\t<p id='objects'>\n\t\t\t\t\t\t\t\t\t" +
					"<span data-ng-click='isCollapsed.generalDevices = !isCollapsed.generalDevices' class='glyphicon' data-ng-class=\"{'glyphicon-triangle-bottom': " +
					"!isCollapsed.generalDevices, 'glyphicon-triangle-right': isCollapsed.generalDevices}\"></span>\n\t\t\t\t\t\t\t\t\t" +
					"<i ui-sref='generalDevices'>generalDevices</i>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<div collapse='isCollapsed.generalDevices'>" +
					"\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='logAvailableAttributes'>logAvailableAttributes()</i></p>\n\t\t\t\t\t\t\t\t\t" +
					"<p id='methods'><i ui-sref='logAvailableCommands'>logAvailableCommands()</i></p>\n\t\t\t\t\t\t\t\t\t<p id='methods'>" +
					"<i ui-sref='logDeviceInfo'>logDeviceInfo()</i></p>\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='checkCluster'>" +
					"checkCluster(cluster)</i></p>\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='readAttributes'>readAttributes(clusterId, attributes)</i></p>" +
					"\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='writeCommand'>writeCommand(command, args)</i></p>"+
					"\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='writeAttributes'>writeAttributes(clusterId, attributes, value)</i></p>" +
					"\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='discoverAttributes'>discoverAttributes(clusterId)</i></p>" +
					"\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='configureReportingSend'>configureReportingSend(clusterId, attributes, timeouts)</i></p>" +
					"\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='configureReportingReceive'>configureReportingReceive(clusterId, attributes, minInterval, maxInterval, reportableChange)</i></p>" +
					"\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='readReportingConfiguration'>readReportingConfiguration(clusterId, attributes, direction)</i></p>" +
					"\n\t\t\t\t\t\t\t\t</div>" +
					"\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p id='functionsNoContent'><i ui-sref='setupGeneralDevices'>setupGeneralDevices()</i></p>" +
					"\n\t\t\t\t\t\t\t<p id='functionsNoContent'><i ui-sref='logAttributeContent'>logAttributeContent(attribute)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id='functionsNoContent'><i ui-sref='logCommandContent'>logCommandContent(command)</i></p>\n\t\t\t\t\t\t" +
					"</div>\n\t\t\t\t\t\t<p id='services'>\n\t\t\t\t\t\t\t<span data-ng-click='isCollapsed.iasDevicesService = !isCollapsed.iasDevicesService'" +
					" class='glyphicon' data-ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.iasDevicesService, 'glyphicon-triangle-right'" +
					": isCollapsed.iasDevicesService}\"></span>\n\t\t\t\t\t\t\t<i ui-sref='iasDevicesService'>iasDevicesService</i>\n\t\t\t\t\t\t</p>" +
					"\n\t\t\t\t\t\t<div collapse='isCollapsed.iasDevicesService'>\n\t\t\t\t\t\t\t<p id='functionsNoContent'><i ui-sref='getCode'>getCode()" +
					"</i></p>\n\t\t\t\t\t\t\t<p id='functionsNoContent'><i ui-sref='setCode'>setCode(newCode)</i></p>\n\t\t\t\t\t\t\t" +
					"<p id='functionsNoContent'><i ui-sref='getArmState'>getArmState()</i></p>\n\t\t\t\t\t\t\t<p id='functionsNoContent'>" +
					"<i ui-sref='setArmState'>setArmState(code, mode)</i></p>\n\t\t\t\t\t\t\t<p id='functions'>\n\t\t\t\t\t\t\t\t" +
					"<span data-ng-click='isCollapsed.getSensorDevices = !isCollapsed.getSensorDevices' class='glyphicon' data-ng-class=" +
					"\"{'glyphicon-triangle-bottom': !isCollapsed.getSensorDevices, 'glyphicon-triangle-right': isCollapsed.getSensorDevices}\"></span>" +
					"\n\t\t\t\t\t\t\t\t<i ui-sref='getSensorDevices'>getSensorDevices()</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div collapse='isCollapsed.getSensorDevices'>" +
					"\n\t\t\t\t\t\t\t\t<p id='objects'>\n\t\t\t\t\t\t\t\t\t<span data-ng-click='isCollapsed.sensorDevices = !isCollapsed.sensorDevices' class='glyphicon' " +
					"data-ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.sensorDevices, 'glyphicon-triangle-right': isCollapsed.sensorDevices}\"></span>\n" +
					"\t\t\t\t\t\t\t\t\t<i ui-sref='sensorDevices'>sensorDevices</i>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<div collapse='isCollapsed.sensorDevices'>" +
					"\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='getMask'>getMask()</i></p>\n\t\t\t\t\t\t\t\t\t<p id='methods'><i ui-sref='setMask'>setMask(code, mask)" +
					"</i></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p id='functionsNoContent'><i ui-sref='setupIasSensors'>" +
					"setupIasSensors()</i></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p id=\"services\">\n\t\t\t\t\t\t\t" +
					"<span ng-click=\"isCollapsed.radioFrequencyDevicesService = !isCollapsed.radioFrequencyDevicesService\" class=\"glyphicon\" ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.radioFrequencyDevicesService, 'glyphicon-triangle-right': isCollapsed.radioFrequencyDevicesService}\"></span>" +
					"\n\t\t\t\t\t\t\t<i ui-sref=\"radioFrequencyDevicesService\" >radioFrequencyDevicesService</i></p>\n\t\t\t\t\t\t" +
					"<div collapse=\"isCollapsed.radioFrequencyDevicesService\">" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"customPlug\" >customPlug(name, bitPeriod, protocol, systemCodeBitLength, unitCodeBitLength)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functionsNoContent\"><i ui-sref=\"radioFrequencyPlug\" >radioFrequencyPlug(plug, systemCode, unitCode, value, group)</i></p>" +
					"\n\t\t\t\t\t\t\t<p id=\"functions\"><span ng-click=\"isCollapsed.getImpulsPlug = !isCollapsed.getImpulsPlug\" class=\"glyphicon\" ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.getImpulsPlug, 'glyphicon-triangle-right': isCollapsed.getImpulsPlug}\"></span><i ui-sref=\"getImpulsPlug\" >getImpulsPlug()</i></p>" +
					"\n\t\t\t\t\t\t\t<div collapse=\"isCollapsed.getImpulsPlug\"><p id=\"objectsNoContent\"><i ui-sref=\"impulsPlug\" >impulsPlug</i></p></div>" +
					"\n\t\t\t\t\t\t\t<p id=\"functions\"><span ng-click=\"isCollapsed.getBrennenstuhlRCS1000NPlug = !isCollapsed.getBrennenstuhlRCS1000NPlug\" class=\"glyphicon\" ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.getBrennenstuhlRCS1000NPlug, 'glyphicon-triangle-right': isCollapsed.getBrennenstuhlRCS1000NPlug}\"></span><i ui-sref=\"getBrennenstuhlRCS1000NPlug\" >getBrennenstuhlRCS1000NPlug()</i></p>" +
					"\n\t\t\t\t\t\t\t<div collapse=\"isCollapsed.getBrennenstuhlRCS1000NPlug\"><p id=\"objectsNoContent\"><i ui-sref=\"brennenstuhlRCS1000NPlug\" >brennenstuhlRCS1000NPlug</i></p></div>"+
					"\n\t\t\t\t\t\t\t<p id=\"functions\"><span ng-click=\"isCollapsed.getClickOnClickOffAPA22300RPlug = !isCollapsed.getClickOnClickOffAPA22300RPlug\" class=\"glyphicon\" ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.getClickOnClickOffAPA22300RPlug, 'glyphicon-triangle-right': isCollapsed.getClickOnClickOffAPA22300RPlug}\"></span><i ui-sref=\"getClickOnClickOffAPA22300RPlug\" >getClickOnClickOffAPA22300RPlug()</i></p>" +
					"\n\t\t\t\t\t\t\t<div collapse=\"isCollapsed.getClickOnClickOffAPA22300RPlug\"><p id=\"objectsNoContent\"><i ui-sref=\"clickOnClickOffAPA22300RPlug\" >clickOnClickOffAPA22300RPlug</i></p></div>" +
					"\n\t\t\t\t\t\t\t<p id=\"functions\"><span ng-click=\"isCollapsed.getIntertechnoITR1500Plug = !isCollapsed.getIntertechnoITR1500Plug\" class=\"glyphicon\" ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.getIntertechnoITR1500Plug, 'glyphicon-triangle-right': isCollapsed.getIntertechnoITR1500Plug}\"></span><i ui-sref=\"getIntertechnoITR1500Plug\" >getIntertechnoITR1500Plug()</i></p>"+
					"\n\t\t\t\t\t\t\t<div collapse=\"isCollapsed.getIntertechnoITR1500Plug\"><p id=\"objectsNoContent\"><i ui-sref=\"intertechnoITR1500Plug\" >intertechnoITR1500Plug</i></p></div>"+
					"\n\t\t\t\t\t\t\t<p id=\"functions\"><span ng-click=\"isCollapsed.getElroHomeEasyHE877Plug = !isCollapsed.getElroHomeEasyHE877Plug\" class=\"glyphicon\" ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.getElroHomeEasyHE877Plug, 'glyphicon-triangle-right': isCollapsed.getElroHomeEasyHE877Plug}\"></span><i ui-sref=\"getElroHomeEasyHE877Plug\" >getElroHomeEasyHE877Plug()</i></p>" +
					"\n\t\t\t\t\t\t\t<div collapse=\"isCollapsed.getElroHomeEasyHE877Plug\"><p id=\"objectsNoContent\"><i ui-sref=\"elroHomeEasyHE877Plug\" >elroHomeEasyHE877Plug</i></p></div>"+
					"\n\t\t\t\t\t\t\t<p id=\"functions\"><span ng-click=\"isCollapsed.getSiemensRC018Plug = !isCollapsed.getSiemensRC018Plug\" class=\"glyphicon\" ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.getSiemensRC018Plug, 'glyphicon-triangle-right': isCollapsed.getSiemensRC018Plug}\"></span><i ui-sref=\"getSiemensRC018Plug\" >getSiemensRC018Plug()</i></p>"+
					"\n\t\t\t\t\t\t\t<div collapse=\"isCollapsed.getSiemensRC018Plug\"><p id=\"objectsNoContent\"><i ui-sref=\"siemensRC018Plug\" >siemensRC018Plug</i></p></div></div>" +
					"\n\t\t\t\t\t\t<p id='services'>\n\t\t\t\t\t\t\t<span data-ng-click='isCollapsed.zigbeeLutService " +
					"= !isCollapsed.zigbeeLutService' class='glyphicon' data-ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.zigbeeLutService" +
					", 'glyphicon-triangle-right': isCollapsed.zigbeeLutService}\"></span>\n\t\t\t\t\t\t\t<i ui-sref='zigbeeLutService'>zigbeeLutService</i>" +
					"\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div collapse='isCollapsed.zigbeeLutService'>\n\t\t\t\t\t\t\t<p id='functions'>\n\t\t\t\t\t\t\t\t" +
					"<span data-ng-click='isCollapsed.getClusterLut = !isCollapsed.getClusterLut' class='glyphicon' data-ng-class=\"{'glyphicon-" +
					"triangle-bottom': !isCollapsed.getClusterLut, 'glyphicon-triangle-right': isCollapsed.getClusterLut}\"></span>" +
					"\n\t\t\t\t\t\t\t\t<i ui-sref='getClusterLut'>getClusterLut()</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div collapse=" +
					"'isCollapsed.getClusterLut'>\n\t\t\t\t\t\t\t\t<p id='objectsNoContent'><i ui-sref='clusterLut'>clusterLut</i></p>\n\t\t\t\t\t\t\t</div>" +
					"\n\t\t\t\t\t\t\t<p id='functions'>\n\t\t\t\t\t\t\t\t" +
					"<span data-ng-click='isCollapsed.getLogClusterLut = !isCollapsed.getLogClusterLut' class='glyphicon' data-ng-class=\"{'glyphicon-" +
					"triangle-bottom': !isCollapsed.getLogClusterLut, 'glyphicon-triangle-right': isCollapsed.getLogClusterLut}\"></span>" +
					"\n\t\t\t\t\t\t\t\t<i ui-sref='getLogClusterLut'>getLogClusterLut()</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div collapse=" +
					"'isCollapsed.getLogClusterLut'>\n\t\t\t\t\t\t\t\t<p id='objectsNoContent'><i ui-sref='logClusterLut'>logClusterLut</i></p>\n\t\t\t\t\t\t\t</div>" +
					"\n\t\t\t\t\t\t\t<p id='functions'>\n\t\t\t\t\t\t\t\t" +
					"<span data-ng-click='isCollapsed.getIasLut = !isCollapsed.getIasLut' class='glyphicon' data-ng-class=\"{'glyphicon-" +
					"triangle-bottom': !isCollapsed.getIasLut, 'glyphicon-triangle-right': isCollapsed.getIasLut}\"></span>" +
					"\n\t\t\t\t\t\t\t\t<i ui-sref='getIasLut'>getIasLut()</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div collapse=" +
					"'isCollapsed.getIasLut'>\n\t\t\t\t\t\t\t\t<p id='objectsNoContent'><i ui-sref='iasLut'>iasLut</i></p>\n\t\t\t\t\t\t\t</div>" +
					"\n\t\t\t\t\t\t\t<p id='functions'>\n\t\t\t\t\t\t\t\t" +
					"<span data-ng-click='isCollapsed.getArmStateLut = !isCollapsed.getArmStateLut' class='glyphicon' data-ng-class=\"{'glyphicon-" +
					"triangle-bottom': !isCollapsed.getArmStateLut, 'glyphicon-triangle-right': isCollapsed.getArmStateLut}\"></span>" +
					"\n\t\t\t\t\t\t\t\t<i ui-sref='getArmStateLut'>getArmStateLut()</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div collapse=" +
					"'isCollapsed.getArmStateLut'>\n\t\t\t\t\t\t\t\t<p id='objectsNoContent'><i ui-sref='armStateLut'>armStateLut</i></p>\n\t\t\t\t\t\t\t</div>" +
					"\n\t\t\t\t\t\t\t<p id='functions'><span data-ng-click='isCollapsed.getDataTypeLut = !isCollapsed.getDataTypeLut' class='glyphicon' data-ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.getDataTypeLut, 'glyphicon-triangle-right': isCollapsed.getDataTypeLut}\"></span><i ui-sref='getDataTypeLut'>getDataTypeLut()</i></p>"+
					"\n\t\t\t\t\t\t\t<div collapse='isCollapsed.getDataTypeLut'><p id='objectsNoContent'><i ui-sref='dataTypeLut'>dataTypeLut</i></p></div>"+
					"\n\t\t\t\t\t\t\t<p id='functions'><span data-ng-click='isCollapsed.getStatusLut = !isCollapsed.getStatusLut' class='glyphicon' data-ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.getStatusLut, 'glyphicon-triangle-right': isCollapsed.getStatusLut}\"></span><i ui-sref='getStatusLut'>getStatusLut()</i></p>"+
					"\n\t\t\t\t\t\t\t<div collapse='isCollapsed.getStatusLut'><p id='objectsNoContent'><i ui-sref='statusLut'>statusLut</i></p></div>"+
					"\n\t\t\t\t\t\t\t<p id='functions'><span data-ng-click='isCollapsed.getArgDataTypeLut = !isCollapsed.getArgDataTypeLut' class='glyphicon' data-ng-class=\"{'glyphicon-triangle-bottom': !isCollapsed.getArgDataTypeLut, 'glyphicon-triangle-right': isCollapsed.getArgDataTypeLut}\"></span><i ui-sref='getArgDataTypeLut'>getArgDataTypeLut()</i></p>"+
					"\n\t\t\t\t\t\t\t<div collapse='isCollapsed.getArgDataTypeLut'><p id='objectsNoContent'><i ui-sref='argDataTypeLut'>argDataTypeLut</i></p></div>");
		bar.updateBar(85);
		for(int a = 0; a < attributes.size(); a++) {
			
			Attribute attrBuf = attributes.get(a);
			
			data.write(	"\n\t\t\t\t\t\t\t<p id='functions'>\n\t\t\t\t\t\t\t\t" +
						"<span data-ng-click='isCollapsed.get"+convertStr(attrBuf.name, false)+"Attribute = !isCollapsed.get"+convertStr(attrBuf.name, false)+"Attribute' class='glyphicon' data-ng-class=\"{'glyphicon-" +
						"triangle-bottom': !isCollapsed.get"+convertStr(attrBuf.name, false)+"Attribute, 'glyphicon-triangle-right': isCollapsed.get"+convertStr(attrBuf.name, false)+"Attribute}\"></span>" +
						"\n\t\t\t\t\t\t\t\t<i ui-sref='functionsAttributes' data-ng-click='changeAttributeContent("+a+")'>get"+convertStr(attrBuf.name, false)+"Attribute()</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div collapse=" +
						"'isCollapsed.get"+convertStr(attrBuf.name, false)+"Attribute'>\n\t\t\t\t\t\t\t\t<p id='objectsNoContent'><i ui-sref='objectsAttributes' data-ng-click='changeAttributeContent("+a+")'>"+convertStr(attrBuf.name, true)+"Attribute</i></p>\n\t\t\t\t\t\t\t</div>");
		}
		bar.updateBar(90);
		for(int c = 0; c < commands.size(); c++) {
			
			Command commBuf = commands.get(c);
			
			data.write("\n\t\t\t\t\t\t\t<p id='functions'>\n\t\t\t\t\t\t\t\t" +
					"<span data-ng-click='isCollapsed.get"+WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "")+"Command = !isCollapsed.get"+WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "")+"Command' class='glyphicon' data-ng-class=\"{'glyphicon-" +
					"triangle-bottom': !isCollapsed.get"+WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "")+"Command, 'glyphicon-triangle-right': isCollapsed.get"+WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "")+"Command}\"></span>" +
					"\n\t\t\t\t\t\t\t\t<i ui-sref='functionsCommands' data-ng-click='changeCommandContent("+c+")'>get"+WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "")+"Command()</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div collapse=" +
					"'isCollapsed.get"+WordUtils.capitalize(commBuf.name).replaceAll("\\s",  "")+"Command'>\n\t\t\t\t\t\t\t\t<p id='objectsNoContent'><i ui-sref='objectsCommands' data-ng-click='changeCommandContent("+c+")'>"+WordUtils.uncapitalize(WordUtils.capitalize(commBuf.name).replaceAll("\\s",  ""))+"Command</i></p>\n\t\t\t\t\t\t\t</div>");
		}
		bar.updateBar(95);
		
		data.write(	"\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='api-doc-wrap'><ui-view></ui-view></div>\n\t\t\t" +
					"<div>\n\t\t\t\t<div id='search-bar'>\n\t\t\t\t\t<input class='form-control' placeholder='Filter...' data-ng-model='findTag'></input><hr>\n\t\t\t\t</div>" +
					"\n\t\t\t\t<div id='search-bar-content'>\n\t\t\t\t\t<ul><li class='active-link' data-ng-repeat=\"i in searchList | filter:findTag | orderBy:'name'\" " +
					"ui-sref={{i.template}} ng-click='dynamicLink(i)'>{{i.name}}</li></ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>");
	}
}
