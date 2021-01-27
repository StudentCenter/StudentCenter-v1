import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const HeaderApp = () => {

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header
        style={styles.header}
    >
      <Appbar.Content title="Title"/>
      <Appbar.Action 
        icon="bell"
        onPress={_handleMore}
        style={styles.bellIcon}
      />
      <Appbar.Action 
        icon="magnify"
        onPress={_handleMore}
        style={styles.searchIcon}
      />
      <Appbar.Action 
        icon="dots-vertical"
        onPress={_handleMore} 
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffffff',
    },
    searchIcon: {
      marginRight: '-3%'
    },
    bellIcon: {
      marginRight: '-2%'
    }
})


export default HeaderApp;