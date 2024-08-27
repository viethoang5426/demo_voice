package com.demo;

import android.speech.tts.TextToSpeech;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.util.Locale;

public class TTSModule extends ReactContextBaseJavaModule implements TextToSpeech.OnInitListener {

    private static final String REACT_CLASS = "TTSModule";
    private TextToSpeech mTTS;

    public TTSModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mTTS = new TextToSpeech(getReactApplicationContext(), this);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void speak(String text, Promise promise) {
        mTTS.speak(text, TextToSpeech.QUEUE_FLUSH, null, null);
        promise.resolve(true);
    }

    @Override
    public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS) {
            // Cấu hình giọng nói, tốc độ ở đây nếu cần
            mTTS.setLanguage(Locale.US);
        } else {
            Log.e(REACT_CLASS, "Initialization failed");
        }
    }
}