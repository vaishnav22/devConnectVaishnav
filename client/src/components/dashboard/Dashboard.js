import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentProfile } from "../../actions/profileActions"

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }

  render() {
    return <div>Dashboard</div>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
