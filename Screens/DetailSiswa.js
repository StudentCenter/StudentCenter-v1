import * as React from 'react';
import { 
    ScrollView,
    View,
    Image,
    StyleSheet
 } from 'react-native';
import { 
    TextInput,
    ActivityIndicator,
 } from 'react-native-paper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DetailSiswa = ({route}) => {
    const {idSiswa} = route.params;
    const idSiswaFix = JSON.stringify(idSiswa)
    const [loading, setLoading] = React.useState(false)
    const API_URL = `http://localhost:8000`;

    const [fotoSiswa, setFotoSiswa] = React.useState('')
    const [namaSiswa, setNamaSiswa] = React.useState('')
    const [kelasSiswa, setKelasSiswa] = React.useState('')
    const [agamaSiswa, setAgamaSiswa] = React.useState('')
    const [noHpSiswa, setHpSiswa] = React.useState('')
    const [namaAyah, setNamaAyah] = React.useState('')
    const [noHpAyah, setHpAyah] = React.useState('')
    const [namaIbu, setNamaIbu] = React.useState('')
    const [noHpIbu, setHpIbu] = React.useState('')

    const fetchDetail = async () => {
        try {
            const data = await fetch(`${API_URL}/student/get/${idSiswaFix}`, {
                method: 'GET'
            })
            const resp = await data.json()
            const kelas = resp.data.kelas
            kelas.map((item) => {
                const kelasfix = item.kelas
                setKelasSiswa(kelasfix)
            })
            setNamaSiswa(resp.data.nama)
            setFotoSiswa(resp.data.foto_siswa)
            setAgamaSiswa(resp.data.agama)
            setHpSiswa(resp.data.no_hp_siswa)
            setNamaAyah(resp.data.nama_ayah)
            setHpAyah(resp.data.no_hp_ayah)
            setNamaIbu(resp.data.nama_ibu)
            setHpIbu(resp.data.no_hp_ibu)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    React.useEffect(() => {
        fetchDetail().then(() => {
            setLoading(true)
        })
    })

    // Styles
    const styles = StyleSheet.create({
        textInput: {
            width: wp('90%'),
            height: hp('9%'),
            marginBottom: wp('4%'),
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
        },
        loading: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: wp('40%'),
            backgroundColor: '#C4C4C4',
            height: hp('22%'),
            marginTop: wp('5%'),
            borderRadius: 20,
            marginBottom: wp('4%')
        }
    })

    if (loading) {
        return(
            <>
                <ScrollView>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {/* foto siswa */}
                        <Image
                            source={{uri: fotoSiswa}}
                            style={styles.image}
                        />
                       
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


                        {/* Agama Siswa */}
                        <TextInput
                            mode="flat"
                            disabled="true"
                            label="Agama Siswa"
                            value={agamaSiswa}
                            style={styles.textInput}
                        />

                        {/* No Hp Siswa */}
                        <TextInput
                            mode="flat"
                            disabled="true"
                            label="No Hp Siswa"
                            value={noHpSiswa}
                            style={styles.textInput}
                        />

                        {/* Nama Ayah Siswa */}
                        <TextInput
                            mode="flat"
                            disabled="true"
                            label="Nama Ayah"
                            value={namaAyah}
                            style={styles.textInput}
                        />

                        {/* No Hp Ayah */}
                        <TextInput
                            mode="flat"
                            disabled="true"
                            label="No Hp Ayah"
                            value={noHpAyah}
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

                        {/* No Hp Ibu */}
                        <TextInput
                            mode="flat"
                            disabled="true"
                            label="No Hp Ibu"
                            value={noHpIbu}
                            style={styles.textInput}
                        />
    
                    </View>
                </ScrollView>
            </>
        )
    } else {
        return(
            <ActivityIndicator 
            animating={true} 
            size={40}
            color="#345EF0" 
            style={styles.loading} 
            />
        )
    }
}

export default DetailSiswa