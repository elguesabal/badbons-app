import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

/**
 * @author VAMPETA
 * @brief 
*/
export async function getPhoto(setImg) {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
    	console.log("Permissão negada")
        return ;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        quality: 1
    });
    if (!result.canceled) {
        await FileSystem.copyAsync({ from: result.assets[0].uri, to: FileSystem.documentDirectory + "user.jpg" });
        setImg(result.assets[0].uri);
        // FALTA LIDAR COM TIPOS DE IMAGENS (JPG PNG E ETC)
        // FALTA ENVIAR A IMAGEM PARA O BACK END
    }
}