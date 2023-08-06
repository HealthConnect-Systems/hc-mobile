
import { Dimensions } from 'react-native';
import { Image, Title, Text, View } from '../controls';
import Styles from '../common/Styles';

export default ({ item }: { item: any }) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <View
            style={{ backgroundColor: item.backgroundColor }}>
            <Title > {item.title} </Title>
            <Image
                style={{ width, height, resizeMode: 'contain' }}
                image={item.image} />
            <Text style={Styles.introTextStyle}>
                {item.text}
            </Text>
        </View >
    );
};