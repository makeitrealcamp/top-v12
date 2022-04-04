import React from 'react';
import {Text, View, TextInput, Alert} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import {Formik} from 'formik';
import styles from './Form.styles';
import * as Yup from 'yup';

const App = () => {
  this.emailInput = null;
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <View style={{...useSafeAreaInsets, paddingTop: safeAreaInsets.top + 200}}>
      <Text style={styles.title}>Formik x React Native</Text>
      <Formik
        initialValues={{name: '', email: ''}}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Required')
            .min(2, 'Too Short!')
            .max(8, 'Too Long!'),
          email: Yup.string().email('Invalid Email').required('Required'),
        })}
        onSubmit={(values, formikActions) => {
          setTimeout(() => {
            Alert.alert(JSON.stringify(values));
            // Important: Make sure to setSubmitting to false so our loading indicator
            // goes away.
            formikActions.setSubmitting(false);
          }, 500);
        }}>
        {props => (
          <View>
            <TextInput
              onChangeText={props.handleChange('name')}
              onBlur={props.handleBlur('name')}
              value={props.values.name}
              autoFocus
              placeholder="Your Name"
              style={styles.input}
              onSubmitEditing={() => {
                // on certain forms, it is nice to move the user's focus
                // to the next input when they press enter.
                this.emailInput.focus();
              }}
            />
            {props.touched.name && props.errors.name ? (
              <Text style={styles.error}>{props.errors.name}</Text>
            ) : null}
            <TextInput
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              placeholder="Email Address"
              style={styles.input}
              ref={el => (this.emailInput = el)}
            />
            {props.touched.email && props.errors.email ? (
              <Text style={styles.error}>{props.errors.email}</Text>
            ) : null}
            <Button
              onPress={props.handleSubmit}
              color="black"
              mode="contained"
              loading={props.isSubmitting}
              disabled={props.isSubmitting}
              style={{marginTop: 16}}>
              Submit
            </Button>
            <Button
              onPress={props.handleReset}
              color="black"
              mode="outlined"
              disabled={props.isSubmitting}
              style={{marginTop: 16}}>
              Reset
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default App;
