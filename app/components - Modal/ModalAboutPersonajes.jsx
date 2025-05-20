import { Button, Modal, Text, TouchableHighlight, View } from "react-native";
import { styModalAboutPersonajes } from "../Style/Style - General/styleModalAboutPersonajes";

export default function ModalAboutPersonajes({Data,StatusModal,FuncionCloseModal}) {
  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={styModalAboutPersonajes.BodyContainer}>
            <View style={styModalAboutPersonajes.BlurContainer}>

            </View>
            <View style={styModalAboutPersonajes.MainContainer}>
                <View style={styModalAboutPersonajes.CardContainer}>
                <View style={styModalAboutPersonajes.TextContainer}>
                    <View style={styModalAboutPersonajes.View1TextContainer}>
                        <Text style={styModalAboutPersonajes.Nombre}>{Data.Nombre}</Text>
                        <Text style={styModalAboutPersonajes.Descripcion}>{Data.Descripcion}</Text>
                    </View>
                    
                    <View style={styModalAboutPersonajes.View2TextContainer}>
                        <Text style={styModalAboutPersonajes.Edad}>Edad: {Data.Edad}</Text>
                        <Text style={styModalAboutPersonajes.Raza}>Raza: {Data.Raza}</Text>
                    </View>
                </View>

                <TouchableHighlight style={styModalAboutPersonajes.BtnCloseModal} 
                    onPress={FuncionCloseModal}>
                    <Text style={styModalAboutPersonajes.TextBtnCloseModal}>Close Modal</Text>
                </TouchableHighlight>
            </View>
        </View>
        </View>
    </Modal>
  )
}
