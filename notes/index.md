const Adduser = async () => {
    const maher = 'maherdatabaase';

    try {
      await firestore()
        .collection('users')
        .doc(`${maher}`)
        .set({name: 'mager'});

      firestore().collection('feedback').add({
        fecback: 'HELLLLO',
      });

      console.log(' Added  success');
    } catch (error) {
      console.error(error, 'ERROR');
    }
  };


---------------

<AppIntroSlider
          renderItem={renderSlide}
          data={slides}
          activeDotStyle={{
            backgroundColor: "#0A9918",
            width: 30
          }}
          dotStyle={{
            backgroundColor: "rgba(255, 255, 255, .2)"
          }}
          showPrevButton={true}
          renderPrevButton={() =>
            <View style={styleBtnSlideAvatar}>
              <Text 
                style={TextBtnSlideAvatar}>
                  <Icon name="navigate-before" size={30} color="#fff"></Icon>
              </Text>
            </View>
          }
          showDoneButton={false}
          renderNextButton={() => 
            <View style={styleBtnSlideAvatar}>
              <Text style={TextBtnSlideAvatar}>
                <Icon name="navigate-next" size={30} color="#fff"></Icon>
              </Text>
            </View>
          }
        
          />


          ------------------------