package bahmni.org.bahmniondroid;

import android.os.Bundle;

import org.xwalk.core.XWalkView;

import bahmni.org.bahmniondroid.clients.ResourceClient;


public class MainActivity extends XWalkBaseActivity {
    private static final String TAG = MainActivity.class.getName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mXWalkView = (XWalkView) findViewById(R.id.bahmni);
        mXWalkView.setResourceClient(new ResourceClient(mXWalkView));
        mXWalkView.load("https://bahmni.twhosted.com/home", null);
    }
}
