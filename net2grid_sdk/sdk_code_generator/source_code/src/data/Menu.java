package data;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.GridLayout;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.Border;

public class Menu extends JPanel {

	private static final long serialVersionUID = 2L;
	public static JCheckBox zigbeeLutService = new JCheckBox("zigbeeLut.service.js");
	public static JCheckBox sdkDocService = new JCheckBox("sdkDoc.service.js");
	public static JCheckBox sdkIndex = new JCheckBox("sdkIndex.html");
	public static JButton button = new JButton("Generate Code");
	static JFrame frame = new JFrame("Code generator menu");
	
	static void displayMenu() {

	    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	    JPanel panel = new JPanel(new GridLayout(0, 1));
	    Border border = BorderFactory.createTitledBorder("Files to generate");
	    panel.setBorder(border);
	    panel.add(zigbeeLutService);
	    panel.add(sdkDocService);
	    panel.add(sdkIndex);
	    Container contentPane = frame.getContentPane();
	    contentPane.add(panel, BorderLayout.CENTER);
	    contentPane.add(button, BorderLayout.SOUTH);
	    frame.setSize(300, 200);
	    frame.setVisible(true);
	}
	
	static void deleteMenu() {
		
		frame.dispose();
	}
}
