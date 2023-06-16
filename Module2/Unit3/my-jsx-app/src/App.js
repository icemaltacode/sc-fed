import React, { Component } from 'react';

class Link extends Component {
  render() {
    return <p>
      <a href={this.props.href}>{this.props.children}</a>
    </p>
  }
}

class CurrentTime extends Component {
  getGreeting(hour) {
    if (hour <= 11) {
      return "Good morning!";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon!";
    }
    return "Good evening!";
  }
  render() {
    const currentTime = new Date().toLocaleString();
    return <span>It is currently {currentTime}. Time to say {this.getGreeting(new Date().getHours())} </span>
  }
}

class TextField extends Component {
  render() {
    return <p>
      <input type="text" {...this.props} />
    </p>
  }
}

class LocalisedText extends Component {
  render() {
    if (! ['en', 'it', 'jp'].includes(this.props.lang) || this.props.str < 0 || this.props.str > 2) {
      return null;
    } 
    
    const strEnglish = ['Good morning', 'your cart is empty', 'Thank you'];
    const strItalian = ['Buongiorno', 'il tuo carrello è vuoto', 'Grazie'];
    const strJapanese = ['おはよう', 'あなたのカートは空です', 'ありがとう']
    
    if (this.props.lang === 'en') {
      return strEnglish[this.props.str];
    } else if (this.props.lang === 'it') {
      return strItalian[this.props.str];
    } else if (this.props.lang === 'jp') {
      return strJapanese[this.props.str];
    }
  }
}

class ContactList extends Component {
  render() {
    return <div>
      <h2>Contacts</h2>
      {this.props.contacts.length === 0 ? <p>You have no contacts</p> :
        <ol>
          {this.props.contacts.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      }
    </div>
  }
}

class ValidEmail extends Component {
  isValid(email) {
    return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
  }
  render() {
    return <p>
      {this.props.children} 
      {this.isValid(this.props.children) && " ✅"}
    </p>
  }
}

class CommentIcon extends Component {
  render() {
    const actionIcon = {
      loggedIn: "✍🏼",
      loggedOut: "🔐",
      unknown: "❓"
    };
    return actionIcon[this.props.status] || actionIcon.unknown
  }
}

class UseMilesCheckbox extends Component {
  render() {
    return <>Use Miles: {this.props.sufficientMiles ? 
      <span><input type="checkbox" checked /></span>:
      <span><input type="checkbox" /* not enough miles */ disabled />(Insufficient Miles in Account)</span>
    }
    <br/>
    </>
  }
}

class TravelDocument extends Component {
  isSchengen(destination) {
    const schengenZone = ['AUT', 'BEL', 'CZE', 'HRV', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC'];
    return schengenZone.includes(destination);
  }
  render() {
    // Inform user whether they must use their Visa or whether they can also use ID card
    return <span>Book with Visa {this.isSchengen(this.props.destination) && "or ID card"}</span>;
  }
}

class BookingWidget extends Component {
  render() {
    return <>
      {/* Display a checkbox showing the user whether they can use their miles.
          Also inform the user which travel document(s) they can use to travel */}
      <UseMilesCheckbox sufficientMiles={this.props.sufficientMiles} /> 
      <button><TravelDocument destination={this.props.destination} /></button>
    </>
  }
}

class InterestWidget extends Component {
  render() {
    return <>
      {// prompt the user to register for when flights are available
      }
      <p>Sorry! We have no flights to {this.props.destination} on your dates 😭</p>
      <p>If you would like, give us your email below to be notified when flights become available.</p>
      <input type="email" placeholder="Your email here"></input>
      <input type="submit" value="Register"></input>
    </>
  }
}

class UndeterminableWidget extends Component {
  render() {
    return <p>Sorry! We cannot determine flight availability for your destination.</p>
  }
}

class CheckInWidget extends Component {
  render() {
    if (!this.props.dates || !this.props.destination) {
      return null;
    }

    const widgetOptions = {
      available: <BookingWidget sufficientMiles={this.props.sufficientMiles} destination={this.props.destination} />,
      unavailable: <InterestWidget destination={this.props.destination} />,
      other: <UndeterminableWidget />
    }

    return widgetOptions[this.props.availability] || widgetOptions.other
  }
}

class App extends Component {
  render() {
    return <>
      <h1>My JSX App</h1>
      <Link href="//reactjs.org">Learn more about React</Link>
      <Link href="//reddit.com/r/reactjs/">Check the React sub-reddit!</Link>
      <CurrentTime />
      <TextField placeholder="Type something here" size="50" required/>
      <LocalisedText lang="de" str="2"/>
      <LocalisedText lang="jp" str="1"/>
      <ContactList contacts={["joe","frank"]} />
      <ValidEmail>invalid.email</ValidEmail>
      <ValidEmail>valid@email.com</ValidEmail>
      <p>Write a comment <CommentIcon status="loggedIn" /></p>
      <p>Write a comment <CommentIcon status="error" /></p>
      <p><CheckInWidget destination="FRA" availability="available" sufficientMiles={true}/></p>
      <p><CheckInWidget dates="2023-02-19,2023-02-28" destination="FRA" availability="available" sufficientMiles={true}/></p>
      <p><CheckInWidget dates="2023-02-19,2023-02-28" destination="FRA" availability="available" sufficientMiles={false}/></p>
      <p><CheckInWidget dates="2023-02-19,2023-02-28" destination="UK" availability="available" sufficientMiles={true}/></p>
      <p><CheckInWidget dates="2023-02-19,2023-02-28" destination="USA" availability="unavailable" sufficientMiles={true}/></p>
      <p><CheckInWidget dates="2023-02-19,2023-02-28" destination="USA" availability="unknown" sufficientMiles={true}/></p>
    </>
  }
}

export default App;