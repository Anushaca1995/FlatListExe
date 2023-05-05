import FastImage from 'react-native-fast-image';
import {useState} from 'react';
import style from './style';
import {Text, View, ScrollView, FlatList} from 'react-native';

const FastImageContainer = () => {
  const [listData, setListData] = useState([
    {title: 'Image 1', image: 'https://unsplash.it/400/400?image=1'},
    {title: 'Image 2', image: 'https://unsplash.it/400/400?image=2'},
    {title: 'Image 3', image: 'https://unsplash.it/400/400?image=3'},
    {title: 'Image 4', image: 'https://unsplash.it/400/400?image=4'},
  ]);
  const renderCellItem = ({item, index}) => {
    return (
      <>
        <Text style={style.text}>Title: {item.title}</Text>
        <FastImage
          style={{width: 200, height: 200}}
          source={{
            uri: item.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.web,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </>
    );
  };
  const renderItemSeperator = () => {
    return <View style={style.itemBorder}></View>;
  };
  const renderItemBorder = () => {
    return <View style={style.border}></View>;
  };
  const renderFlatList = () => {
    return (
      <>
        <Text style={style.caption}>User List</Text>
        <ScrollView>
          <FlatList
            data={listData}
            renderItem={renderCellItem}
            ItemSeparatorComponent={renderItemSeperator}
            ListFooterComponent={renderItemBorder}
            ListHeaderComponent={renderItemBorder}
          />
        </ScrollView>
      </>
    );
  };
  return <>{renderFlatList()}</>;
};

export default FastImageContainer;
