import { Image, Pressable, Text, View } from "react-native";
import { CardAnimesStyle } from "../Style/style - Home/CardAnimesStyle";

export default function CardAnimes({
    TitleAnime,
    LinkScreen,
    Description,
    FunctionVerInfo,
    FunctionVerCapi,
    ImgAnime,
}) {
  return (
    <View style={CardAnimesStyle.Container}>
       <View style={CardAnimesStyle.ContainerImg}>
            <Image style = {CardAnimesStyle.Img} source={{uri: ImgAnime}} />
        </View> 
        <View style ={CardAnimesStyle.ContainerMain}>
            <View style={CardAnimesStyle.ContainerText}>
                <Text style={CardAnimesStyle.Title}>{TitleAnime}</Text>
                <Text style={CardAnimesStyle.Description}>{Description}</Text>
            </View>
            <View style={CardAnimesStyle.ContainerBtn}>
                <Pressable style={CardAnimesStyle.BtnVerCapitulos} onPress={FunctionVerCapi}>
                    <Text style = {CardAnimesStyle.TextVerCapitulos}>
                        Ver Sagas
                    </Text>
                </Pressable>
                <Pressable onPress={FunctionVerInfo} style={CardAnimesStyle.BtnVerMasInformacion} >
                    <Text style={CardAnimesStyle.TextVerMasInformacion}>Ver mas informacion</Text>
                </Pressable>
            </View>
        </View>

    </View>
  )
}
