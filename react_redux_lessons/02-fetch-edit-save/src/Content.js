import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from './components/Card';
import Form from './components/Form';
import user from './user';
import {api} from './utils/api'
import {decode} from './utils/base64'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: '',
      name: '',
      login: '',
      company: '',
      location: '',
      bio: '',
      public_repos: '',
      following: '',
      followers: '',
      secret: decode(user.secret),
      edit: false,
      tempState: {},
      loading: true
    };
    this.editMode = this.editMode.bind(this);
    this.changeFunc = this.changeFunc.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.discardChanges = this.discardChanges.bind(this);
  }

  componentWillMount() {
    api(this.state.secret).get().then(
      res => {
        this.setState({...res});
        this.setState({loading: false});
      }
    )
  }

  editMode() {
    this.setState({tempState: {...this.state}});
    this.setState({edit: true})
  }

  saveChanges() {
    api(this.state.secret).patch({
      "name": this.state.name,
      "company": this.state.company,
      "location": this.state.location,
      "bio": this.state.bio
    }).then(res => {
      this.setState({edit: false});
    })
  }

  discardChanges() {
    this.setState({...this.state.tempState});
  }

  changeFunc = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const {
      avatar_url: imgUrl,
      html_url: pageLink,
      name,
      login,
      company,
      location,
      public_repos: repositories,
      following,
      followers,
      bio,
      edit,
      loading
    } = this.state;
    return (
      edit
        ? <Form
          name={name}
          company={company}
          location={location}
          bio={bio}
          changeFunc={this.changeFunc}
          save={this.saveChanges}
          cancel={this.discardChanges}
        />
        : loading
          ? <CircularProgress />
          : <Card
              imgUrl={imgUrl}
              pageLink={pageLink}
              name={name}
              login={login}
              company={company}
              location={location}
              bio={bio}
              repositories={repositories}
              following={following}
              followers={followers}
              clickFunction={this.editMode}
            />
    )
  }

};
export default Content;
