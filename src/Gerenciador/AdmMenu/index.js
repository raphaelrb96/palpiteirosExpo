import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import ItemGridMenu from '../../Components/ItemGridMenu';
import Toolbar from '../../Components/Toolbar';

const css = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    row: {
        flexDirection: 'row'
    }
});


const ligas = require('../../Img/ligas.png');
const mesas = require('../../Img/mesas.png');
const palpites = require('../../Img/palpites.png');
const palpiteiro = require('../../Img/palpiteiro.png');



export default function AdmMenu() {
    return (
        <SafeAreaView style={css.container}>
            <Toolbar 
                titulo={'Menu Principal'}
            />
            <View style={css.row}>
                <ItemGridMenu
                    titulo={'Ligas'}
                    img={ligas}
                />
                <ItemGridMenu
                    titulo={'Palpiteiros'}
                    img={palpiteiro}
                />
            </View>
            <View style={css.row}>
                <ItemGridMenu
                    titulo={'Mesas'}
                    img={mesas}
                />
                <ItemGridMenu
                    titulo={'Palpites'}
                    img={palpites}
                />
            </View>
        </SafeAreaView>
    );
}
