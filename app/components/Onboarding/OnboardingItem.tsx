import { Image, Title, Text, View } from '../controls';
import Styles from '../common/Styles';

export default ({ item }: { item: any }) => {
    return (
        <View
            style={{ backgroundColor: item.backgroundColor }}>
            <Title > {item.title} </Title>
            <Image
                style={Styles.introImageStyle}
                image={item.image} />
            <Text style={Styles.introTextStyle}>
                {item.text}
            </Text>
        </View >
    );
};