package data;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class WriteFile {

	private final String path;
    private boolean append_to_file;

    /**
     * WriteFile class constructor.
     * 
     * @param file_path
     * @param append_value
     */
    public WriteFile(String file_path, boolean append_value) {
    	
        path = file_path;
        append_to_file = append_value;
    }
    
    /**
     * Write data to textFile.
     * 
     * @param textLine
     * @throws IOException
     */
    public void write(String textLine) throws IOException {
    	
        FileWriter write = new FileWriter(path,append_to_file);
        PrintWriter print_line = new PrintWriter(write);
          
        print_line.printf("%s", textLine);
        print_line.close();
    }
}
