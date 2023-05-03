import { Text, View } from "react-native-animatable"
import { Card, Icon } from "react-native-elements"
import { StyleSheet } from "react-native";
import { baseUrl } from "../../shared/baseUrl";

const RenderCampsite = (props) => {
    const { campsite } = props;
    if (campsite) {
        return (
            <Card containerStyle={styles.cardContainer}>
                <Card.Image source={{ uri: baseUrl + campsite.image }}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {campsite.name}
                        </Text>
                    </View>
                </Card.Image>
                <Icon
                    name={props.isFavorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color= '#f50'
                    raised
                    reverse
                    onPress={() =>  props.markFavorite()}
                />
                <Text style={{ margin: 20 }}>
                    {campsite.description}
                </Text>
            </Card>
        )
    }
    return <View />
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    }
});

export default RenderCampsite;