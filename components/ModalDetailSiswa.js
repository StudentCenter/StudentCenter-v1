import * as React from 'react';
import { 
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import { 
    useTheme,
    Button,
    TextInput,
    ActivityIndicator,
} from 'react-native-paper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

  
function ModalDetailSiswa({visible, handleClose, idSiswa}) {
    const paperTheme = useTheme();
    const API_URL = `http://localhost:8000`;
    const [namaSiswa, setNamaSiswa] = React.useState('')
    const [namaAyah, setNamaAyah] = React.useState('')
    const [namaIbu, setNamaIbu] = React.useState('')
    const [agamaSiswa, setAgamaSiswa] = React.useState('')
    const [kelasSiswa, setKelasSiswa] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const fetchSiswaDetail = async () => {
        try {
            const data = await fetch(`${API_URL}/student/get/${idSiswa}`, {
                method: 'GET',
            });
            const resp = await data.json();
            setNamaSiswa(resp.data.nama);
            setNamaAyah(resp.data.nama_ayah);
            setAgamaSiswa(resp.data.agama);
            setNamaIbu(resp.data.nama_ibu);
            const kelas = resp.data.kelas
            kelas.map((item) => {
                const kelasfix = item.kelas
                setKelasSiswa(kelasfix)
            })
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }
    
    React.useEffect(() => {
       if (visible === true) {
           fetchSiswaDetail().then(() => {
               setLoading(true)
           })
       }
    }, [idSiswa])

    React.useEffect(() => {
        if (visible === false) {
            setLoading(false)
        }
    })

    const styles = StyleSheet.create({
        buttonMore: {
            bottom: wp('-17%'),
            borderRadius: 10,
            width: wp('90%'),
            height: hp('8%'),
            paddingTop: wp('1.5%'),
            position: 'absolute',
            backgroundColor: '#2F80ED',
        },
        modalContainer: {
            backgroundColor: paperTheme.colors.backgroundmodal,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: wp('100%'),
            marginLeft: 0,
            marginTop: wp('10%'),
            marginBottom: -10,
        },
        textInput: {
            width: wp('90%'),
            marginBottom: wp('4%'),
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
        }
    })

        return(
             <>
             <Modal 
                isVisible={visible} 
                onSwipeComplete={handleClose}
                swipeDirection='down'
                style={styles.modalContainer}
                animationIn='slideInUp'
                animationInTiming={700}
                >
                {loading === true ? 
                    <View 
                        style={{
                            alignItems: 'center',            
                        }}
                    >
                        {/* Header */}
                        <View>
                            <Image
                                source={require('../Asset/Image/headermodal.png')}
                                style={{
                                    marginTop: hp('-10%'),
                                }}
                            /> 
                        </View>
                        <View 
                            style={{
                                marginTop: wp('10%')
                            }}
                        >
                            {/* Nama Siswa */}
                            <TextInput
                                mode="flat"
                                disabled="true"
                                label="Nama Siswa"
                                value={namaSiswa}
                                style={styles.textInput}
                            />
                            {/* Kelas Siswa */}
                            <TextInput
                                mode="flat"
                                disabled="true"
                                label="Kelas Siswa"
                                value={kelasSiswa}
                                style={styles.textInput}
                            />
                            {/* Nama Ayah */}
                            <TextInput
                                mode="flat"
                                disabled="true"
                                label="Nama Ayah"
                                value={namaAyah}
                                style={styles.textInput}
                            />
                            {/* Nama Ibu */}
                            <TextInput
                                mode="flat"
                                disabled="true"
                                label="Nama Ibu"
                                value={namaIbu}
                                style={styles.textInput}
                            />
                            {/* Agama */}
                            <TextInput
                                mode="flat"
                                disabled="true"
                                label="Agama"
                                value={agamaSiswa}
                                style={styles.textInput}
                            />
            
                            <Button 
                                mode='contained'
                                style={styles.buttonMore}
                            >
                                <Text 
                                    style={{
                                        fontSize: wp('5%'),
                                        color: 'white'
                                    }}
                                >
                                    More Detail
                                </Text>
                            </Button>
                        </View>
                    </View>
                :
                    <ActivityIndicator 
                    animating={true} 
                    size={40}
                    color="#345EF0" 
                    style={styles.loading} 
                    />
                }
            </Modal>
             </>   
        )
}

export default ModalDetailSiswa