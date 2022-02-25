
import { ToastAndroid, Platform } from 'react-native';

export async function Toast(msg, time = 2) {
    if (Platform.OS === 'android') {
        ToastAndroid.showWithGravityAndOffset(msg, time, ToastAndroid.BOTTOM, 1, 1);
    }
}