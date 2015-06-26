package data;

import static data.Printer.printZigbeeLutService;
import static data.Printer.printSdkDocService;
import static data.Printer.printSdkIndex;
import static data.ProgressBar.*;
import static data.Utility.completeMsg;
import static data.Utility.errorMsg;
import static data.Menu.*;
import static data.Utility.zclMsg;
import static data.Utility.typesMsg;
import static data.Utility.saveMsg;
import static data.Utility.openFile;
import static data.Utility.saveLocation;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;

import org.json.JSONException;

public class Boot {

	public static final ProgressBar bar = new ProgressBar();
	public boolean click = false;
	
	/**
	 * Main class constructor
	 * 
	 * @throws IOException 
	 * @throws JSONException 
	 */
	public Boot() throws IOException, JSONException {
		
		zclMsg();
		String jsonStr = openFile();
		typesMsg();
		String typesStr = openFile();
		saveMsg();
		String savePath = saveLocation();
		
		displayMenu();
		
		while(click == false) {
			
	        button.addActionListener(new ActionListener() {
	        	 
	            public void actionPerformed(ActionEvent e) {
	            	
	            	click = true;
	        		deleteMenu();
	            }
	        });  
		}
        
        initProgressBar();
		try {
			bar.updateBar(1);
			if(zigbeeLutService.isSelected()) {
				printZigbeeLutService(savePath, jsonStr, typesStr);
			}
			bar.updateBar(40);
			if(sdkDocService.isSelected()) {
				printSdkDocService(savePath, jsonStr, typesStr);
			}
			bar.updateBar(80);
			if(sdkIndex.isSelected()) {
				printSdkIndex(savePath, jsonStr);
			}
			
			bar.updateBar(100);
			deleteProgressBar();
			System.out.println("Code generation complete!");
			completeMsg();		
		}
		catch (JSONException | IOException JSe) {
			
			deleteProgressBar();
			errorMsg();
			System.out.println(JSe.getMessage());
		} 
	}
	
	/**
	 * Start up.
	 * 
	 * @param args
	 * @throws IOException 
	 * @throws JSONException 
	 */
	public static void main (String[] args) throws IOException, JSONException {
		
		new Boot();
	}
}
