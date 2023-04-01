import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import HeaderStyle from './HeaderStyle';
import {
  Argentina,
  Australia,
  Austria,
  Belgium,
  Brazil,
  Bulgaria,
} from '../../assets/images/flags';
import AppFonts from '../../utils/AppFonts';

const flagListData = [
  {
    countryID: 0,
    countryName: 'Argentina',
    countryFlag: <Argentina />,
  },
  {
    countryID: 1,
    countryName: 'Australia',
    countryFlag: <Australia />,
  },
  {
    countryID: 2,
    countryName: 'Austria',
    countryFlag: <Austria />,
  },
  {
    countryID: 3,
    countryName: 'Belgium',
    countryFlag: <Belgium />,
  },
  {
    countryID: 4,
    countryName: 'Brazil',
    countryFlag: <Brazil />,
  },
  {
    countryID: 5,
    countryName: 'Bulgaria',
    countryFlag: <Bulgaria />,
  },
];

const HeaderComponent = props => {
  const [modalVisible, setModalVisible] = useState(false);

  const displaySelectedCountryFlag = () => {
    return <Argentina />;
  };

  const displayCountryListModal = () => {
    setModalVisible(!modalVisible);
  };

  const renderFlags = (item, index) => {
    return (
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <View style={{height: 100, width: 110}}>{item.countryFlag}</View>
        <Text style={{textAlign: 'center', fontFamily: AppFonts.medium}}>
          {item.countryName}
        </Text>
      </View>
    );
  };

  const renderCountryFlagList = () => {
    return (
      <FlatList
        style={{marginHorizontal: 10}}
        data={flagListData}
        keyExtractor={item => item.countryID}
        renderItem={({item, index}) => renderFlags(item, index)}
        numColumns={3}
      />
    );
  };

  const renderFlagModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={HeaderStyle.centeredView}>
          <View style={HeaderStyle.modalView}>
            <Text style={HeaderStyle.modalHeading}>Select Country</Text>
            {renderCountryFlagList()}
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={HeaderStyle.container}>
      <Image source={null} style={{width: 25, height: 25, marginLeft: 5}} />

      <Text style={HeaderStyle.title}>{props.title}</Text>

      {props.showCountry ? (
        <TouchableOpacity
          onPress={displayCountryListModal}
          style={{marginRight: 20}}>
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 20,
            }}>
            {displaySelectedCountryFlag()}
          </View>
        </TouchableOpacity>
      ) : (
        <Image source={null} style={{width: 25, height: 25, marginLeft: 5}} />
      )}
      {renderFlagModal()}
    </View>
  );
};

export default HeaderComponent;
