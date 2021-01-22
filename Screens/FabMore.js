import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import { StyleSheet } from 'react-native';

function FabMore() {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

    return(
      <Provider>
      <Portal>
        <FAB.Group
          style={styles}
          open={open}
          color="#000000"
          fabStyle={{backgroundColor: '#FFFFFF'}}
          icon={open ? 'arrow-left-circle' : 'dots-vertical'}
          actions={[
            { 
              icon: 'plus', 
              onPress: () => console.log('Pressed add') 
            },
            {
              icon: require('../Asset/Image/settings.png'),
              label: 'Settings',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
    )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
  },
})


export default FabMore