import React, { Component } from "react"
import propTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentProfile } from "../../actions/profileActions"

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }

  render() {
    const { user } =this.props.auth
    const { profile, loading } = this.props.profile

    let dashBoardContent;

    if(profile === null || loading ){
      dashBoardContent = <h4>Loading....</h4>
    } else {
      dashBoardContent = <h4>Hello</h4>
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashBoardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propType = {
  getCurrentProfile: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  profile: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
