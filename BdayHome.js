import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import ReceiveInput from './ReceiveInput';
import { useState } from 'react';

const today = new Date().toLocaleDateString().split(",")[0];

export default function BdayHome({ navigation }) {
  const [userName, setUserName] = useState("Nobody");
  const [birthDate, setBirthDate] = useState(today);
  const [age, setAge] = useState(-100);
  const [showButton, setShowButton] = useState(false);

  return (

    <View style={styles.container}>

      <ReceiveInput name="Your Name" placeholder={userName} callBack={(newValue) => {setShowButton(false); setUserName(newValue);}}/>
      <p></p>
      <ReceiveInput name="Birth Date (IN FORMAT SHOWN)" placeholder={today} callBack={(newValue) => {setShowButton(false); setBirthDate(newValue);}}/>
      <p></p>

      <Text>Hey, {userName}. You say you were born on {birthDate}.</Text>
      <p></p>
      <Pressable onPress={() => { setAge(getAge(birthDate)); setShowButton(true); }} style={styles.mybutton}>
        <Text style={styles.buttontext}>CALCULATE<br/>YOUR AGE</Text>
      </Pressable>
      {showButton && age>=0
        ? (<>
            <p></p>
            <Text>You are {age} years old right now.</Text>
            <p></p>
            <Pressable onPress={() => { setShowButton(false);
                                        navigation.navigate("Day Count", {user: userName, birthDate: birthDate, thisDate: today, age: age});}}
                       style={styles.mybutton}>
              <Text style={styles.buttontext}>TODAY<br/>vs<br/>YOUR BIRTHDAY</Text>
            </Pressable>
          </>)
        : null }

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
  }
});

function getAge(bday) {
  let age = -100;
  const check = new Date(bday).toString();
  if (check === "Invalid Date") {
    alert("INVALID BIRTH DATE: CHECK FORMAT");
    return age;
  }
  const bdayDate = new Date(bday);
  const todayDate = new Date(today);
  if (todayDate < bdayDate) {
    alert("INVALID BIRTH DATE: IN THE FUTURE");
    return age;
  }
  age = todayDate.getFullYear() - bdayDate.getFullYear(); 
  if ( (todayDate.getMonth() < bdayDate.getMonth())
       || (todayDate.getMonth() === bdayDate.getMonth() && todayDate.getDate() < bdayDate.getDate())) {
        age = age - 1;
  }
  return age;
}

/*
function calcs(bday) {
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

  alert(lastBday + "\n\n" + nextBday);
  alert(lastBday.getFullYear() + "\n\n" + nextBday.getFullYear());
  alert("Birth date: " + bdayDate + "   " + "Today: " + todayDate)

  if (todayDate.getMonth() === bdayDate.getMonth()
      && todayDate.getDate() === bdayDate.getDate()) {
        alert("Today is your birthday.\n\nTHAT'S SPECIAL.");
  } else {
        let daysSince = Math.round((todayDate - lastBday)/(1000*60*60*24));
        let daysUntil = Math.round((nextBday - todayDate)/(1000*60*60*24));
        alert(`\nYour last birthday was ${daysSince} days ago.\n`+
              `\nYour next birthday will be ${daysUntil} days from now.\n`);
  }
  return;
}
*/
