import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WishaList } from '../wishaList';

import { getRecords, getSpecialty, sendNewUser } from '../../actions/wishListAction';

class WishListContainer extends React.Component<any, any> {
  render() {
    return (
      <WishaList 
        wishList={this.props.wishList}
        specialty={this.props.specialty}

        getRecordsAction={this.props.getRecords} 
        getSpecialtyAction={this.props.getSpecialty}
        sendNewUserAction={this.props.sendNewUser}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    wishList: state.wishList.users,
    specialty: state.wishList.specialty,
  };
};

const mapDispatchToProps = (dispath: any) =>
  bindActionCreators({
    getRecords,
    getSpecialty,
    sendNewUser,
  }, dispath);

export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer);