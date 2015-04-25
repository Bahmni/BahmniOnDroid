package bahmni.org.bahmniondroid;

import android.app.Application;
import android.test.ApplicationTestCase;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static bahmni.org.bahmniondroid.MainActivity.SERVER;

/**
 * <a href="http://d.android.com/tools/testing/testing_android.html">Testing Fundamentals</a>
 */
public class ApplicationTest extends ApplicationTestCase<Application> {
    public ApplicationTest() {
        super(Application.class);
    }

    public void testName() throws Exception {
        String urlMatch = "^(" + SERVER + ")(.*)(\\.)(.*)$";
        Pattern compile = Pattern.compile(urlMatch);
        String some = "https://bahmni.twhosted.com/bahmni/common/ui-helper/messages.html";
        Matcher matcher = compile.matcher(some);
        System.out.println(matcher.group(0));
        System.out.println(matcher.group(1));
        System.out.println(matcher.group(2));
        System.out.println(matcher.group(3));
        System.out.println(matcher.group(4));

    }
}