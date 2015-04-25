package bahmni.org.bahmniondroid.clients;

import android.content.res.AssetManager;
import android.util.Log;
import android.webkit.WebResourceResponse;

import org.xwalk.core.XWalkResourceClient;
import org.xwalk.core.XWalkView;

import java.io.InputStream;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static bahmni.org.bahmniondroid.MainActivity.SERVER;

public class ResourceClient extends XWalkResourceClient {

    private final String TAG = this.getClass().getName();
    private final AssetManager assetManager;
    private final String urlMatch = "^(" + SERVER + ")(.*)(\\.)(.*)$";
    private final Pattern urlRegex;

    public ResourceClient(XWalkView xwalkView, AssetManager assetManager) {
        super(xwalkView);
        this.assetManager = assetManager;
        urlRegex = Pattern.compile(urlMatch);
    }

    public WebResourceResponse shouldInterceptLoadRequest(XWalkView view, String url) {
        WebResourceResponse webResourceResponse = super.shouldInterceptLoadRequest(view, url);
        Matcher matcher = urlRegex.matcher(url);
        if (matcher.matches()) {
            try {
                InputStream assetFile = assetManager.open("dist/" + matcher.group(2) + matcher.group(3) + matcher.group(4));
                Log.d(TAG, "FOUND THE FILE");
                webResourceResponse = new WebResourceResponse("text/" + matcher.group(4), "utf-8", assetFile);
            } catch (Exception e) {
                Log.d(TAG, "RESOURCE NOT FOUND, HITTING SERVER");
            }
        }
        return webResourceResponse;
    }
}

