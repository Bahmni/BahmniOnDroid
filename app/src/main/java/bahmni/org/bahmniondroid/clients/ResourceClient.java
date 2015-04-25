package bahmni.org.bahmniondroid.clients;

import android.util.Log;
import android.webkit.WebResourceResponse;

import org.xwalk.core.XWalkResourceClient;
import org.xwalk.core.XWalkView;

public class ResourceClient extends XWalkResourceClient {

    private final String TAG = this.getClass().getName();

    public ResourceClient(XWalkView xwalkView) {
        super(xwalkView);
    }

    public WebResourceResponse shouldInterceptLoadRequest(XWalkView view, String url) {
        Log.d(TAG, "Intercept load request");
        return super.shouldInterceptLoadRequest(view, url);
    }
}

