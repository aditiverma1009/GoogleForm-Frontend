import React from 'react';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import TitleInputField from '../TitleInputField/TitleInputField';
import AddBtn from '../AddBtn/AddBtn';
import './title-floating-card-inner.css';

class TitleFloatingCardInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <SubmitBtn />
        <TitleInputField />
        <AddBtn />
      </div>
    );
  }
}

export default TitleFloatingCardInner;
