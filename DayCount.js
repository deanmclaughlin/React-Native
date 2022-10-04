import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Count({ navigation, route }) {
  const {user, birthDate, thisDate, age} = route.params;
  const message = getMessage(birthDate, thisDate);

  return (
    <View style={styles.container}>
      <Text>{user.toUpperCase()}!</Text>
      <p></p>
      <Text>Your birth date is: {birthDate}.</Text>
      <Text>Today's date is: {thisDate}.</Text>
      <Text>So, you are {age} years old right now.</Text>
      <p></p>
      <Text>In fact ...</Text>
      <p></p>
      <Text style={styles.centered}>{message}</Text>
      <p></p>
      <Pressable onPress={() => { navigation.navigate("Birthday Tool") }} style={styles.mybutton}>
        <Text style={styles.buttontext}>GO BACK TO<br/>THE TOOL</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "top",
    marginTop: "5em",
    width: "50vw"
  },
  mybutton: {
    paddingTop: "0.5em",
    paddingRight: "1em",
    paddingBottom: "0.5em",
    paddingLeft: "1em",
    backgroundColor: "rgb(155,205,255)",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: "10px"
  },
  buttontext: {
    color: "rgb(40,40,40)",
    fontWeight: "bold"
  },
  centered: {
    textAlign: "center"
  }
});

function getMessage(bday, today) {
  let msg="WHAAAT?";

  const bdayDate = new Date(bday);
  const todayDate = new Date(today);
  const lastBday = new Date(bday);
  const nextBday = new Date(bday);

  lastBday.setFullYear(todayDate.getFullYear());
  nextBday.setFullYear(todayDate.getFullYear()+1);
  if ( (todayDate.getMonth() < bdayDate.getMonth())
       || (todayDate.getMonth() === bdayDate.getMonth() && todayDate.getDate() < bdayDate.getDate())) {
        lastBday.setFullYear(lastBday.getFullYear()-1);
        nextBday.setFullYear(nextBday.getFullYear()-1);
  }

  if (todayDate.getMonth() === bdayDate.getMonth()
      && todayDate.getDate() === bdayDate.getDate()) {
        msg = "Today is your birthday!!!\nTHAT IS SPECIAL";
  } else {
        let daysSince = Math.round((todayDate - lastBday)/(1000*60*60*24));
        let daysUntil = Math.round((nextBday - todayDate)/(1000*60*60*24));
        msg = `Your last birthday was ${daysSince} days ago.\n`+
              `Your next birthday will be ${daysUntil} days from now.\n`;
  }

  return msg;
}
