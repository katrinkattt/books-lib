/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={styles.textLg}>Hello there,</Text>
            <Text
              style={[styles.textXL, styles.appTitleText]}
              testID="heading"
              role="heading"
            >
              Welcome Books 👋
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.hero}>
              <TouchableOpacity
                style={styles.whatsNextButton}
                onPress={() => {console.log('efbhjfb')
                }}
              >
                <Text style={[styles.textMd, styles.textCenter]}>
                  What's next?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.shadowBox}>
              <Text style={[styles.textLg, styles.marginBottomMd]}>
                Next steps
              </Text>
              <Text
                style={[styles.textSm, styles.textLight, styles.marginBottomMd]}
              >
                Here are some things you can do with Nx:
              </Text>
              
              <View style={styles.listItem}>
                <View style={styles.listItemTextContainer}>
                  <Text style={styles.textSm}>
                    View interactive project graph
                  </Text>
                </View>
              </View>
              <View style={styles.listItem}>
                <View style={styles.listItemTextContainer}>
                  <Text style={styles.textSm}>Run affected commands</Text>
                </View>
              </View>
              <View style={styles.codeBlock}>
                <Text style={[styles.textXS, styles.monospace, styles.comment]}>
                  # See what's affected by changes hfw ro
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  codeBlock: {
    backgroundColor: 'rgba(55, 65, 81, 1)',
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: '#ffffff',
    fontFamily: 'Courier New',
    marginVertical: 4,
  },
  comment: {
    color: '#cccccc',
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: '300',
  },
  textCenter: {
    textAlign: 'center',
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  textContainer: {
    marginVertical: 12,
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    padding: 36,
    marginBottom: 24,
  },
  whatsNextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
  },
});

export default App;
