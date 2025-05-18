import { Text, TouchableOpacity, View } from "react-native";
import { styleCardSaga } from "../Style/Style - General/styleCardSaga";

export default function Sagas({NombreSaga,Episodios,Serie,FunctionModal}) {
  return (
    <View style={styleCardSaga.Container}>
        <View style={styleCardSaga.HeaderCard}>
            <Text style={styleCardSaga.TextSerie}>{Serie}</Text>
            <Text style={styleCardSaga.TextSaga}>{NombreSaga}</Text>
        </View>
        <View style={styleCardSaga.MainCard}> 
            <Text style={styleCardSaga.TextEpisodios}>{Episodios}</Text>
            <TouchableOpacity style={styleCardSaga.BtnVerCapitulos} onPress={FunctionModal}>
                <Text style={styleCardSaga.TextBtnVerCapitulos}>Ver capitulos</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


