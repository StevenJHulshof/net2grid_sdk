package data;

import static data.Boot.bar;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JProgressBar;

public class ProgressBar extends JPanel {
	
	private static final long serialVersionUID = 1L;
    static final int MY_MINIMUM = 0;
    static final int MY_MAXIMUM = 99;
    JProgressBar pbar;
    public static JFrame pframe = new JFrame("Progress Bar");

    /**
     * ProgressBar class constructor.
     */
    public ProgressBar() {
    	
    	pbar = new JProgressBar();
    	pbar.setMinimum(MY_MINIMUM);
    	pbar.setMaximum(MY_MAXIMUM);
    	add(pbar);
    }

    /**
     * Initializes progress bar.
     * 
     * @param bar
     */
    public static void initProgressBar() {
    	
        pframe.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pframe.setContentPane(bar);
        pframe.pack();  
    	pframe.setVisible(true);
        
    }
    
    /**
     * Deletes progress bar.
     */
    public static void deleteProgressBar() {
    	
    	pframe.dispose();
    }
    
    /**
     * Updates progress bar.
     * 
     * @param newValue
     */
    public void updateBar(int newValue) {
    	
      pbar.setValue(newValue);
    }
}
