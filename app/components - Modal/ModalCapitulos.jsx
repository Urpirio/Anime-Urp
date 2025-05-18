import { CapitulosStyle } from "../Style/style - DBZ/CapitulosStyle"
import { Modal,View,Text,Pressable,TouchableOpacity,FlatList} from "react-native"

export default function ModalCapitulos({ModalStatus,FunctionCloseModal,IdSaga,Data}) {

  return (
    <Modal transparent={true} visible={ModalStatus}>
        <View style={CapitulosStyle.GeneralBodyModal}>
            <Pressable style={CapitulosStyle.BtnModal} onPress={FunctionCloseModal}></Pressable>
            <View style={CapitulosStyle.BodyModal}>
                {IdSaga >= 0 ? 
                    <FlatList 
                    style={CapitulosStyle.ListCardModal}
                        data={Data[IdSaga ? IdSaga : 0].Episodios}
                        renderItem={({item})=>{
                        return(
                            <View style={CapitulosStyle.Cardinlist}>
                                <View style={CapitulosStyle.CardInlistHeader}>
                                    <Text style={CapitulosStyle.TextTitleCap}>{item.titulo}</Text>
                                    <Text style={CapitulosStyle.TextNumerCap}>Episodio {item.Numero}</Text>
                                </View>
                                <TouchableOpacity style={CapitulosStyle.BtnInCardList}>
                                    <Text style={CapitulosStyle.TextBtn}>Ver</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}/> 
                    :
                     <View>
                        <View>
                            <Text>Cargando...</Text>
                        </View>
                    </View>
                    }
                    </View>
            </View>    
    </Modal>
  )
};
