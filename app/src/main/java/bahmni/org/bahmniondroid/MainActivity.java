package bahmni.org.bahmniondroid;

import android.os.Bundle;

import org.xwalk.core.XWalkView;

import bahmni.org.bahmniondroid.clients.ResourceClient;


public class MainActivity extends XWalkBaseActivity {
    public static final String SERVER = "https://bahmni.twhosted.com/bahmni/";
    private final String TAG = this.getClass().getName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mXWalkView = (XWalkView) findViewById(R.id.bahmni);
        mXWalkView.setResourceClient(new ResourceClient(mXWalkView, getAssets()));
        mXWalkView.load(SERVER + "home", null);
    }
}
