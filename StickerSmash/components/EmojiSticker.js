import { View, Image } from 'react-native'; 
import Animated from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(image);

export default function EmojiSticker ({ imageSize, stickerSource }) {
    return (
        <View style={{ top: -350 }}>
            <Image 
                source={stickerSource}
                resizeMode="contain"
                style={{ width: imageSize, height: imageSize}}
            />
        </View>
    )
}